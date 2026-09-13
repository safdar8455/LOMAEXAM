
import { auth } from './firebase';

export enum OperationType {
  CREATE = 'create',
  UPDATE = 'update',
  DELETE = 'delete',
  LIST = 'list',
  GET = 'get',
  WRITE = 'write',
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
  completedAt: string;
}

const STORAGE_KEY = 'loma280_progress';
const ASSESSMENTS_KEY = 'loma_assessment_history';
const USERS_KEY = 'loma_users';

const readJson = <T>(key: string, fallback: T): T => {
  try {
    const saved = localStorage.getItem(key);
    return saved ? (JSON.parse(saved) as T) : fallback;
  } catch {
    return fallback;
  }
};

const readUsers = () => readJson<any[]>(USERS_KEY, []);

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
    [chapterId]: newProgress,
  };

  localStorage.setItem(STORAGE_KEY, JSON.stringify(data));

  const userId = auth.currentUser?.uid || 'guest';
  if (userId !== 'guest') {
    const history = readJson<AssessmentRecord[]>(ASSESSMENTS_KEY, []);
    history.unshift({
      id: `${Date.now()}-${Math.random().toString(16).slice(2)}`,
      userId,
      assessmentId: chapterId,
      assessmentTitle: title,
      score,
      totalQuestions,
      completedAt: new Date().toISOString(),
    });
    localStorage.setItem(ASSESSMENTS_KEY, JSON.stringify(history));
  }

  return data;
};

export const getLocalProgress = (): ProgressData => {
  return readJson<ProgressData>(STORAGE_KEY, {});
};

export const getFirestoreAssessments = async (userId: string): Promise<AssessmentRecord[]> => {
  const history = readJson<AssessmentRecord[]>(ASSESSMENTS_KEY, []);
  return history
    .filter((item) => item.userId === userId)
    .sort((a, b) => new Date(b.completedAt).getTime() - new Date(a.completedAt).getTime());
};

export const saveUserProfile = async (uid: string, phoneNumber: string, email?: string) => {
  const users = readUsers();
  const existingIndex = users.findIndex((user: any) => user.uid === uid);

  const nextUser = {
    uid,
    phoneNumber: phoneNumber || '',
    email: email || '',
    createdAt: existingIndex >= 0 ? users[existingIndex].createdAt : new Date().toISOString(),
    role: existingIndex >= 0 ? users[existingIndex].role || 'student' : 'student',
  };

  if (existingIndex >= 0) {
    users[existingIndex] = nextUser;
  } else {
    users.push(nextUser);
  }

  localStorage.setItem(USERS_KEY, JSON.stringify(users));
  localStorage.setItem('loma_current_user', JSON.stringify(nextUser));

  auth.currentUser = {
    uid: nextUser.uid,
    phoneNumber: nextUser.phoneNumber,
    email: nextUser.email,
    role: nextUser.role,
  };

  window.dispatchEvent(new Event('loma-auth-changed'));
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

export const getProgress = getLocalProgress;
