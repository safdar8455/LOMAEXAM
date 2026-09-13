import React, { useState, useMemo, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { CheckCircle2, XCircle, ChevronRight, RotateCcw, Award, BookOpen, AlertCircle, LayoutGrid, Calendar, User as UserIcon, LogOut, History, Phone as PhoneIcon, Loader2, Globe, Library, ArrowLeft, Shield, CreditCard } from 'lucide-react';
import { Question, Chapter, Course, Subscription, CourseAssignment } from './types';
import { COURSES } from './data/allCourses';
import { saveProgress, getProgress, ProgressData, getFirestoreAssessments, AssessmentRecord, saveSession, getSession, clearSession } from './lib/storage';
import { useAuth, signOutLocalUser } from './lib/AuthContext';
import { auth } from './lib/firebase';
import { PhoneAuth } from './components/PhoneAuth';
import { format } from 'date-fns';
import { 
  initializeCoursesInFirestore, 
  getFirestoreCourses, 
  toggleCourseApproval, 
  createNewCourseInFirestore, 
  deleteCourseFromFirestore 
} from './lib/courseServices';
import { getUserSubscriptions, getAllSubscriptions } from './lib/subscrptionServices';
import { SubscriptionForm } from './components/SubsciptionForm';
import { AdminSubscriptions } from './components/AdminSubscrption';
import { AdminLogin } from './components/AdminLogin';
import { UserManagement } from './components/UserManagement';
import { CourseAssignments } from './components/CourseAssignment';
import { getUserAssignments } from './lib/AssignmentServices';

export default function App() {
  const [selectedCourseId, setSelectedCourseId] = useState<string | null>(null);
  const [appMode, setAppMode] = useState<'learning' | 'assessment' | 'simulation' | 'profile'>('learning');
  const [selectedChapterId, setSelectedChapterId] = useState<number | null>(null);
  const [allProgress, setAllProgress] = useState<ProgressData>({});
  const [assessmentHistory, setAssessmentHistory] = useState<AssessmentRecord[]>([]);
  const [loadingHistory, setLoadingHistory] = useState(false);
  const { user, profile, loading: authLoading, setRole } = useAuth();

  // URL path / hash state router
  const [routePath, setRoutePath] = useState<string>(() => {
    const path = window.location.pathname;
    const hash = window.location.hash;
    if (path.includes('/admin-dashboard') || hash === '#admin-dashboard') return '/admin-dashboard';
    if (path.includes('/course-management') || hash === '#course-management') return '/course-management';
    if (path.includes('/subscription-management') || hash === '#subscription-management') return '/subscription-management';
    if (path.includes('/user-management') || hash === '#user-management') return '/user-management';
    if (path.includes('/admin') || hash === '#admin') return '/admin';
    if (path.includes('/profile') || hash === '#profile') return '/profile';
    return '/';
  });
  const [unauthorizedError, setUnauthorizedError] = useState<string | null>(null);
  
  // Mode helpers to avoid TypeScript narrowing issues
  const isLearningMode = appMode === 'learning';
  const isAssessmentMode = appMode === 'assessment';
  const isSimulationMode = appMode === 'simulation';

  const navigate = (path: string) => {
    setRoutePath(path);
    if (path === '/admin-dashboard') {
      setSelectedCourseId(null);
      setAppMode('learning');
    }
    window.history.pushState(null, '', path);
  };

  useEffect(() => {
    const handlePopState = () => {
      const path = window.location.pathname;
      const hash = window.location.hash;
      if (path.includes('/admin-dashboard') || hash === '#admin-dashboard') setRoutePath('/admin-dashboard');
      else if (path.includes('/course-management') || hash === '#course-management') setRoutePath('/course-management');
      else if (path.includes('/subscription-management') || hash === '#subscription-management') setRoutePath('/subscription-management');
      else if (path.includes('/user-management') || hash === '#user-management') setRoutePath('/user-management');
      else if (path.includes('/admin') || hash === '#admin') setRoutePath('/admin');
      else if (path.includes('/profile') || hash === '#profile') setRoutePath('/profile');
      else setRoutePath('/');
    };
    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  // Route authorization protection
  useEffect(() => {
    if (authLoading) return; // Wait for auth to load
    
    const isUserAdmin = profile?.role === 'admin';
    const adminProtectedRoutes = [
      '/admin-dashboard',
      '/course-management',
      '/subscription-management',
      '/user-management'
    ];

    if (adminProtectedRoutes.includes(routePath)) {
      // Not logged in - go to admin login
      if (!user) {
        navigate('/admin');
      } 
      // Logged in but profile still resolving - wait
      else if (user && profile === null) {
        return; // Wait for profile to load
      }
      // Logged in but NOT admin - block and redirect
      else if (user && !isUserAdmin) {
        setUnauthorizedError('You are not admin');
        navigate('/');
      }
    } else if (routePath === '/admin') {
      if (user && profile === null) {
        return; // Wait for profile to load
      }
      // Already on admin login page and is admin - go to dashboard
      if (user && isUserAdmin) {
        navigate('/admin-dashboard');
      }
    }
  }, [user, profile?.role, profile, authLoading, routePath]);

  // Firestore course approval tracking state
  const [firestoreCourses, setFirestoreCourses] = useState<Record<string, { id: string, approved: boolean, title: string, shortTitle: string, description: string, custom?: boolean }>>({});
  const [coursesLoading, setCoursesLoading] = useState(true);

  // Form states for creating a custom catalog
  const [newCourseId, setNewCourseId] = useState('');
  const [newCourseTitle, setNewCourseTitle] = useState('');
  const [newCourseShort, setNewCourseShort] = useState('');
  const [newCourseDesc, setNewCourseDesc] = useState('');
  const [creationError, setCreationError] = useState<string | null>(null);
  const [creatingCourse, setCreatingCourse] = useState(false);

  // Subscription management state
  const [userSubscriptions, setUserSubscriptions] = useState<Subscription[]>([]);
  const [adminSubscriptions, setAdminSubscriptions] = useState<Subscription[]>([]);
  const [subsLoading, setSubsLoading] = useState(false);
  const [adminTab, setAdminTab] = useState<'courses' | 'subscriptions' | 'users' | 'assignments'>('courses');
  const [userAssignments, setUserAssignments] = useState<CourseAssignment[]>([]);
  const [assignmentsLoading, setAssignmentsLoading] = useState(false);
  const [showSubscriptionForm, setShowSubscriptionForm] = useState(false);

  useEffect(() => {
    setAllProgress(getProgress());
  }, []);

  useEffect(() => {
    if (user && auth.currentUser) {
      loadHistory();
    }
  }, [user]);

  const loadHistory = async () => {
    if (!user || !auth.currentUser) return;
    setLoadingHistory(true);
    try {
      const history = await getFirestoreAssessments(user.uid);
      setAssessmentHistory(history);
    } catch (error) {
      console.warn('Silent fallback for history loading:', error);
    } finally {
      setLoadingHistory(false);
    }
  };

  const loadSubscriptions = async () => {
    if (!user || !auth.currentUser) return;
    setSubsLoading(true);
    try {
      const mySubs = await getUserSubscriptions(user.uid);
      setUserSubscriptions(mySubs);
      
      const isAdmin = profile?.role === 'admin';
      if (isAdmin && auth.currentUser) {
        const allSubs = await getAllSubscriptions();
        setAdminSubscriptions(allSubs);
      }
    } catch (error) {
      console.warn('Silent fallback for subscriptions loading:', error);
    } finally {
      setSubsLoading(false);
    }
  };

  const loadAssignments = async () => {
    if (!user || !auth.currentUser) return;
    setAssignmentsLoading(true);
    try {
      const myAssignments = await getUserAssignments(user.uid);
      setUserAssignments(myAssignments);
    } catch (error) {
      console.warn('Silent fallback for assignments loading:', error);
    } finally {
      setAssignmentsLoading(false);
    }
  };

  const loadCoursesData = async (isAdmin: boolean) => {
    if (!auth.currentUser) return;
    setCoursesLoading(true);
    try {
      if (isAdmin) {
        await initializeCoursesInFirestore(COURSES);
      }
      const dbCourses = await getFirestoreCourses(isAdmin);
      const appMap: Record<string, { id: string, approved: boolean, title: string, shortTitle: string, description: string, custom?: boolean }> = {};
      dbCourses.forEach(c => {
        const isStatic = COURSES.some(sc => sc.id === c.id);
        appMap[c.id] = {
          id: c.id,
          approved: c.approved,
          title: c.title,
          shortTitle: c.shortTitle,
          description: c.description,
          custom: !isStatic
        };
      });
      setFirestoreCourses(appMap);
    } catch (error) {
      console.warn("Silent fallback for course approvals loading:", error);
    } finally {
      setCoursesLoading(false);
    }
  };

  useEffect(() => {
    if (user && auth.currentUser) {
      const isAdmin = profile?.role === 'admin';
      loadCoursesData(isAdmin);
      loadSubscriptions();
      loadAssignments();
    }
  }, [user, profile?.role]);

  // Sync URL search parameters on load
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const courseId = params.get('courseId');
    if (courseId) {
      setSelectedCourseId(courseId);
    }
  }, []);

  // Update URL search parameters when selectedCourseId changes
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    if (selectedCourseId) {
      params.set('courseId', selectedCourseId);
    } else {
      params.delete('courseId');
    }
    const newPath = `${window.location.pathname}?${params.toString()}`;
    window.history.replaceState({}, '', newPath);
  }, [selectedCourseId]);

  const handleToggleApproval = async (courseId: string, currentState: boolean) => {
    try {
      await toggleCourseApproval(courseId, !currentState);
      setFirestoreCourses(prev => {
        if (!prev[courseId]) return prev;
        return {
          ...prev,
          [courseId]: { ...prev[courseId], approved: !currentState }
        };
      });
    } catch (err) {
      console.error("Failed to toggle approval:", err);
    }
  };

  const handleCreateCourseSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!newCourseId || !newCourseTitle || !newCourseShort) {
      setCreationError("Please fill in all required fields.");
      return;
    }
    const cleanId = newCourseId.trim().toLowerCase().replace(/[^a-z0-9_-]/g, '');
    if (!cleanId) {
      setCreationError("ID must be lowercase alphabetic, numeric, hyphens or underscores.");
      return;
    }
    if (firestoreCourses[cleanId] || COURSES.some(c => c.id === cleanId)) {
      setCreationError("A course with this ID already exists.");
      return;
    }

    setCreatingCourse(true);
    setCreationError(null);
    try {
      await createNewCourseInFirestore({
        id: cleanId,
        title: newCourseTitle.trim(),
        shortTitle: newCourseShort.trim(),
        description: newCourseDesc.trim()
      });
      setNewCourseId('');
      setNewCourseTitle('');
      setNewCourseShort('');
      setNewCourseDesc('');
      await loadCoursesData(true);
    } catch (err: any) {
      setCreationError(err.message || "Failed to create course.");
    } finally {
      setCreatingCourse(false);
    }
  };

  const handleDeleteCourse = async (courseId: string) => {
    if (!window.confirm("Are you sure you want to delete this custom course?")) return;
    try {
      await deleteCourseFromFirestore(courseId);
      setFirestoreCourses(prev => {
        const next = { ...prev };
        delete next[courseId];
        return next;
      });
    } catch (err) {
      console.error("Failed to delete course:", err);
    }
  };

  const visibleCourses = useMemo(() => {
    const isAdminUser = profile?.role === 'admin';
    const list = [...COURSES];

    // Merge in custom dynamic courses from Firestore
    const coursesArray = Object.values(firestoreCourses) as Array<{
      id: string;
      approved: boolean;
      title: string;
      shortTitle: string;
      description: string;
      custom?: boolean;
    }>;

    coursesArray.forEach(fc => {
      if (fc.custom && !list.some(c => c.id === fc.id)) {
        list.push({
          id: fc.id,
          shortTitle: fc.shortTitle,
          title: fc.title,
          description: fc.description,
          approved: fc.approved,
          chapters: [
            {
              id: 1,
              title: "Chapter 1: Dynamic Overview",
              description: `A dynamic assessment of core concepts for ${fc.shortTitle}.`,
              questions: [
                {
                  id: 1,
                  lo: "LO 1.1",
                  question: `Welcome to the custom course ${fc.title}. Is this course currently approved by the administration?`,
                  options: ["Yes, and it is now active", "No, it is still pending", "It varies by region"],
                  answer: fc.approved ? 0 : 1,
                  explanation: "This is a custom dynamic course synchronized with the dynamic Firestore Admin Approval system."
                }
              ]
            }
          ],
          simulationRounds: [
            [
              {
                id: 1,
                lo: "LO S.1",
                question: `A custom simulation loop for ${fc.shortTitle}. What is the primary focus of course governance?`,
                options: ["Achieve zero error policy rating", "Deliver optimal customer experiences", "Satisfy continuous study benchmarks", "All of the above"],
                answer: 3,
                explanation: "All objectives are equally fundamental in insurance operations and administration."
              }
            ]
          ]
        });
      }
    });

    return list.map(c => {
      const dbState = firestoreCourses[c.id];
      const isApproved = dbState ? dbState.approved : (c.id === 'loma280' || c.id === 'loma290' || c.id === 'loma301');
      return { ...c, approved: isApproved };
    }).filter(c => {
      if (isAdminUser) return true; // Admins see everything
      return c.approved === true;   // Students ONLY see approved courses
    });
  }, [firestoreCourses, profile?.role]);

  const selectedCourse = useMemo(() => 
    visibleCourses.find(c => c.id === selectedCourseId) || visibleCourses[0], 
  [selectedCourseId, visibleCourses]);

  const isSelectedCourseApproved = useMemo(() => {
    if (!selectedCourseId) return true;
    const courseObj = visibleCourses.find(c => c.id === selectedCourseId);
    return !!courseObj;
  }, [selectedCourseId, visibleCourses]);

  const isSubscriberAdmin = useMemo(() => {
    return profile?.role === 'admin';
  }, [profile?.role]);

  const userSubStatus = useMemo(() => {
    if (isSubscriberAdmin) return { hasAccess: true, status: 'approved' as const };
    if (!selectedCourseId || !user) return { hasAccess: false, status: 'none' as const };
    
    const now = new Date();

    // Check Option 2: Direct Admin Assignments
    const activeAssignment = userAssignments.find(asg => {
      if (asg.courseId !== selectedCourseId) return false;
      if (!asg.active) return false;
      if (asg.expiryDate) {
        return new Date(asg.expiryDate) >= now;
      }
      return true; // Lifetime/permanent
    });
    
    if (activeAssignment) {
      return { 
        hasAccess: true, 
        status: 'approved' as const, 
        accessType: 'admin_granted' as const, 
        assignment: activeAssignment 
      };
    }
    
    // Check Option 1: Find all subscriptions for this course by this user
    const courseSubs = userSubscriptions.filter(s => s.courseId === selectedCourseId);
    
    // Check if there is an approved one that is NOT expired
    const activeSub = courseSubs.find(s => s.status === 'approved' && s.expiryDate && new Date(s.expiryDate) >= now);
    if (activeSub) {
      return { 
        hasAccess: true, 
        status: 'approved' as const, 
        accessType: 'paid' as const, 
        subscription: activeSub 
      };
    }
    
    // Check if there is a pending subscription
    const pendingSub = courseSubs.find(s => s.status === 'pending');
    if (pendingSub) {
      return { hasAccess: false, status: 'pending' as const, subscription: pendingSub };
    }
    
    // Check if there is an expired subscription
    const expiredSub = courseSubs.find(s => s.status === 'approved' && s.expiryDate && new Date(s.expiryDate) < now);
    if (expiredSub) {
      return { hasAccess: false, status: 'expired' as const, subscription: expiredSub };
    }
    
    // Check if there is a rejected subscription
    const rejectedSub = courseSubs.find(s => s.status === 'rejected');
    if (rejectedSub) {
      return { hasAccess: false, status: 'rejected' as const, subscription: rejectedSub };
    }
    
    return { hasAccess: false, status: 'none' as const };
  }, [selectedCourseId, user, userSubscriptions, userAssignments, isSubscriberAdmin]);

  const adminStats = useMemo(() => {
    const coursesArray = Object.values(firestoreCourses) as Array<{
      id: string;
      approved: boolean;
      title: string;
      shortTitle: string;
      description: string;
      custom?: boolean;
    }>;
    const total = coursesArray.length;
    const approved = coursesArray.filter(c => c.approved).length;
    const pending = total - approved;
    return { total, approved, pending };
  }, [firestoreCourses]);

  useEffect(() => {
    if (selectedCourseId && selectedCourseId !== 'loma280' && (appMode === 'assessment' || appMode === 'simulation')) {
      setAppMode('learning');
    }
  }, [selectedCourseId, appMode]);

  const activeChapters = useMemo(() => {
    if (!selectedCourse) return [];
    
    switch(appMode) {
      case 'learning': {
        const base = [...selectedCourse.chapters];
        if (selectedCourse.finalExam) {
          base.push({
            id: 100,
            title: `${selectedCourse.shortTitle} Comprehensive Final Examination`,
            description: `A full bloom-level evaluation across all chapters of ${selectedCourse.shortTitle}.`,
            questions: selectedCourse.finalExam
          });
        }
        return base;
      }
      case 'assessment': {
        if (selectedCourseId !== 'loma280') return selectedCourse.chapters;
        const chaptersToUse = selectedCourse.tpgChapters || selectedCourse.chapters;
        const base = chaptersToUse.map(c => ({
          ...c,
          title: `${selectedCourse.shortTitle} TPG Review: ${c.title.replace('Chapter ', '')}`,
          description: `Official Test Preparation Guide questions for ${selectedCourse.shortTitle}.`
        }));
        if (selectedCourse.tpgFinalExam) {
          base.push({
            id: 100,
            title: `${selectedCourse.shortTitle} TPG Final Sample Examination`,
            description: `Full-length TPG-level practice exam for ${selectedCourse.shortTitle}.`,
            questions: selectedCourse.tpgFinalExam
          });
        }
        return base;
      }
      case 'simulation': {
        if (selectedCourseId !== 'loma280') return selectedCourse.chapters;
        const base = selectedCourse.simulationRounds.map((round, index) => ({
          id: index + 1,
          title: `${selectedCourse.shortTitle} Simulation Round ${index + 1}`,
          description: `Full-length 60-question exam simulation for ${selectedCourse.shortTitle}.`,
          questions: round
        }));
        if (selectedCourse.masteryChallenge) {
          base.push({
            id: 99,
            title: `${selectedCourse.shortTitle} 100-Question Mastery Challenge`,
            description: `The ultimate endurance test for ${selectedCourse.shortTitle} students.`,
            questions: selectedCourse.masteryChallenge
          });
        }
        return base;
      }
      default: return selectedCourse.chapters;
    }
  }, [appMode, selectedCourse]);

  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [sessionState, setSessionState] = useState<Record<number, { selected: number | null, isLocked: boolean }>>({});
  const [score, setScore] = useState(0);
  const [showResults, setShowResults] = useState(false);
  const [isSubmittingAssessment, setIsSubmittingAssessment] = useState(false);
  
  const isInitialized = useRef<string | null>(null);

  // Persist session state
  useEffect(() => {
    if (selectedChapterId !== null && !showResults) {
      const assessmentId = `${selectedCourseId}_${appMode}_${selectedChapterId}`;
      if (isInitialized.current === assessmentId) {
        saveSession(assessmentId, {
          currentQuestionIndex,
          sessionState,
          score
        });
      }
    }
  }, [currentQuestionIndex, sessionState, score, selectedChapterId, selectedCourseId, appMode, showResults]);

  // Load session state
  useEffect(() => {
    if (selectedChapterId !== null && user) {
      const assessmentId = `${selectedCourseId}_${appMode}_${selectedChapterId}`;
      if (isInitialized.current !== assessmentId) {
        const saved = getSession(assessmentId);
        if (saved) {
          setCurrentQuestionIndex(saved.currentQuestionIndex);
          setSessionState(saved.sessionState);
          setScore(saved.score);
        } else {
          setCurrentQuestionIndex(0);
          setSessionState({});
          setScore(0);
        }
        isInitialized.current = assessmentId;
      }
    } else if (selectedChapterId === null) {
      isInitialized.current = null;
    }
  }, [selectedChapterId, user, selectedCourseId, appMode]);

  const currentChapter = useMemo(() => 
    activeChapters.find(c => c.id === selectedChapterId) || null
  , [selectedChapterId, activeChapters]);

  const questions = currentChapter?.questions || [];
  const currentQuestion = questions[currentQuestionIndex];
  const progress = questions.length > 0 ? ((Object.keys(sessionState).filter(k => sessionState[Number(k)].isLocked).length) / questions.length) * 100 : 0;

  const currentStatus = sessionState[currentQuestionIndex] || { selected: null, isLocked: false };

  const handleOptionSelect = (index: number) => {
    if (currentStatus.isLocked) return;
    setSessionState(prev => ({
      ...prev,
      [currentQuestionIndex]: { ...prev[currentQuestionIndex], selected: index, isLocked: false }
    }));
  };

  const handleConfirm = () => {
    if (currentStatus.selected === null || currentStatus.isLocked || !currentQuestion) return;
    const isCorrect = currentStatus.selected === currentQuestion.answer;
    if (isCorrect) setScore(prev => prev + 1);
    
    setSessionState(prev => ({
      ...prev,
      [currentQuestionIndex]: { ...prev[currentQuestionIndex], isLocked: true }
    }));
  };

  const handleNext = async () => {
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(prev => prev + 1);
    } else {
      setIsSubmittingAssessment(true);
      try {
        const finalAccuracy = questions.length > 0 ? Math.round((score / questions.length) * 100) : 0;
        if (selectedChapterId !== null) {
          const assessmentId = `${selectedCourseId}_${appMode}_${selectedChapterId}`;
          const newProgress = await saveProgress(appMode, assessmentId, finalAccuracy, questions.length, currentChapter?.title || 'Unknown');
          setAllProgress(newProgress);
          if (user) loadHistory();
          clearSession(assessmentId);
        }
        setShowResults(true);
      } catch (error) {
        console.warn('Assessment save failed:', error);
      } finally {
        setIsSubmittingAssessment(false);
      }
    }
  };

  const handlePrevious = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(prev => prev - 1);
    }
  };

  const restartQuiz = () => {
    if (selectedChapterId !== null) {
      const assessmentId = `${selectedCourseId}_${appMode}_${selectedChapterId}`;
      clearSession(assessmentId);
    }
    setCurrentQuestionIndex(0);
    setSessionState({});
    setScore(0);
    setShowResults(false);
  };

  const goHome = () => {
    if (selectedChapterId !== null) {
      const assessmentId = `${selectedCourseId}_${appMode}_${selectedChapterId}`;
      clearSession(assessmentId); 
    }
    setSelectedChapterId(null);
    restartQuizInternal();
  };

  const restartQuizInternal = () => {
    setCurrentQuestionIndex(0);
    setSessionState({});
    setScore(0);
    setShowResults(false);
  };

  const exitCourse = () => {
    goHome();
    setSelectedCourseId(null);
  };

  const getAccuracy = () => questions.length > 0 ? Math.round((score / questions.length) * 100) : 0;

  // Authentication Gate
  if (authLoading) {
    return (
      <div className="min-h-screen bg-bg flex items-center justify-center">
        <div className="flex flex-col items-center gap-6">
          <Loader2 className="w-12 h-12 animate-spin text-accent" />
          <p className="font-serif italic text-muted">Securing your session...</p>
        </div>
      </div>
    );
  }

  if (!user) {
    if (routePath === '/admin') {
      return (
        <div className="min-h-screen bg-bg p-8 md:p-24 flex items-center justify-center">
          <div className="w-full max-w-xl">
            <div className="text-center mb-12">
              <h1 className="font-serif italic text-6xl text-ink mb-4">LOMA Exam Master</h1>
              <p className="font-sans text-[10px] uppercase tracking-[0.4em] text-muted">Admin Console &bull; Secured</p>
            </div>
            <AdminLogin 
              onBackToStudent={() => navigate('/')} 
              onLoginSuccess={() => navigate('/admin-dashboard')} 
            />
          </div>
        </div>
      );
    }

    return (
      <div className="min-h-screen bg-bg p-8 md:p-24 flex items-center justify-center">
        <div className="w-full max-w-2xl">
          <div className="text-center mb-12">
            <h1 className="font-serif italic text-6xl text-ink mb-4">LOMA Exam Master</h1>
            <p className="font-sans text-[10px] uppercase tracking-[0.4em] text-muted">Study Suite &bull; Preparations</p>
          </div>
          <div className="space-y-8">
            <PhoneAuth />
            <div className="text-center">
              <button
                onClick={() => navigate('/admin')}
                className="text-xs font-serif italic text-muted hover:text-indigo-600 hover:underline cursor-pointer"
              >
                🔐 Administrative Staff Sign-In Gateway
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // Direct URL access / Approved check gate
  if (!isSelectedCourseApproved) {
    return (
      <div className="min-h-screen bg-bg p-8 md:p-24 flex items-center justify-center">
        <div className="max-w-md w-full bg-white border border-red-100 p-12 text-center shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-1 bg-red-400" />
          <AlertCircle className="w-16 h-16 text-red-500 mx-auto mb-6" />
          <h2 className="text-3xl font-serif text-ink mb-4">Course Unavailable</h2>
          <p className="text-muted text-sm leading-relaxed mb-8 font-serif italic">This course is not available.</p>
          <button 
            onClick={() => setSelectedCourseId(null)}
            className="w-full py-4 bg-ink text-white font-bold uppercase tracking-widest text-[10px] hover:bg-transparent hover:text-ink border border-ink transition-all shadow-lg"
          >
            Return to Homepage
          </button>
        </div>
      </div>
    );
  }

  // Subscription and Enrollment Gate Lock
  if (selectedCourseId !== null && appMode !== 'profile' && !isSubscriberAdmin && !userSubStatus.hasAccess) {
    if (showSubscriptionForm) {
      return (
        <div className="min-h-screen bg-bg p-6 md:p-24 overflow-x-hidden">
          <div className="max-w-5xl mx-auto">
            <SubscriptionForm 
              course={selectedCourse}
              userId={user.uid}
              userPhone={user.phoneNumber || ''}
              onSuccess={() => {
                setShowSubscriptionForm(false);
                loadSubscriptions();
              }}
              onCancel={() => setShowSubscriptionForm(false)}
            />
          </div>
        </div>
      );
    }

    return (
      <div className="min-h-screen bg-bg p-6 md:p-24 flex items-center justify-center overflow-x-hidden">
        <div className="max-w-xl w-full bg-white border border-border p-10 md:p-14 text-center shadow-2xl relative overflow-hidden animate-fade-in animate-duration-300">
          <div className="absolute top-0 left-0 w-full h-1 bg-amber-500 animate-pulse" />
          
          <div className="mb-6 bg-rose-50 border border-rose-100/50 p-3 text-rose-700 text-xs font-serif font-semibold rounded italic flex items-center justify-center gap-2">
            ⚠️ Subscription or course assignment required.
          </div>

          <div className="mb-8 flex flex-col items-center">
            <div className="w-16 h-16 bg-amber-50 border border-amber-100 rounded-full flex items-center justify-center mx-auto shadow-sm mb-6">
              <CreditCard className="w-8 h-8 text-amber-600" />
            </div>
            
            <span className="text-[10px] font-sans font-bold uppercase tracking-[0.3em] text-muted block mb-2">Study Access Gateway</span>
            <h2 className="text-3xl font-serif text-ink mb-3">{selectedCourse.shortTitle} Curriculum</h2>
            <p className="text-xs text-muted font-serif italic">{selectedCourse.title}</p>
          </div>

          <div className="border-t border-b border-border py-6 my-8 space-y-4">
            {userSubStatus.status === 'none' && (
              <>
                <h3 className="font-serif italic text-xl text-ink">Access Blocked</h3>
                <p className="text-xs text-muted leading-relaxed font-serif italic">
                  To view this course module, you must have either an approved paid subscription or an active admin-granted course assignment.
                </p>
                <div className="flex justify-center gap-1.5 pt-2">
                  <span className="text-[9px] font-bold text-teal-600 uppercase tracking-widest bg-teal-50 px-2 py-1 rounded">🛡️ Secure Payment</span>
                  <span className="text-[9px] font-bold text-indigo-600 uppercase tracking-widest bg-indigo-50 px-2 py-1 rounded">⚡ Handled Manually</span>
                </div>
              </>
            )}

            {userSubStatus.status === 'pending' && (
              <div className="space-y-4">
                <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-amber-50 border border-amber-100 rounded text-[10px] font-bold uppercase text-amber-600 font-sans">
                  <span className="w-2 h-2 rounded-full bg-amber-500 animate-ping" /> Under Review
                </div>
                <h3 className="font-serif italic text-xl text-ink">Your payment is under review.</h3>
                <p className="text-xs text-muted leading-relaxed font-serif italic">
                  We have received your payment record. Our administration is manually auditing the receipt file to verify reference <strong>{userSubStatus.subscription?.transactionId}</strong>. Access will be unlocked immediately once approved.
                </p>
                <div className="bg-bg/60 border border-border p-3.5 rounded text-left text-xs space-y-1 max-w-sm mx-auto">
                  <p className="font-bold text-ink">Logged Details:</p>
                  <p className="text-muted font-sans font-medium">Method: <span className="capitalize">{userSubStatus.subscription?.paymentMethod.replace('_', ' ')}</span></p>
                  <p className="text-muted font-sans font-medium">Date: {userSubStatus.subscription?.paymentDate}</p>
                </div>
              </div>
            )}

            {userSubStatus.status === 'expired' && (
              <div className="space-y-2">
                <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-red-50 border border-red-100 rounded text-[9px] font-bold uppercase text-red-500 font-sans">
                  Expired Subscription
                </div>
                <h3 className="font-serif italic text-xl text-red-600">Your subscription has expired. Please renew.</h3>
                <p className="text-xs text-muted leading-relaxed font-serif italic text-center">
                  Your paid subscription expired on {userSubStatus.subscription?.expiryDate && format(new Date(userSubStatus.subscription.expiryDate), 'PPP')}. Complete payment of Rs. 300 to reactivate immediately.
                </p>
              </div>
            )}

            {userSubStatus.status === 'rejected' && (
              <div className="space-y-3">
                <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-red-50 border border-red-100 rounded text-[9px] font-bold uppercase text-red-500 font-sans">
                  Unverified Receipt
                </div>
                <h3 className="font-serif italic text-xl text-red-600">Validation Rejected</h3>
                <p className="text-xs text-muted leading-relaxed font-serif italic">
                  The uploaded payment details could not be validated by our review team. Please check your transaction details and resubmit a correct screenshot copy.
                </p>
              </div>
            )}
          </div>

          <div className="flex flex-col gap-3">
            {userSubStatus.status === 'none' && (
              <button 
                onClick={() => setShowSubscriptionForm(true)}
                className="w-full py-4 bg-ink text-white font-bold uppercase tracking-widest text-[10px] hover:bg-accent hover:text-ink border border-ink transition-all shadow-md cursor-pointer"
              >
                Subscribe & Enroll
              </button>
            )}

            {(userSubStatus.status === 'expired' || userSubStatus.status === 'rejected') && (
              <button 
                onClick={() => setShowSubscriptionForm(true)}
                className="w-full py-4 bg-zinc-950 text-white font-bold uppercase tracking-widest text-[10px] hover:bg-neutral-100 hover:text-ink border border-ink transition-all shadow-md cursor-pointer"
              >
                Submit Renewal Receipt
              </button>
            )}

            {userSubStatus.status === 'pending' && (
              <button 
                onClick={loadSubscriptions}
                className="w-full py-4 bg-neutral-200 text-ink font-bold uppercase tracking-widest text-[10px] hover:bg-neutral-300 transition-all border border-transparent cursor-pointer"
              >
                Check Approval Status
              </button>
            )}

            <button 
              onClick={exitCourse}
              className="w-full py-3 border border-border text-muted hover:text-ink hover:underline transition-all text-[9px] font-sans font-bold uppercase tracking-widest mt-1.5"
            >
              Back to Catalog
            </button>
          </div>
        </div>
      </div>
    );
  }

  // Course Selection Phase
  if (selectedCourseId === null && appMode !== 'profile') {
    const isUserAdmin = profile?.role === 'admin';

    return (
      <div className="min-h-screen bg-bg p-6 md:p-24 overflow-x-hidden">
        <div className="max-w-6xl mx-auto">
          <header className="mb-12 md:mb-16 flex flex-col md:flex-row md:items-end justify-between gap-8 md:gap-12">
            <div>
              <div className="flex items-center gap-4 mb-4">
                <Globe className="w-8 h-8 text-accent animate-pulse" />
                <span className="font-sans text-[10px] font-bold uppercase tracking-[0.5em] text-muted">Global Professional Standard</span>
              </div>
              <h1 className="font-serif italic text-4xl md:text-7xl text-ink leading-tight mb-6">
                FLMI Program <br />
                <span className="text-accent underline decoration-border decoration-1 underline-offset-8">Study Suite</span>
              </h1>

              {/* Developer Role quick-switch & view tabs */}
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 font-sans">
                <div className="flex items-center gap-2 px-4 py-2 border border-border rounded-lg bg-white/30 w-fit">
                  <span className="text-[9px] font-bold uppercase tracking-wider text-muted">Role:</span>
                  <span className={`text-[9px] font-bold uppercase tracking-wider px-2 py-0.5 rounded ${
                    isUserAdmin ? 'bg-indigo-50 text-indigo-600' : 'bg-green-50 text-accent'
                  }`}>
                    {profile?.role || 'student'}
                  </span>
                </div>

                {isUserAdmin && (
                  routePath === '/admin-dashboard' ? (
                    <button
                      onClick={() => navigate('/')}
                      className="px-6 py-2.5 bg-accent hover:bg-accent/80 text-ink font-sans text-[10px] font-bold uppercase tracking-widest transition-all gap-1.5 flex items-center justify-center cursor-pointer shadow"
                    >
                      <BookOpen className="w-3.5 h-3.5" /> Open Student Catalog
                    </button>
                  ) : (
                    <button
                      onClick={() => navigate('/admin-dashboard')}
                      className="px-6 py-2.5 bg-indigo-600 hover:bg-indigo-700 text-white font-sans text-[10px] font-bold uppercase tracking-widest transition-all gap-1.5 flex items-center justify-center cursor-pointer shadow"
                    >
                      <Shield className="w-3.5 h-3.5" /> Initialize Admin Console
                    </button>
                  )
                )}
              </div>
            </div>
            
            <button 
              onClick={() => setAppMode('profile')}
              className="group flex items-center gap-6 p-6 border border-border hover:bg-ink hover:text-white bg-white/45 transition-all shadow-xl hover:shadow-2xl"
            >
              <div className="text-right">
                <span className="block text-[8px] font-bold uppercase tracking-widest text-muted">
                  {isUserAdmin ? 'System Admin' : 'Active Student'}
                </span>
                <span className="block text-sm font-serif italic">{user.phoneNumber}</span>
              </div>
              <div className="w-12 h-12 bg-accent rounded-full flex items-center justify-center group-hover:scale-110 transition-transform shadow-md">
                <UserIcon className="w-6 h-6 text-ink" />
              </div>
            </button>
          </header>

          {routePath === '/admin-dashboard' && isUserAdmin ? (
            <div className="space-y-12 animate-fade-in">
              {/* Admin Panel Sub Tabs */}
              <div className="flex border-b border-border pb-2 justify-between items-center text-xs font-sans">
                <div className="flex gap-8">
                  <button
                    type="button"
                    onClick={() => setAdminTab('courses')}
                    className={`pb-3 font-bold uppercase tracking-widest transition-all border-b-2 flex items-center gap-2 cursor-pointer ${
                      adminTab === 'courses'
                        ? 'border-ink text-ink font-semibold'
                        : 'border-transparent text-muted hover:text-ink'
                    }`}
                  >
                    📘 Course Templates
                  </button>
                  <button
                    type="button"
                    onClick={() => setAdminTab('subscriptions')}
                    className={`pb-3 font-bold uppercase tracking-widest transition-all border-b-2 flex items-center gap-2 relative cursor-pointer ${
                      adminTab === 'subscriptions'
                        ? 'border-ink text-ink font-semibold'
                        : 'border-transparent text-muted hover:text-ink'
                    }`}
                  >
                    🪙 Subscription Verifications
                    {adminSubscriptions.filter(s => s.status === 'pending').length > 0 && (
                      <span className="shrink-0 bg-amber-500 text-white font-sans text-[8px] font-bold px-1.5 py-0.5 rounded-full animate-bounce">
                        {adminSubscriptions.filter(s => s.status === 'pending').length}
                      </span>
                    )}
                  </button>
                  <button
                    type="button"
                    onClick={() => setAdminTab('users')}
                    className={`pb-3 font-bold uppercase tracking-widest transition-all border-b-2 flex items-center gap-2 relative cursor-pointer ${
                      adminTab === 'users'
                        ? 'border-ink text-ink font-semibold'
                        : 'border-transparent text-muted hover:text-ink'
                    }`}
                  >
                    👥 User Registrations
                  </button>
                  <button
                    type="button"
                    onClick={() => setAdminTab('assignments')}
                    className={`pb-3 font-bold uppercase tracking-widest transition-all border-b-2 flex items-center gap-2 relative cursor-pointer ${
                      adminTab === 'assignments'
                        ? 'border-ink text-ink font-semibold'
                        : 'border-transparent text-muted hover:text-ink'
                    }`}
                  >
                    🎓 Course Assignments
                  </button>
                </div>
                <button
                  type="button"
                  onClick={() => navigate('/')}
                  className="pb-3 text-rose-600 hover:text-rose-800 font-bold uppercase tracking-widest transition-all flex items-center gap-1 cursor-pointer font-sans"
                >
                  🚪 Exit Admin Console
                </button>
              </div>

              {adminTab === 'subscriptions' ? (
                <AdminSubscriptions 
                  subscriptions={adminSubscriptions}
                  adminUid={user.uid}
                  onRefresh={loadSubscriptions}
                />
              ) : adminTab === 'users' ? (
                <UserManagement adminUid={user.uid} />
              ) : adminTab === 'assignments' ? (
                <CourseAssignments adminUid={user.uid} />
              ) : (
                <>
                  {/* Dashboard metrics */}
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-white border border-border p-8 relative overflow-hidden shadow-sm">
                  <div className="absolute top-0 left-0 w-1.5 h-full bg-ink" />
                  <span className="block text-[8px] font-bold uppercase tracking-widest text-muted mb-2 font-sans">Total Managed Courses</span>
                  <span className="text-4xl font-serif italic text-ink">{adminStats.total}</span>
                </div>
                <div className="bg-white border border-border p-8 relative overflow-hidden shadow-sm">
                  <div className="absolute top-0 left-0 w-1.5 h-full bg-accent" />
                  <span className="block text-[8px] font-bold uppercase tracking-widest text-muted mb-2 font-sans">🟢 Approved & Visible</span>
                  <span className="text-4xl font-serif italic text-accent">{adminStats.approved}</span>
                </div>
                <div className="bg-white border border-border p-8 relative overflow-hidden shadow-sm">
                  <div className="absolute top-0 left-0 w-1.5 h-full bg-amber-500" />
                  <span className="block text-[8px] font-bold uppercase tracking-widest text-muted mb-2 font-sans">🟡 Pending Approval</span>
                  <span className="text-4xl font-serif italic text-amber-600">{adminStats.pending}</span>
                </div>
              </div>

              {/* Grid content split: Courses Catalogue VS New Course Form */}
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
                <div className="lg:col-span-2 space-y-6">
                  <div className="border-b border-border pb-4 flex items-center justify-between">
                    <h3 className="font-serif italic text-2xl text-ink">Administrative Panel</h3>
                    <button 
                      onClick={() => loadCoursesData(true)} 
                      className="text-[9px] font-bold uppercase tracking-widest text-muted hover:text-ink font-sans underline"
                    >
                      Refresh Records
                    </button>
                  </div>
                  
                  {coursesLoading ? (
                    <div className="flex flex-col items-center justify-center py-24 gap-4 bg-white border border-border">
                      <Loader2 className="w-8 h-8 animate-spin text-accent" />
                      <p className="text-xs text-muted font-serif italic">Synchronizing dynamic approvals with Firestore...</p>
                    </div>
                  ) : (
                    <div className="space-y-4">
                      {(Object.values(firestoreCourses) as Array<{
                        id: string;
                        approved: boolean;
                        title: string;
                        shortTitle: string;
                        description: string;
                        custom?: boolean;
                      }>).map(course => {
                        return (
                          <div key={course.id} className="bg-white border border-border p-6 flex flex-col md:flex-row md:items-center justify-between gap-6 hover:border-ink transition-colors shadow-sm">
                            <div className="space-y-2">
                              <div className="flex items-center gap-3">
                                <span className="font-sans text-[9px] font-bold uppercase tracking-wider text-muted bg-bg border border-border px-2 py-0.5">
                                  {course.id.toUpperCase()}
                                </span>
                                {course.approved ? (
                                  <span className="text-[9px] font-bold uppercase tracking-wider text-accent flex items-center gap-1 bg-green-50 px-2 py-0.5 border border-green-100 rounded">
                                    <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" /> Published & Approved
                                  </span>
                                ) : (
                                  <span className="text-[9px] font-bold uppercase tracking-wider text-amber-600 flex items-center gap-1 bg-amber-50 px-2 py-0.5 border border-amber-100 rounded">
                                    <span className="w-1.5 h-1.5 rounded-full bg-amber-500" /> Pending Approval (Hidden)
                                  </span>
                                )}
                              </div>
                              <h4 className="font-serif text-xl text-ink">{course.title}</h4>
                              <p className="text-xs text-muted font-serif italic max-w-lg leading-relaxed">{course.description || 'No description provided.'}</p>
                            </div>

                            <div className="flex items-center gap-3 shrink-0">
                              <button
                                onClick={() => handleToggleApproval(course.id, course.approved)}
                                className={`px-4 py-2.5 text-[9px] font-bold uppercase tracking-widest border transition-all rounded shadow-sm ${
                                  course.approved 
                                    ? 'bg-amber-50 text-amber-700 border-amber-200 hover:bg-amber-100 cursor-pointer' 
                                    : 'bg-green-50 text-accent border-accent/20 hover:bg-accent/10 cursor-pointer'
                                }`}
                              >
                                {course.approved ? 'Reject & Hide' : 'Approve & Publish'}
                              </button>
                              {course.custom && (
                                <button
                                  onClick={() => handleDeleteCourse(course.id)}
                                  className="p-2.5 text-red-400 hover:text-red-600 border border-transparent hover:border-red-100 hover:bg-red-50 transition-all rounded cursor-pointer"
                                  title="Delete custom model"
                                >
                                  <XCircle className="w-4 h-4" />
                                </button>
                              )}
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  )}
                </div>

                {/* Course Creator Form */}
                <div className="bg-white border border-border p-8 h-fit space-y-6 shadow-sm">
                  <div className="border-b border-border pb-4">
                    <h3 className="font-serif italic text-xl text-ink">New Study Course Templates</h3>
                    <p className="text-[10px] text-muted font-serif italic mt-1 leading-relaxed">Created courses will automatically default to unapproved (hidden) and cannot be bypassed until manually verified above.</p>
                  </div>

                  <form onSubmit={handleCreateCourseSubmit} className="space-y-4">
                    <div className="space-y-1">
                      <label className="block text-[8px] font-bold uppercase tracking-widest text-muted font-sans">Unique Course ID (Slug)</label>
                      <input 
                        type="text" 
                        value={newCourseId}
                        onChange={(e) => setNewCourseId(e.target.value)}
                        placeholder="loma311"
                        className="w-full bg-bg border border-border px-4 py-3 text-xs font-sans focus:outline-ink outline-none"
                      />
                    </div>

                    <div className="space-y-1">
                      <label className="block text-[8px] font-bold uppercase tracking-widest text-muted font-sans font-sans">Course Short Title</label>
                      <input 
                        type="text" 
                        value={newCourseShort}
                        onChange={(e) => setNewCourseShort(e.target.value)}
                        placeholder="LOMA 311"
                        className="w-full bg-bg border border-border px-4 py-3 text-xs font-sans focus:outline-ink outline-none"
                      />
                    </div>

                    <div className="space-y-1">
                      <label className="block text-[8px] font-bold uppercase tracking-widest text-muted font-sans">Full Display Course Title</label>
                      <input 
                        type="text" 
                        value={newCourseTitle}
                        onChange={(e) => setNewCourseTitle(e.target.value)}
                        placeholder="LOMA 311: Business Law for Financial Services"
                        className="w-full bg-bg border border-border px-4 py-3 text-xs font-sans focus:outline-ink outline-none"
                      />
                    </div>

                    <div className="space-y-1">
                      <label className="block text-[8px] font-bold uppercase tracking-widest text-muted font-sans">Brief Catalog Description</label>
                      <textarea 
                        value={newCourseDesc}
                        onChange={(e) => setNewCourseDesc(e.target.value)}
                        placeholder="Key regulatory procedures and statutory mandates impacting life insurance development."
                        rows={3}
                        className="w-full bg-bg border border-border px-4 py-3 text-xs font-sans focus:outline-ink outline-none resize-none"
                      />
                    </div>

                    {creationError && (
                      <div className="p-3 bg-red-50 border border-red-200 text-red-600 text-[10px] font-sans flex items-center gap-2">
                        <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                        <span>{creationError}</span>
                      </div>
                    )}

                    <button
                      type="submit"
                      disabled={creatingCourse}
                      className="w-full py-3.5 bg-ink text-white hover:bg-accent hover:text-ink font-bold uppercase tracking-widest text-[10px] transition-all flex items-center justify-center gap-2 cursor-pointer shadow"
                    >
                      {creatingCourse ? (
                        <>
                          <Loader2 className="w-3.5 h-3.5 animate-spin" /> Provisioning...
                        </>
                      ) : (
                        "Create Course Module"
                      )}
                    </button>
                  </form>
                </div>
              </div>
                </>
              )}
            </div>
          ) : (
            <>
              <section className="mb-12 md:mb-16 grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 animate-fade-in">
                <div className="space-y-4 border border-border p-8 md:p-12 hover:bg-white bg-white/20 backdrop-blur-sm transition-colors group">
                  <h4 className="font-serif italic text-2xl text-ink">Program Overview</h4>
                  <p className="text-muted text-sm leading-relaxed font-serif italic">
                    The Fellow, Life Management Institute (FLMI) is a 10-course professional development program providing industry-specific business education since 1932.
                  </p>
                </div>
                <div className="md:col-span-2 bg-ink p-8 md:p-10 text-white shadow-2xl relative overflow-hidden">
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 relative z-10">
                    <div className="space-y-1">
                      <span className="text-[8px] font-bold uppercase tracking-widest text-accent">Level I</span>
                      <h5 className="font-serif italic text-lg">Fundamentals</h5>
                      <p className="text-white/40 text-[10px] leading-relaxed">Products & operations for quick confidence.</p>
                    </div>
                    <div className="space-y-1">
                      <span className="text-[8px] font-bold uppercase tracking-widest text-accent">ALMI</span>
                      <h5 className="font-serif italic text-lg">Associate</h5>
                      <p className="text-white/40 text-[10px] leading-relaxed">Core insurance functions & financial acumen.</p>
                    </div>
                    <div className="space-y-1">
                      <span className="text-[8px] font-bold uppercase tracking-widest text-accent">FLMI</span>
                      <h5 className="font-serif italic text-lg">Fellow</h5>
                      <p className="text-white/40 text-[10px] leading-relaxed">Big-picture strategic business topics.</p>
                    </div>
                  </div>
                  <div className="absolute top-0 right-0 p-4">
                    <Award className="w-12 h-12 text-white/10 animate-spin-slow" />
                  </div>
                </div>
              </section>

              {coursesLoading ? (
                <div className="flex flex-col items-center justify-center py-24 gap-4 bg-white border border-border">
                  <Loader2 className="w-8 h-8 animate-spin text-accent" />
                  <p className="text-xs text-muted font-serif italic">Populating student classroom catalog...</p>
                </div>
              ) : visibleCourses.length === 0 ? (
                <div className="text-center bg-white border border-border py-24">
                  <Award className="w-16 h-16 text-border mx-auto mb-4" />
                  <h3 className="text-xl font-serif text-ink mb-2">No Courses Available</h3>
                  <p className="text-xs font-serif italic text-muted max-w-sm mx-auto">There are currently no approved study courses open for student access. Contact administration to configure courses.</p>
                </div>
              ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-1px bg-border border border-border shadow-md">
                  {visibleCourses.map((course, idx) => (
                    <motion.div
                      key={course.id}
                      whileHover={{ y: -4 }}
                      onClick={() => setSelectedCourseId(course.id)}
                      className="bg-white p-8 md:p-12 cursor-pointer group hover:bg-ink transition-all relative overflow-hidden"
                    >
                      <div className="relative z-10">
                        <div className="flex items-center justify-between mb-8">
                          <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-muted group-hover:text-accent transition-colors">
                            {idx < 2 ? 'Level I' : idx < 5 ? 'ALMI Level' : 'FLMI Level'} • {course.shortTitle}
                          </span>
                          <Library className="w-5 h-5 text-border group-hover:text-white transition-colors" />
                        </div>
                        <h3 className="text-3xl font-serif italic text-ink mb-6 group-hover:text-white leading-snug transition-colors">
                          {course.title}
                        </h3>
                        <p className="text-muted text-sm leading-relaxed mb-10 group-hover:text-white/60 transition-colors line-clamp-2 font-serif italic">
                          {course.description}
                        </p>
                        <div className="flex items-center gap-3 text-[10px] font-bold uppercase tracking-widest text-accent opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all">
                          Initialize Module <ChevronRight className="w-3 h-3" />
                        </div>
                      </div>
                      <div className="absolute -bottom-10 -right-10 text-bg group-hover:text-white/5 transition-colors">
                        <Library className="w-48 h-48 rotate-12" />
                      </div>
                    </motion.div>
                  ))}
                </div>
              )}
            </>
          )}

          <footer className="mt-20 pt-12 border-t border-border flex justify-between items-center text-[8px] font-bold uppercase tracking-widest text-muted">
            <div className="flex gap-8">
              <span>LOMA & PFLP Comprehensive Suite</span>
              <span>© 2026 Academic Research &bull; Prepared by Safdar Hussain</span>
            </div>
            <div className="flex gap-8">
              <span className="flex items-center gap-1"><CheckCircle2 className="w-2 h-2" /> Verified Content</span>
              <span className="flex items-center gap-1"><Globe className="w-2 h-2" /> Global Sync Ready</span>
            </div>
          </footer>
        </div>
      </div>
    );
  }

  // Profile Page
  if (appMode === 'profile' && selectedChapterId === null) {
    const getCourseAccessDetail = (courseId: string) => {
      if (profile?.role === 'admin') {
        return { hasAccess: true, status: 'approved', accessType: 'Admin Privileged', expiryStr: 'Lifetime (Admin)' };
      }
      const now = new Date();
      
      // Check active assignment
      const activeAssignment = userAssignments.find(asg => asg.courseId === courseId && asg.active);
      if (activeAssignment) {
        if (activeAssignment.expiryDate && new Date(activeAssignment.expiryDate) < now) {
          return { 
            hasAccess: false, 
            status: 'expired', 
            accessType: 'Admin Granted', 
            expiryStr: `Expired on ${format(new Date(activeAssignment.expiryDate), 'MMM dd, yyyy')}` 
          };
        }
        return { 
          hasAccess: true, 
          status: 'approved', 
          accessType: 'Admin Granted', 
          expiryStr: activeAssignment.expiryDate 
            ? format(new Date(activeAssignment.expiryDate), 'MMM dd, yyyy') 
            : 'Permanent' 
        };
      }

      // Check subscriptions
      const subs = userSubscriptions.filter(s => s.courseId === courseId);
      const activeSub = subs.find(s => s.status === 'approved' && s.expiryDate && new Date(s.expiryDate) >= now);
      if (activeSub) {
        return { 
          hasAccess: true, 
          status: 'approved', 
          accessType: 'Paid Subscription', 
          expiryStr: format(new Date(activeSub.expiryDate), 'MMM dd, yyyy') 
        };
      }

      const pendingSub = subs.find(s => s.status === 'pending');
      if (pendingSub) {
        return { hasAccess: false, status: 'pending', accessType: 'Paid Subscription', expiryStr: 'N/A' };
      }

      const expiredSub = subs.find(s => s.status === 'approved' && s.expiryDate && new Date(s.expiryDate) < now);
      if (expiredSub) {
        return { 
          hasAccess: false, 
          status: 'expired', 
          accessType: 'Paid Subscription', 
          expiryStr: `Expired on ${format(new Date(expiredSub.expiryDate), 'MMM dd, yyyy')}` 
        };
      }

      const rejectedSub = subs.find(s => s.status === 'rejected');
      if (rejectedSub) {
        return { hasAccess: false, status: 'rejected', accessType: 'Paid Subscription', expiryStr: 'N/A' };
      }

      return { hasAccess: false, status: 'none', accessType: 'None', expiryStr: 'N/A' };
    };

    return (
      <div className="min-h-screen bg-bg p-8 md:p-24 overflow-x-hidden">
        <div className="max-w-5xl mx-auto">
          <header className="mb-12 flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div>
              <h1 
                onClick={goHome}
                className="font-serif italic text-5xl text-ink mb-4 cursor-pointer hover:opacity-70 transition-opacity"
              >
                LOMA Exam Master
              </h1>
              <p className="font-sans text-xs uppercase tracking-[0.3em] text-muted">Prepared by Safdar Hussain</p>
            </div>
            
            <div className="flex bg-white/50 backdrop-blur p-1 border border-border">
              <button
                onClick={() => setAppMode('learning')}
                className={`px-4 py-2 font-sans text-[10px] font-bold uppercase tracking-widest transition-all ${
                  isLearningMode ? 'bg-ink text-white shadow-xl' : 'text-muted hover:text-ink'
                }`}
              >
                Learning
              </button>
              {selectedCourseId === 'loma280' && (
                <>
                  <button
                    onClick={() => setAppMode('assessment')}
                    className={`px-4 py-2 font-sans text-[10px] font-bold uppercase tracking-widest transition-all ${
                      isAssessmentMode ? 'bg-ink text-white shadow-xl' : 'text-muted hover:text-ink'
                    }`}
                  >
                    TPG Review
                  </button>
                  <button
                    onClick={() => setAppMode('simulation')}
                    className={`px-4 py-2 font-sans text-[10px] font-bold uppercase tracking-widest transition-all ${
                      isSimulationMode ? 'bg-ink text-white shadow-xl' : 'text-muted hover:text-ink'
                    }`}
                  >
                    Sim Rounds
                  </button>
                </>
              )}
              <button
                onClick={() => setAppMode('profile')}
                className={`px-4 py-2 font-sans text-[10px] font-bold uppercase tracking-widest transition-all ${
                  appMode === 'profile' ? 'bg-ink text-white shadow-xl' : 'text-muted hover:text-ink'
                }`}
              >
                Profile
              </button>
            </div>
          </header>

          <AnimatePresence mode="wait">
            {!user ? (
              <motion.div
                key="auth"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                className="py-12"
              >
                <PhoneAuth />
              </motion.div>
            ) : (
              <motion.div
                key="profile-content"
                initial={{ opacity: 0, scale: 0.98 }}
                animate={{ opacity: 1, scale: 1 }}
                className="space-y-12"
              >
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-8 bg-ink p-12 text-white shadow-2xl relative overflow-hidden group">
                  <div className="relative z-10">
                    <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-accent/80 mb-2 block">Logged in as</span>
                    <h2 className="text-4xl font-serif italic mb-4">{user.phoneNumber}</h2>
                    <div className="flex items-center gap-6">
                      <div className="flex flex-col">
                        <span className="text-[8px] font-bold uppercase tracking-widest text-muted">Completed</span>
                        <span className="text-2xl font-serif text-accent">{assessmentHistory.length}</span>
                      </div>
                      <div className="w-[1px] h-8 bg-white/10" />
                      <div className="flex flex-col">
                        <span className="text-[8px] font-bold uppercase tracking-widest text-muted">Avg Accuracy</span>
                        <span className="text-2xl font-serif text-accent">
                          {assessmentHistory.length > 0 
                            ? Math.round(assessmentHistory.reduce((acc, h) => acc + h.score, 0) / assessmentHistory.length) 
                            : 0}%
                        </span>
                      </div>
                    </div>

                    <div className="mt-8 p-4 border border-white/10 bg-white/5 rounded max-w-sm flex items-center gap-4 backdrop-blur-sm">
                      <Shield className="w-5 h-5 text-accent shrink-0" />
                      <div>
                        <span className="block text-[8px] font-bold uppercase tracking-widest text-accent mb-0.5 font-sans">Assigned Group Privilege</span>
                        <span className="text-[10px] text-white/80 font-sans">Role: <strong className="text-white uppercase font-bold">{profile?.role || 'student'}</strong></span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="relative z-10 flex flex-col gap-4">
                    <button 
                      onClick={signOutLocalUser}
                      className="flex items-center justify-center gap-2 px-8 py-3 bg-white/10 hover:bg-white text-white hover:text-ink transition-all font-bold uppercase tracking-widest text-[10px] border border-white/20"
                    >
                      <LogOut className="w-3 h-3" /> Sign Out
                    </button>
                    <button 
                      onClick={loadHistory}
                      className="flex items-center justify-center gap-2 px-8 py-3 bg-accent text-ink font-bold uppercase tracking-widest text-[10px] hover:bg-white transition-all shadow-lg"
                    >
                      <RotateCcw className="w-3 h-3" /> Refresh Records
                    </button>
                  </div>

                  <Award className="absolute -bottom-10 -right-10 w-64 h-64 text-white/5 rotate-12 group-hover:scale-110 transition-transform duration-1000" />
                </div>

                <div className="bg-white border border-border overflow-hidden">
                  <div className="p-8 border-b border-border bg-bg/30 flex items-center justify-between">
                    <h3 className="text-xl font-serif italic text-ink flex items-center gap-3">
                      <History className="w-6 h-6 text-accent" /> Achievement Timeline
                    </h3>
                  </div>
                  
                  <div className="divide-y divide-border">
                    {loadingHistory ? (
                      <div className="flex flex-col items-center justify-center py-32 gap-6">
                        <Loader2 className="w-12 h-12 animate-spin text-accent" />
                        <p className="text-muted font-serif italic text-sm">Synchronizing with cloud archives...</p>
                      </div>
                    ) : assessmentHistory.length === 0 ? (
                      <div className="text-center py-32">
                        <Award className="w-20 h-20 text-border mx-auto mb-6" />
                        <p className="text-ink font-serif text-lg mb-2">No records found yet.</p>
                        <p className="text-muted italic text-sm max-w-sm mx-auto">Complete any chapter or simulation round to see your performance history here.</p>
                        <button 
                          onClick={() => setAppMode('learning')}
                          className="mt-8 px-10 py-4 bg-ink text-white font-bold uppercase tracking-widest text-[10px] hover:shadow-2xl transition-all"
                        >
                          Start Your First Module
                        </button>
                      </div>
                    ) : (
                      <div className="max-h-[600px] overflow-y-auto custom-scrollbar">
                        {assessmentHistory.map((record) => (
                          <div key={record.id} className="group p-8 flex flex-col md:flex-row md:items-center justify-between hover:bg-bg/40 transition-colors">
                            <div className="flex items-start gap-6">
                              <div className={`w-16 h-16 shrink-0 flex items-center justify-center border-2 ${
                                record.score >= 70 ? 'border-accent/40 bg-accent/5' : 'border-border bg-bg'
                              }`}>
                                <span className={`text-xl font-serif ${record.score >= 70 ? 'text-accent' : 'text-muted'}`}>{record.score}%</span>
                              </div>
                              <div>
                                <div className="flex items-center gap-3 mb-2">
                                  <span className="text-[10px] font-bold uppercase tracking-widest text-muted bg-white border border-border px-3 py-1">
                                    {COURSES.find(c => c.id === record.assessmentId.split('_')[0])?.shortTitle || record.assessmentId.split('_')[0].toUpperCase()} • {record.assessmentId.split('_')[1].toUpperCase()}
                                  </span>
                                  {record.score >= 70 ? (
                                    <span className="flex items-center gap-1 text-[8px] font-bold uppercase tracking-widest text-accent">
                                      <CheckCircle2 className="w-3 h-3" /> Mastered
                                    </span>
                                  ) : (
                                    <span className="flex items-center gap-1 text-[8px] font-bold uppercase tracking-widest text-muted">
                                      <BookOpen className="w-3 h-3" /> Practicing
                                    </span>
                                  )}
                                </div>
                                <h4 className="text-2xl font-serif text-ink group-hover:text-accent transition-colors">{record.assessmentTitle}</h4>
                              </div>
                            </div>
                            
                            <div className="mt-6 md:mt-0 flex flex-col items-end">
                              <div className="text-[10px] font-bold uppercase tracking-widest text-muted flex items-center gap-2 mb-2">
                                <Calendar className="w-3 h-3 text-accent" /> 
                                {record.completedAt ? format(record.completedAt.toDate(), 'MMM dd, yyyy') : 'Recently'}
                              </div>
                              <div className="text-[8px] font-bold uppercase tracking-[0.2em] text-muted/60 self-start md:self-end">
                                {record.completedAt ? format(record.completedAt.toDate(), 'HH:mm:ss') : '--:--:--'}
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                </div>

                {/* My Active Courses & Enrollments Section */}
                <div className="bg-white border border-border overflow-hidden">
                  <div className="p-8 border-b border-border bg-bg/30 flex items-center justify-between">
                    <h3 className="text-xl font-serif italic text-ink flex items-center gap-3">
                      <BookOpen className="w-6 h-6 text-indigo-600" /> My Course Authorizations
                    </h3>
                  </div>
                  
                  <div className="p-8 space-y-6">
                    <p className="text-xs text-muted font-serif italic">
                      Below is your registration timeline. Safe direct administration assignment or manual subscription receipt controls decide your active status.
                    </p>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      {COURSES.map((course) => {
                        const access = getCourseAccessDetail(course.id);
                        return (
                          <div 
                            key={course.id} 
                            className={`p-6 border transition-all flex flex-col justify-between h-48 relative overflow-hidden bg-white ${
                              access.hasAccess 
                                ? 'border-emerald-200 hover:border-emerald-400 shadow-sm' 
                                : 'border-border grayscale opacity-80'
                            }`}
                          >
                            <div className="absolute top-0 left-0 w-1 h-full bg-indigo-600" />
                            <div>
                              <div className="flex items-center justify-between mb-3">
                                <span className="font-sans text-[9px] font-bold uppercase tracking-wider text-muted bg-bg border border-border px-2 py-0.5">
                                  {course.id.toUpperCase()}
                                </span>
                                
                                <span className={`text-[9px] font-bold uppercase tracking-wider px-2 py-0.5 rounded border ${
                                  access.status === 'approved'
                                    ? 'bg-emerald-50 text-emerald-700 border-emerald-100'
                                    : access.status === 'pending'
                                    ? 'bg-amber-50 text-amber-700 border-amber-100 animate-pulse'
                                    : access.status === 'expired'
                                    ? 'bg-rose-50 text-rose-700 border-rose-100'
                                    : access.status === 'rejected'
                                    ? 'bg-rose-100 text-rose-800 border-rose-200'
                                    : 'bg-zinc-100 text-zinc-500 border-zinc-200'
                                }`}>
                                  {access.status === 'approved' ? '● Active' : access.status === 'pending' ? '● Pending' : access.status === 'expired' ? '● Expired' : access.status === 'rejected' ? '● Rejected' : '● Unsubscribed'}
                                </span>
                              </div>
                              
                              <h4 className="font-serif text-lg text-ink font-semibold truncate">{course.shortTitle}</h4>
                              <p className="text-[10px] text-muted truncate italic mb-4">{course.title}</p>
                            </div>
                            
                            <div className="border-t border-border/60 pt-3 flex items-center justify-between text-[10px] font-sans">
                              <div>
                                <span className="block text-[8px] uppercase tracking-wider text-muted font-bold">Access Type</span>
                                <span className="font-medium text-ink">{access.accessType}</span>
                              </div>
                              <div className="text-right">
                                <span className="block text-[8px] uppercase tracking-wider text-muted font-bold">Expiry Date</span>
                                <span className="font-medium text-ink">{access.expiryStr}</span>
                              </div>
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    );
  }

  // Chapter Selection Page
  if (selectedChapterId === null) {
    return (
      <div className="min-h-screen bg-bg p-6 md:p-24 overflow-x-hidden">
        <div className="max-w-5xl mx-auto">
          <header className="mb-12 flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div className="flex items-start justify-between md:block">
              <div>
                <button 
                  onClick={exitCourse}
                  className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest text-muted hover:text-accent transition-colors mb-4"
                >
                  <ArrowLeft className="w-3 h-3" /> All Courses
                </button>
                <h1 className="font-serif italic text-3xl md:text-5xl text-ink mb-2 md:mb-4">{selectedCourse.shortTitle}</h1>
                <p className="font-sans text-[10px] uppercase tracking-[0.3em] text-muted">Prepared by Safdar Hussain</p>
              </div>
            </div>
            
            <div className="flex bg-white/50 backdrop-blur p-1 border border-border overflow-x-auto no-scrollbar">
              <div className="flex min-w-max">
                <button
                  onClick={() => setAppMode('learning')}
                  className={`px-4 py-2 font-sans text-[10px] font-bold uppercase tracking-widest transition-all ${
                    appMode === 'learning' ? 'bg-ink text-white shadow-xl' : 'text-muted hover:text-ink'
                  }`}
                >
                  Learning
                </button>
                {selectedCourseId === 'loma280' && (
                  <>
                    <button
                      onClick={() => setAppMode('assessment')}
                      className={`px-4 py-2 font-sans text-[10px] font-bold uppercase tracking-widest transition-all ${
                        appMode === 'assessment' ? 'bg-ink text-white shadow-xl' : 'text-muted hover:text-ink'
                      }`}
                    >
                      TPG Review
                    </button>
                    <button
                      onClick={() => setAppMode('simulation')}
                      className={`px-4 py-2 font-sans text-[10px] font-bold uppercase tracking-widest transition-all ${
                        appMode === 'simulation' ? 'bg-ink text-white shadow-xl' : 'text-muted hover:text-ink'
                      }`}
                    >
                      Sim Rounds
                    </button>
                  </>
                )}
                <button
                  onClick={() => setAppMode('profile')}
                  className={`px-4 py-2 font-sans text-[10px] font-bold uppercase tracking-widest transition-all ${
                    appMode === 'profile' ? 'bg-ink text-white shadow-xl' : 'text-muted hover:text-ink'
                  }`}
                >
                  Profile
                </button>
              </div>
            </div>
          </header>

          <div className="mb-16 max-w-2xl">
            <h2 className="font-serif italic text-2xl text-ink mb-4">
              {appMode === 'learning' ? 'Deep Learning Phase' : appMode === 'assessment' ? 'Official Preparation Center' : 'Exam Simulation Room'}
            </h2>
            <p className="font-serif italic text-sm text-muted leading-relaxed">
              {appMode === 'learning' 
                ? `Comprehensive modules featuring scenario-based questions to ensure mastery of the ${selectedCourse.shortTitle} curriculum.`
                : appMode === 'assessment'
                ? 'Accelerated assessment containing the official practice questions and sample exam from the LOMA Test Preparation Guide (TPG).'
                : 'Full-length 60-question rounds sampled from our massive question bank. Same difficulty, unique questions every round.'}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {activeChapters.map(chapter => {
              const chProgress = allProgress[appMode]?.[chapter.id];
              return (
                <motion.button
                  key={chapter.id}
                  whileHover={{ y: -5 }}
                  onClick={() => setSelectedChapterId(chapter.id)}
                  className="group text-left bg-white border border-border p-10 relative overflow-hidden transition-all hover:border-accent"
                >
                  <div className="absolute top-0 left-0 w-1 h-full bg-border group-hover:bg-accent transition-colors" />
                  
                  {chProgress && (
                    <div className="absolute top-0 right-0 p-4 flex flex-col items-end opacity-40 group-hover:opacity-100 transition-opacity">
                      <span className="text-[10px] font-bold uppercase tracking-widest text-accent">Best Score</span>
                      <span className="text-xl font-serif text-ink">{chProgress.bestScore}%</span>
                    </div>
                  )}

                  <span className="block text-[10px] uppercase tracking-[0.2em] text-muted mb-6 font-bold font-sans">
                    {chapter.id === 100 ? 'Comprehensive Assessment' : `Chapter ${chapter.id}`}
                  </span>
                  <h2 className="font-serif text-2xl text-ink mb-4 leading-tight">{chapter.title}</h2>
                  <p className="font-serif italic text-xs text-muted leading-relaxed mb-8">{chapter.description}</p>
                  
                  <div className="mt-auto flex justify-between items-center">
                    <div className="flex items-center gap-2 text-accent font-sans text-[10px] font-bold uppercase tracking-widest group-hover:gap-4 transition-all">
                      Start Assessment <ChevronRight className="w-3 h-3" />
                    </div>
                    {chProgress && (
                      <span className="text-[8px] uppercase tracking-widest text-muted flex items-center gap-1">
                        <Calendar className="w-2 h-2" />
                        {new Date(chProgress.lastDate).toLocaleDateString()}
                      </span>
                    )}
                  </div>
                </motion.button>
              );
            })}
          </div>

          <footer className="mt-32 pt-12 border-t border-border flex justify-between items-center text-muted text-[10px] uppercase tracking-widest font-bold">
             <span>{selectedCourse.title}</span>
             <span>© 2026 &bull; Prepared by Safdar Hussain</span>
          </footer>
        </div>
      </div>
    );
  }

  // Quiz Results
  if (showResults) {
    return (
      <div className="min-h-screen bg-bg flex items-center justify-center p-6 md:p-12">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-xl w-full bg-white border border-border p-8 md:p-12 text-center relative"
        >
          <div className="absolute top-0 left-0 w-full h-1 bg-ink" />
          <Award className="w-12 h-12 md:w-16 md:h-16 mx-auto mb-6 text-accent" />
          <h1 className="font-serif italic text-3xl md:text-4xl mb-4 text-ink">
            {selectedChapterId === 100 ? 'Final Exam Results' : `Results: Ch. ${selectedChapterId}`}
          </h1>
          <p className="font-sans text-[10px] md:text-xs uppercase tracking-[0.2em] text-muted mb-8 md:mb-12">Performance Summary</p>
          
          <div className="grid grid-cols-2 gap-px bg-border mb-8 md:mb-12 border border-border">
            <div className="bg-white p-6 md:p-8">
              <span className="block text-[9px] md:text-[10px] uppercase tracking-[0.15em] text-muted mb-2 font-bold font-sans">Score</span>
              <span className="font-serif text-2xl md:text-4xl text-ink">{score} / {questions.length}</span>
            </div>
            <div className="bg-white p-6 md:p-8">
              <span className="block text-[9px] md:text-[10px] uppercase tracking-[0.15em] text-muted mb-2 font-bold font-sans">Accuracy</span>
              <span className={`font-serif text-2xl md:text-4xl ${getAccuracy() >= 70 ? 'text-ink' : 'text-accent'}`}>{getAccuracy()}%</span>
            </div>
          </div>

          <div className="flex flex-col gap-4">
            <button 
              onClick={restartQuiz}
              className="w-full py-4 border border-ink font-sans font-bold text-xs uppercase tracking-widest hover:bg-ink hover:text-white transition-colors flex items-center justify-center gap-3"
            >
              <RotateCcw className="w-4 h-4" />
              Retake Exam
            </button>
            <button 
              onClick={goHome}
              className="w-full py-4 bg-ink text-white font-sans font-bold text-xs uppercase tracking-widest hover:bg-transparent hover:text-ink border border-ink transition-all flex items-center justify-center gap-3"
            >
              <LayoutGrid className="w-4 h-4" />
              Select Different Chapter
            </button>
          </div>
        </motion.div>
      </div>
    );
  }

  // Quiz Interface
  if (!currentQuestion) return null;

  return (
    <div className="min-h-screen bg-bg flex flex-col md:grid md:grid-cols-[260px_1fr] lg:grid-cols-[260px_1fr_280px]">
      {/* Left Sidebar */}
      <aside className="border-b md:border-b-0 md:border-r border-border p-10 flex flex-col justify-between bg-bg">
        <div>
          <button onClick={goHome} className="font-serif italic text-2xl tracking-tighter mb-16 text-ink block hover:text-accent transition-all">
            {selectedCourse.shortTitle} <span className="text-accent underline decoration-1 underline-offset-4">Prep</span>
            <span className="block text-[8px] font-bold uppercase tracking-[0.4em] text-muted mt-2">Prepared by Safdar Hussain</span>
          </button>

          <div className="mb-12">
            <span className="block text-[10px] uppercase tracking-[0.15em] text-muted mb-2 font-bold font-sans">Module Progress</span>
            <div className="font-serif text-xl text-ink leading-tight">{currentChapter.title}</div>
          </div>

          <div className="max-h-[50vh] overflow-y-auto pr-4 custom-scrollbar">
            <ul className="hidden md:block space-y-0 text-muted">
              {activeChapters.map(c => {
                const chProgress = allProgress[appMode]?.[c.id];
                return (
                  <li key={c.id} className={`py-4 border-b border-border flex justify-between items-center ${c.id === selectedChapterId ? 'text-ink font-semibold' : 'opacity-40'}`}>
                    <div className="flex flex-col">
                      <button 
                        onClick={() => { 
                          setSelectedChapterId(c.id); 
                          restartQuiz(); 
                        }} 
                        className="text-[13px] font-sans hover:text-accent text-left"
                      >
                        {appMode === 'simulation' 
                          ? `Sim Round ${c.id}`
                          : c.id === 100 
                          ? (appMode === 'learning' ? 'Prep Exam' : 'Sample Exam') 
                          : `Ch. ${c.id} ${appMode === 'learning' ? 'Study' : 'TPG'}`
                        }
                      </button>
                      {chProgress && (
                        <span className="text-[9px] font-bold tracking-widest text-accent uppercase">Best: {chProgress.bestScore}%</span>
                      )}
                    </div>
                    {c.id === selectedChapterId && <span className="text-[11px] font-sans opacity-60 ml-2">{Math.round(progress)}%</span>}
                  </li>
                );
              })}
            </ul>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-border hidden md:block">
          <span className="block text-[10px] uppercase tracking-[0.15em] text-muted mb-2 font-bold font-sans">Status</span>
          <div className="text-[13px] font-sans text-ink">Question {currentQuestionIndex + 1} of {questions.length}</div>
        </div>
      </aside>

      {/* Main Content */}
      <main className="relative p-6 md:p-24 flex-1 flex flex-col bg-bg overflow-y-auto border-r border-border">
        <div className="max-w-3xl w-full mx-auto relative h-full flex flex-col">
          {/* Decorative Number */}
          <div className="absolute -top-12 -left-12 md:-top-20 md:-left-20 font-serif text-[100px] md:text-[200px] leading-none text-ink opacity-[0.05] select-none pointer-events-none">
            {currentQuestionIndex + 1}
          </div>

          <div className="relative z-10 flex-1">
            {/* Mobile-Only Question Navigator */}
            <div className="lg:hidden mb-8">
              <div className="flex justify-between items-center mb-3">
                <span className="text-[10px] font-bold text-muted uppercase tracking-wider">Navigate Questions</span>
                <span className="text-[10px] font-bold text-accent uppercase tracking-wider">Q {currentQuestionIndex + 1} / {questions.length}</span>
              </div>
              <div className="flex flex-nowrap gap-2 overflow-x-auto pb-4 no-scrollbar -mx-4 px-4 mask-edge-fade">
                {questions.map((_, idx) => {
                  const qState = sessionState[idx];
                  const isCurrent = idx === currentQuestionIndex;
                  const isAnswered = qState?.isLocked;
                  
                  return (
                    <button
                      key={idx}
                      onClick={() => setCurrentQuestionIndex(idx)}
                      className={`min-w-[44px] h-11 text-[11px] font-bold border transition-all flex items-center justify-center shrink-0 ${
                        isCurrent 
                          ? 'bg-ink text-white border-ink ring-2 ring-accent/20' 
                          : isAnswered 
                          ? 'bg-accent/10 border-accent/30 text-accent' 
                          : 'bg-white border-border text-muted hover:border-ink shadow-sm'
                      }`}
                    >
                      {idx + 1}
                    </button>
                  );
                })}
              </div>
            </div>

            <div className="font-serif italic text-accent mb-2 md:mb-4 text-base md:text-lg">
              Section {currentQuestion.lo} &bull; Principles
            </div>

            <h1 className="font-serif text-xl md:text-3xl lg:text-4xl text-ink leading-tight mb-8 md:mb-16 max-w-2xl">
              {currentQuestion.question}
            </h1>

            <div className="grid grid-cols-1 gap-3 md:gap-4 max-w-2xl mb-16 md:mb-24">
              <AnimatePresence mode="popLayout">
                {currentQuestion.options.map((option, idx) => {
                  const isSelected = currentStatus.selected === idx;
                  const isCorrect = idx === currentQuestion.answer;
                  const showFeedback = currentStatus.isLocked;

                  let borderColor = "border-border";
                  let bgOverlay = "transparent";
                  let markerStyles = "border border-border text-muted";

                  if (showFeedback) {
                    if (isCorrect) {
                      borderColor = "border-accent";
                      bgOverlay = "#fdfaf5";
                      markerStyles = "border border-accent text-accent bg-bg";
                    } else if (isSelected) {
                      borderColor = "border-ink";
                      markerStyles = "border border-ink bg-ink text-white";
                    } else {
                      borderColor = "border-border opacity-50";
                    }
                  } else if (isSelected) {
                    borderColor = "border-ink";
                    markerStyles = "border border-ink text-ink";
                  }

                  return (
                    <motion.button
                      key={`${currentQuestionIndex}-${idx}`}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: idx * 0.05 }}
                      onClick={() => handleOptionSelect(idx)}
                      disabled={currentStatus.isLocked}
                      style={{ backgroundColor: bgOverlay }}
                      className={`group w-full text-left flex items-center p-5 border ${borderColor} transition-all duration-200 relative`}
                    >
                      <div className={`w-8 h-8 rounded-full flex items-center justify-center text-[10px] font-bold mr-5 flex-shrink-0 transition-colors ${markerStyles}`}>
                        {idx + 1}
                      </div>
                      <span className={`text-[15px] leading-relaxed font-sans ${currentStatus.isLocked && !isCorrect && !isSelected ? 'text-muted' : 'text-ink'}`}>
                        {option}
                      </span>
                    </motion.button>
                  );
                })}
              </AnimatePresence>
            </div>
          </div>

          {/* Explanation Overlay */}
          <AnimatePresence>
            {currentStatus.isLocked && (
              <motion.div
                initial={{ opacity: 0, x: 20, y: 20 }}
                animate={{ opacity: 1, x: 0, y: 0 }}
                className="md:absolute bottom-32 right-0 w-full md:w-80 bg-white border border-accent p-8 p-shadow z-20"
                style={{ boxShadow: '20px 20px 0px rgba(178, 139, 92, 0.1)' }}
              >
                <div className="text-[10px] uppercase tracking-[0.2em] font-bold text-accent mb-3 font-sans">
                  {currentStatus.selected === currentQuestion.answer ? 'Confirmation' : 'Concept Revision'}
                </div>
                <p className="text-[13px] leading-[1.6] text-ink/80 font-serif">
                  {currentQuestion.explanation}
                </p>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Action Bar */}
          <div className="mt-auto pt-10 border-t border-border flex justify-between items-center pb-8">
            <div className="flex gap-x-6 items-center">
              <button 
                onClick={goHome} 
                className="text-muted font-sans text-[10px] uppercase tracking-widest font-bold hover:text-ink transition-colors"
              >
                Quit Exam
              </button>
              
              <button
                onClick={handlePrevious}
                disabled={currentQuestionIndex === 0}
                className={`font-sans text-[10px] uppercase tracking-widest font-bold transition-colors flex items-center gap-2 ${
                  currentQuestionIndex === 0 ? 'text-border cursor-not-allowed' : 'text-muted hover:text-ink'
                }`}
              >
                <RotateCcw className="w-3 h-3" />
                Previous
              </button>
            </div>
            
            <div className="flex gap-x-4">
              {!currentStatus.isLocked ? (
                <button
                  onClick={handleConfirm}
                  disabled={currentStatus.selected === null}
                  className={`px-10 py-3 uppercase tracking-widest text-[11px] font-bold transition-all border ${
                    currentStatus.selected === null 
                      ? 'border-border text-muted cursor-not-allowed'
                      : 'border-ink bg-ink text-white hover:bg-transparent hover:text-ink shadow-sm'
                  }`}
                >
                  Confirm Answer
                </button>
              ) : (
                <button
                  onClick={handleNext}
                  disabled={isSubmittingAssessment}
                  className={`px-10 py-3 uppercase tracking-widest text-[11px] font-bold transition-all flex items-center gap-3 ${isSubmittingAssessment ? 'bg-border text-muted cursor-not-allowed' : 'bg-ink text-white border border-ink hover:bg-transparent hover:text-ink shadow-sm'}`}
                >
                  {isSubmittingAssessment ? (
                    <>
                      <Loader2 className="w-4 h-4 animate-spin" />
                      Processing...
                    </>
                  ) : (
                    <>
                      {currentQuestionIndex === questions.length - 1 ? 'Finish Results' : 'Next Question'}
                      <ChevronRight className="w-4 h-4" />
                    </>
                  )}
                </button>
              )}
            </div>
          </div>
        </div>
      </main>

      {/* Right Sidebar: Navigation Grid */}
      <aside className="hidden lg:flex p-10 flex-col bg-bg sticky top-0 h-screen overflow-y-auto">
          <div className="mb-10">
            <span className="block text-[10px] uppercase tracking-[0.15em] text-muted mb-4 font-bold font-sans">Session Progress</span>
            <div className="h-[2px] w-full bg-border relative overflow-hidden mb-3">
              <motion.div 
                className="h-full bg-accent absolute left-0 top-0"
                initial={{ width: 0 }}
                animate={{ width: `${progress}%` }}
              />
            </div>
            <div className="flex justify-between items-center">
              <span className="text-[9px] font-bold text-muted uppercase tracking-wider">{Math.round(progress)}% Complete</span>
              <span className="text-[9px] font-bold text-accent uppercase tracking-wider">Score: {score}</span>
            </div>
          </div>

          <span className="block text-[10px] uppercase tracking-[0.15em] text-muted mb-4 font-bold font-sans">Question Navigator</span>
          <div className="grid grid-cols-4 gap-1.5 pr-1">
            {questions.map((_, idx) => {
              const qState = sessionState[idx];
              const isCurrent = idx === currentQuestionIndex;
              const isAnswered = qState?.isLocked;
              
              return (
                <button
                  key={idx}
                  onClick={() => setCurrentQuestionIndex(idx)}
                  className={`h-10 text-[10px] font-bold border transition-all ${
                    isCurrent 
                      ? 'bg-ink text-white border-ink ring-2 ring-accent/20' 
                      : isAnswered 
                      ? 'bg-accent/10 border-accent/30 text-accent' 
                      : 'bg-white border-border text-muted hover:border-ink hover:bg-bg/50 shadow-sm'
                  }`}
                >
                  {idx + 1}
                </button>
              );
            })}
          </div>

          <div className="mt-auto pt-10 space-y-4">
            <div className="p-5 border border-border bg-white rounded-none">
                <span className="block text-[8px] font-bold uppercase tracking-widest text-muted mb-2">Requirement</span>
                <p className="text-[11px] font-serif italic text-ink/70 leading-relaxed">
                  Minimum 70% required for module mastery.
                </p>
            </div>
            <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-accent animate-pulse" />
                <span className="text-[8px] font-bold uppercase tracking-[0.2em] text-muted">Session Active</span>
            </div>
          </div>
      </aside>
    </div>
  );
}
