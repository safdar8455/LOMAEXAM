import { auth } from './firebase';
import { CourseAssignment } from '../types';

const COLLECTION_NAME = 'courseAssignments';
const STORAGE_KEY = 'loma_course_assignments';

const readAssignments = (): CourseAssignment[] => {
  try {
    const saved = localStorage.getItem(STORAGE_KEY);
    return saved ? JSON.parse(saved) : [];
  } catch {
    return [];
  }
};

const writeAssignments = (assignments: CourseAssignment[]) => {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(assignments));
};

export const assignCourseToUser = async (assignmentData: {
  userId: string;
  courseId: string;
  courseName: string;
  expiryDate: string | null;
  notes: string;
  studentEmail?: string;
  studentName?: string;
}): Promise<string> => {
  const adminUid = auth.currentUser?.uid || 'anonymous';
  const assignments = readAssignments();

  const newAssignment: CourseAssignment = {
    id: `${Date.now()}-${Math.random().toString(16).slice(2)}`,
    userId: assignmentData.userId,
    courseId: assignmentData.courseId,
    courseName: assignmentData.courseName,
    assignedBy: adminUid,
    assignedAt: new Date().toISOString(),
    accessType: 'admin_granted',
    expiryDate: assignmentData.expiryDate,
    notes: assignmentData.notes,
    active: true,
    studentEmail: assignmentData.studentEmail || '',
    studentName: assignmentData.studentName || 'Student',
  };

  assignments.push(newAssignment);
  writeAssignments(assignments);
  return newAssignment.id || '';
};

export const getUserAssignments = async (userId: string): Promise<CourseAssignment[]> => {
  return readAssignments()
    .filter((assignment) => assignment.userId === userId && assignment.active)
    .sort((a, b) => new Date(b.assignedAt).getTime() - new Date(a.assignedAt).getTime());
};

export const getAllAssignments = async (): Promise<CourseAssignment[]> => {
  return readAssignments().sort((a, b) => new Date(b.assignedAt).getTime() - new Date(a.assignedAt).getTime());
};

export const revokeAssignment = async (assignmentId: string): Promise<void> => {
  const assignments = readAssignments();
  const index = assignments.findIndex((assignment) => assignment.id === assignmentId);

  if (index >= 0) {
    assignments[index] = { ...assignments[index], active: false };
    writeAssignments(assignments);
  }
};

export const extendAssignment = async (assignmentId: string, newExpiryDate: string | null): Promise<void> => {
  const assignments = readAssignments();
  const index = assignments.findIndex((assignment) => assignment.id === assignmentId);

  if (index >= 0) {
    assignments[index] = {
      ...assignments[index],
      expiryDate: newExpiryDate,
      active: true,
    };
    writeAssignments(assignments);
  }
};
