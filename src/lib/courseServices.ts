import { auth } from './firebase';

export interface FirestoreCourse {
  id: string;
  title: string;
  shortTitle: string;
  description: string;
  approved: boolean;
  createdAt: any;
  createdBy: string;
  assignedUsers?: string[];
  assignedGroups?: string[];
}

const COURSES_KEY = 'loma_courses';

const readCourses = (): FirestoreCourse[] => {
  try {
    const saved = localStorage.getItem(COURSES_KEY);
    if (!saved) return [];
    return JSON.parse(saved);
  } catch {
    return [];
  }
};

const writeCourses = (courses: FirestoreCourse[]) => {
  localStorage.setItem(COURSES_KEY, JSON.stringify(courses));
};

export const getFirestoreCourses = async (isAdmin: boolean): Promise<FirestoreCourse[]> => {
  const courses = readCourses();
  return isAdmin ? courses : courses.filter((course) => course.approved);
};

export const initializeCoursesInFirestore = async (staticCourses: any[]): Promise<void> => {
  const courses = readCourses();
  const approvedCoursesList = ['loma280', 'loma290', 'loma301'];

  for (const course of staticCourses) {
    if (!courses.some((existing) => existing.id === course.id)) {
      courses.push({
        id: course.id,
        title: course.title,
        shortTitle: course.shortTitle || course.title,
        description: course.description,
        approved: approvedCoursesList.includes(course.id),
        createdAt: new Date().toISOString(),
        createdBy: 'system',
        assignedUsers: [],
        assignedGroups: [],
      });
    }
  }

  writeCourses(courses);
};

export const toggleCourseApproval = async (courseId: string, approvedState: boolean): Promise<void> => {
  const courses = readCourses();
  const index = courses.findIndex((course) => course.id === courseId);

  if (index >= 0) {
    courses[index] = { ...courses[index], approved: approvedState };
    writeCourses(courses);
    return;
  }

  throw new Error(`Course ${courseId} not found`);
};

export const createNewCourseInFirestore = async (course: {
  id: string;
  title: string;
  shortTitle: string;
  description: string;
}): Promise<FirestoreCourse> => {
  const uid = auth.currentUser?.uid || 'anonymous';
  const courses = readCourses();

  const payload: FirestoreCourse = {
    id: course.id,
    title: course.title,
    shortTitle: course.shortTitle,
    description: course.description,
    approved: false,
    createdAt: new Date().toISOString(),
    createdBy: uid,
    assignedUsers: [],
    assignedGroups: [],
  };

  const existingIndex = courses.findIndex((entry) => entry.id === course.id);
  if (existingIndex >= 0) {
    courses[existingIndex] = payload;
  } else {
    courses.push(payload);
  }

  writeCourses(courses);
  return payload;
};

export const deleteCourseFromFirestore = async (courseId: string): Promise<void> => {
  const courses = readCourses().filter((course) => course.id !== courseId);
  writeCourses(courses);
};
