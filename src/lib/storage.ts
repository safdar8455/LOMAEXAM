
import { db, auth } from './firebase';
import { 
  collection, 
  addDoc, 
  query, 
  where, 
  getDocs, 
  orderBy, 
  serverTimestamp,
  doc,
  getDoc,
  setDoc
} from 'firebase/firestore';

export enum OperationType {
  CREATE = 'create',
  UPDATE = 'update',
  DELETE = 'delete',
  LIST = 'list',
  GET = 'get',
  WRITE = 'write',
}

interface FirestoreErrorInfo {
  error: string;
  operationType: OperationType;
  path: string | null;
  authInfo: {
    userId?: string | null;
    email?: string | null;
    emailVerified?: boolean | null;
    isAnonymous?: boolean | null;
  }
}

function handleFirestoreError(error: unknown, operationType: OperationType, path: string | null) {
  const errInfo: FirestoreErrorInfo = {
    error: error instanceof Error ? error.message : String(error),
    authInfo: {
      userId: auth.currentUser?.uid,
      email: auth.currentUser?.email,
      emailVerified: auth.currentUser?.emailVerified,
      isAnonymous: auth.currentUser?.isAnonymous,
    },
    operationType,
    path
  };
  console.error('Firestore Error: ', JSON.stringify(errInfo));
  throw new Error(JSON.stringify(errInfo));
}

export interface ChapterProgress {
  bestScore: number;
  lastScore: number;
  completedCount: number;
  lastDate: string;
}

export interface ProgressData {
  [mode: string]: {
    [chapterId: string]: ChapterProgress;
  };
}

export interface AssessmentRecord {
  id: string;
  userId: string;
  assessmentId: string;
  assessmentTitle: string;
  score: number;
  totalQuestions: number;
  completedAt: any;
}

const STORAGE_KEY = 'loma280_progress';

export const saveProgress = async (mode: string, chapterId: string, score: number, totalQuestions: number, title: string) => {
  const data = getLocalProgress();
  const modeData = data[mode] || {};
  const prevProgress = modeData[chapterId] || { bestScore: 0, lastScore: 0, completedCount: 0, lastDate: '' };

  const newProgress: ChapterProgress = {
    bestScore: Math.max(prevProgress.bestScore, score),
    lastScore: score,
    completedCount: (prevProgress.completedCount || 0) + 1,
    lastDate: new Date().toISOString(),
  };

  data[mode] = {
    ...modeData,
    [chapterId]: newProgress
  };

  localStorage.setItem(STORAGE_KEY, JSON.stringify(data));

  // Sync with Firestore if logged in
  if (auth.currentUser) {
    const path = 'assessments';
    try {
      await addDoc(collection(db, path), {
        userId: auth.currentUser.uid,
        assessmentId: chapterId,
        assessmentTitle: title,
        score,
        totalQuestions,
        completedAt: serverTimestamp()
      });
    } catch (error) {
      handleFirestoreError(error, OperationType.WRITE, path);
    }
  }

  return data;
};

export const getLocalProgress = (): ProgressData => {
  const saved = localStorage.getItem(STORAGE_KEY);
  if (!saved) return {};
  try {
    return JSON.parse(saved);
  } catch {
    return {};
  }
};

export const getFirestoreAssessments = async (userId: string): Promise<AssessmentRecord[]> => {
  const path = 'assessments';
  try {
    const q = query(
      collection(db, path),
      where('userId', '==', userId),
      orderBy('completedAt', 'desc')
    );
    const snapshot = await getDocs(q);
    return snapshot.docs.map(doc => ({
      id: doc.id,
      ...doc.data()
    } as AssessmentRecord));
  } catch (error) {
    handleFirestoreError(error, OperationType.GET, path);
    return [];
  }
};

export const saveUserProfile = async (uid: string, phoneNumber: string) => {
  const path = `users/${uid}`;
  try {
    const userDoc = await getDoc(doc(db, 'users', uid));
    if (!userDoc.exists()) {
      await setDoc(doc(db, 'users', uid), {
        phoneNumber,
        createdAt: serverTimestamp()
      });
    }
  } catch (error) {
    handleFirestoreError(error, OperationType.WRITE, path);
  }
};

export interface SessionState {
  currentQuestionIndex: number;
  sessionState: Record<number, { selected: number | null, isLocked: boolean }>;
  score: number;
}

const SESSION_PREFIX = 'loma280_session_';

export const saveSession = (assessmentId: string, state: SessionState) => {
  const userId = auth.currentUser?.uid || 'guest';
  localStorage.setItem(`${SESSION_PREFIX}${userId}_${assessmentId}`, JSON.stringify(state));
};

export const getSession = (assessmentId: string): SessionState | null => {
  const userId = auth.currentUser?.uid || 'guest';
  const saved = localStorage.getItem(`${SESSION_PREFIX}${userId}_${assessmentId}`);
  if (!saved) return null;
  try {
    return JSON.parse(saved);
  } catch {
    return null;
  }
};

export const clearSession = (assessmentId: string) => {
  const userId = auth.currentUser?.uid || 'guest';
  localStorage.removeItem(`${SESSION_PREFIX}${userId}_${assessmentId}`);
};

// Alias for App.tsx compatibility if needed
export const getProgress = getLocalProgress;
