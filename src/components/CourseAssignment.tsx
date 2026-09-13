import React, { useState, useEffect, useMemo } from 'react';
import { 
  assignCourseToUser, 
  getAllAssignments, 
  revokeAssignment, 
  extendAssignment 
} from '../lib/AssignmentServices';
import { getFirestoreCourses, FirestoreCourse } from '../lib/courseServices';
import { CourseAssignment } from '../types';
import { 
  Plus, 
  Search, 
  Filter, 
  Calendar, 
  Clock, 
  Infinity as InfinityIcon, 
  ShieldAlert, 
  UserPlus, 
  UserCheck, 
  X, 
  Check, 
  Sparkles,
  Loader2,
  Trash2,
  Edit2
} from 'lucide-react';

interface UserProfile {
  id: string;
  email?: string;
  phoneNumber?: string;
  role?: 'student' | 'admin';
  createdAt?: any;
}

export const CourseAssignments: React.FC<{ adminUid: string }> = ({ adminUid }) => {
  const [assignments, setAssignments] = useState<CourseAssignment[]>([]);
  const [courses, setCourses] = useState<FirestoreCourse[]>([]);
  const [users, setUsers] = useState<UserProfile[]>([]);
  
  const [loading, setLoading] = useState(true);
  const [submitting, setSubmitting] = useState(false);
  
  // Search & Filter state
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCourseFilter, setSelectedCourseFilter] = useState('all');
  
  // Assign Course Form state
  const [showAssignModal, setShowAssignModal] = useState(false);
  const [selectedUser, setSelectedUser] = useState<UserProfile | null>(null);
  const [selectedCourse, setSelectedCourse] = useState<FirestoreCourse | null>(null);
  const [userSearchText, setUserSearchText] = useState('');
  const [expiryType, setExpiryType] = useState<'permanent' | 'expiry'>('permanent');
  const [expiryDateText, setExpiryDateText] = useState('');
  const [notes, setNotes] = useState('');
  
  // Extend/Edit Expiry modal state
  const [editingAssignment, setEditingAssignment] = useState<CourseAssignment | null>(null);
  const [extendExpiryType, setExtendExpiryType] = useState<'permanent' | 'expiry'>('permanent');
  const [extendDateText, setExtendDateText] = useState('');

  // Fetch all assignments, courses, and users
  const loadData = async () => {
    setLoading(true);
    try {
      // 1. Get assignments
      const fetchedAssignments = await getAllAssignments();
      setAssignments(fetchedAssignments);

      // 2. Get courses templates
      const fetchedCourses = await getFirestoreCourses(true);
      setCourses(fetchedCourses);

      // 3. Get registered users list for direct selection/search
      const saved = localStorage.getItem('loma_users');
      const rawUsers = saved ? JSON.parse(saved) : [];
      const fetchedUsers: UserProfile[] = rawUsers.map((user: any) => ({
        id: user.uid,
        email: user.email,
        phoneNumber: user.phoneNumber,
        role: user.role,
        createdAt: user.createdAt,
      }));
      setUsers(fetchedUsers);
    } catch (error) {
      console.error('Error loading assignments dashboard view data:', error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadData();
  }, []);

  // Filtered users for selection in form
  const filteredUsersForForm = useMemo(() => {
    if (!userSearchText.trim()) return [];
    const lower = userSearchText.toLowerCase();
    return users.filter(u => 
      (u.email && u.email.toLowerCase().includes(lower)) || 
      (u.phoneNumber && u.phoneNumber.includes(lower)) ||
      u.id.toLowerCase().includes(lower)
    ).slice(0, 5); // Limit limit to top 5 results
  }, [users, userSearchText]);

  // Filtered list of assignments displayed
  const filteredAssignments = useMemo(() => {
    return assignments.filter(asg => {
      // Search matches email, name, notes, or user IDs
      const studentEmail = asg.studentEmail || '';
      const notesString = asg.notes || '';
      const matchesSearch = 
        studentEmail.toLowerCase().includes(searchQuery.toLowerCase()) ||
        asg.userId.toLowerCase().includes(searchQuery.toLowerCase()) ||
        notesString.toLowerCase().includes(searchQuery.toLowerCase());

      const matchesCourse = 
        selectedCourseFilter === 'all' || 
        asg.courseId === selectedCourseFilter;

      return matchesSearch && matchesCourse;
    });
  }, [assignments, searchQuery, selectedCourseFilter]);

  // Handle direct creation
  const handleAssignSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!selectedUser || !selectedCourse) return;

    setSubmitting(true);
    try {
      const finalExpiry = expiryType === 'expiry' && expiryDateText ? new Date(expiryDateText).toISOString() : null;
      
      await assignCourseToUser({
        userId: selectedUser.id,
        courseId: selectedCourse.id,
        courseName: selectedCourse.title,
        expiryDate: finalExpiry,
        notes: notes,
        studentEmail: selectedUser.email || selectedUser.phoneNumber || 'User',
        studentName: selectedUser.email ? selectedUser.email.split('@')[0] : 'Student'
      });

      // Reset form
      setShowAssignModal(false);
      setSelectedUser(null);
      setSelectedCourse(null);
      setUserSearchText('');
      setExpiryType('permanent');
      setExpiryDateText('');
      setNotes('');
      
      // Reload
      await loadData();
    } catch (error) {
      console.error('Failed to create assignment', error);
      alert('Failed to grant assignment details. Make sure you are an authorized admin.');
    } finally {
      setSubmitting(false);
    }
  };

  // Handle extend expiry
  const handleExtendSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!editingAssignment || !editingAssignment.id) return;

    setSubmitting(true);
    try {
      const finalExpiry = extendExpiryType === 'expiry' && extendDateText ? new Date(extendDateText).toISOString() : null;
      await extendAssignment(editingAssignment.id, finalExpiry);
      setEditingAssignment(null);
      await loadData();
    } catch (error) {
      console.error('Failed to update assignment date', error);
    } finally {
      setSubmitting(false);
    }
  };

  // Handle revoking access
  const handleRevoke = async (assignmentId: string) => {
    if (!confirm('Are you sure you want to revoke this course assignment? The client will instantly lose access.')) {
      return;
    }
    try {
      await revokeAssignment(assignmentId);
      await loadData();
    } catch (error) {
      console.error('Failed to revoke assignment', error);
    }
  };

  // Function to check if assignment is expired
  const isExpired = (expiryStr: string | null) => {
    if (!expiryStr) return false;
    return new Date(expiryStr).getTime() < Date.now();
  };

  return (
    <div className="space-y-6">
      {/* Top Controls Bar */}
      <div className="flex flex-col md:flex-row gap-4 items-center justify-between bg-card p-4 border border-border">
        {/* Search */}
        <div className="relative w-full md:w-80">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted" />
          <input
            type="text"
            placeholder="Search student email, notes..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-9 pr-4 py-2 border border-border bg-background text-sm text-ink placeholder-muted focus:outline-none focus:border-accent"
          />
        </div>

        {/* Filter and Button */}
        <div className="flex flex-col sm:flex-row w-full md:w-auto gap-3 items-stretch sm:items-center">
          <div className="flex items-center gap-2 border border-border bg-background px-3 py-2 text-sm">
            <Filter className="w-4 h-4 text-muted" />
            <select
              value={selectedCourseFilter}
              onChange={(e) => setSelectedCourseFilter(e.target.value)}
              className="bg-transparent text-ink focus:outline-none text-xs uppercase tracking-wider font-bold"
            >
              <option value="all">ALL COURSES</option>
              {courses.map(course => (
                <option key={course.id} value={course.id}>{course.title.toUpperCase()}</option>
              ))}
            </select>
          </div>

          <button
            onClick={() => setShowAssignModal(true)}
            className="flex items-center justify-center gap-2 px-4 py-2 bg-accent hover:bg-accent/80 text-ink text-[10px] uppercase font-bold tracking-widest cursor-pointer shadow-sm transition-all"
          >
            <Plus className="w-4 h-4" /> Assign Course
          </button>
        </div>
      </div>

      {loading ? (
        <div className="flex flex-col items-center justify-center py-20 bg-card border border-border text-center space-y-3">
          <Loader2 className="w-8 h-8 text-accent animate-spin" />
          <p className="text-xs text-muted uppercase tracking-widest">Loading Dynamic Assignments...</p>
        </div>
      ) : filteredAssignments.length === 0 ? (
        <div className="py-16 bg-card border border-border text-center space-y-4">
          <ShieldAlert className="w-12 h-12 text-muted mx-auto" />
          <div>
            <h3 className="font-serif italic text-lg text-ink">No course assignments found</h3>
            <p className="text-xs text-muted max-w-sm mx-auto mt-1">
              There are no active or historic manual admin course grants matching the filters.
            </p>
          </div>
          <button
            onClick={() => setShowAssignModal(true)}
            className="inline-flex items-center gap-1.5 px-4 py-2 bg-ink text-paper text-[10px] font-bold uppercase tracking-wider hover:bg-ink/80 transition-all cursor-pointer"
          >
            <UserPlus className="w-3.5 h-3.5" /> Force Assignments Grant
          </button>
        </div>
      ) : (
        <div className="bg-card border border-border overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-b border-border bg-background text-[10px] font-bold uppercase tracking-widest text-[#B2A8C4]">
                  <th className="p-4 pl-6">Student</th>
                  <th className="p-4">Assigned Course</th>
                  <th className="p-4">Assignment Period</th>
                  <th className="p-4">Notes</th>
                  <th className="p-4">Status</th>
                  <th className="p-4 pr-6 text-right">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border text-xs text-ink">
                {filteredAssignments.map((asg) => {
                  const expired = isExpired(asg.expiryDate);
                  const isCurrentActive = asg.active && !expired;
                  return (
                    <tr key={asg.id} className="hover:bg-background/50 transition-colors">
                      {/* Student Info */}
                      <td className="p-4 pl-6">
                        <div className="font-semibold">{asg.studentName || 'Student'}</div>
                        <div className="text-[10px] text-muted font-mono">{asg.studentEmail || asg.userId}</div>
                      </td>

                      {/* Course */}
                      <td className="p-4 font-serif italic text-sm">
                        {asg.courseName || asg.courseId}
                      </td>

                      {/* Period */}
                      <td className="p-4">
                        <div className="flex items-center gap-1.5 font-mono text-[11px]">
                          <Clock className="w-3.5 h-3.5 text-muted shrink-0" />
                          <span>
                            {new Date(asg.assignedAt).toLocaleDateString()}
                          </span>
                          <span className="text-muted">➔</span>
                          {asg.expiryDate ? (
                            <span className={expired ? 'text-rose-500 font-bold' : ''}>
                              {new Date(asg.expiryDate).toLocaleDateString()}
                            </span>
                          ) : (
                            <span className="flex items-center gap-0.5 text-emerald-600 font-semibold bg-emerald-500/10 px-1.5 py-0.5 rounded text-[10px]">
                              <InfinityIcon className="w-3 h-3" /> LIFETIME
                            </span>
                          )}
                        </div>
                      </td>

                      {/* Notes */}
                      <td className="p-4 max-w-[200px] truncate text-muted italic" title={asg.notes}>
                        {asg.notes || <span className="text-border">—</span>}
                      </td>

                      {/* Status */}
                      <td className="p-4">
                        {isCurrentActive ? (
                          <span className="px-2 py-0.5 rounded bg-emerald-500/10 text-emerald-600 font-bold uppercase tracking-wider text-[9px] inline-flex items-center gap-1">
                            <Check className="w-3 h-3" /> Active
                          </span>
                        ) : !asg.active ? (
                          <span className="px-2 py-0.5 rounded bg-rose-500/10 text-rose-500 font-bold uppercase tracking-wider text-[9px] inline-flex items-center gap-1">
                            <X className="w-3 h-3" /> Revoked
                          </span>
                        ) : (
                          <span className="px-2 py-0.5 rounded bg-amber-500/10 text-amber-600 font-bold uppercase tracking-wider text-[9px] inline-flex items-center gap-1">
                            <Clock className="w-3 h-3" /> Expired
                          </span>
                        )}
                      </td>

                      {/* Actions */}
                      <td className="p-4 pr-6 text-right space-x-2">
                        <button
                          onClick={() => {
                            setEditingAssignment(asg);
                            setExtendExpiryType(asg.expiryDate ? 'expiry' : 'permanent');
                            setExtendDateText(asg.expiryDate ? asg.expiryDate.split('T')[0] : '');
                          }}
                          className="p-1.5 hover:bg-background text-[#5E2BFF] hover:text-indigo-800 transition-all rounded inline-flex items-center justify-center cursor-pointer"
                          title="Extend or Update Access Duration"
                        >
                          <Edit2 className="w-4 h-4" />
                        </button>
                        {isCurrentActive && (
                          <button
                            onClick={() => handleRevoke(asg.id!)}
                            className="p-1.5 hover:bg-rose-50 text-rose-600 hover:text-rose-800 transition-all rounded inline-flex items-center justify-center cursor-pointer"
                            title="Revoke Granted Access Immediately"
                          >
                            <Trash2 className="w-4 h-4" />
                          </button>
                        )}
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {/* CREATE DIRECT COURSE ASSIGNMENT MODAL */}
      {showAssignModal && (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-xs flex items-center justify-center z-50 p-4">
          <div className="bg-card bg-white w-full max-w-lg border border-border shadow-2xl animate-fade-in flex flex-col max-h-[90vh]">
            {/* Header */}
            <div className="p-6 bg-background border-b border-border flex items-center justify-between shrink-0">
              <div>
                <h3 className="font-serif italic text-xl text-ink font-bold flex items-center gap-2">
                  <UserCheck className="w-5 h-5 text-accent" /> Assign Template Course
                </h3>
                <p className="text-xs text-muted">Grant immediate promotional/administrative access on student portfolio.</p>
              </div>
              <button 
                onClick={() => {
                  setShowAssignModal(false);
                  setSelectedUser(null);
                  setSelectedCourse(null);
                  setUserSearchText('');
                }}
                className="p-1 text-muted hover:text-ink transition-colors rounded hover:bg-background cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Form wrapping everything */}
            <form onSubmit={handleAssignSubmit} className="flex-1 flex flex-col min-h-0 overflow-hidden bg-card">
              {/* Scrollable body content */}
              <div className="flex-1 overflow-y-auto p-6 space-y-6 custom-scrollbar min-h-0">
                {/* User Selection */}
                <div className="space-y-2">
                  <label className="text-xs uppercase tracking-wider font-bold text-[#5E2BFF] block">
                    1. Target Student Selection
                  </label>
                  {selectedUser ? (
                    <div className="flex items-center justify-between p-3 border border-emerald-500 bg-emerald-50 rounded" style={{ backgroundColor: '#F0FDF4' }}>
                      <div>
                        <div className="text-xs font-bold text-emerald-800 font-mono">SELECTED STUDENT:</div>
                        <div className="font-serif italic text-ink font-bold text-sm">{selectedUser.email || selectedUser.phoneNumber}</div>
                        <div className="text-[10px] text-emerald-700 font-mono">ID: {selectedUser.id}</div>
                      </div>
                      <button
                        type="button"
                        onClick={() => setSelectedUser(null)}
                        className="px-2.5 py-1 text-xs font-semibold text-rose-700 hover:text-rose-900 bg-rose-50 border border-rose-100 hover:bg-rose-100 rounded transition-all cursor-pointer"
                      >
                        Change
                      </button>
                    </div>
                  ) : (
                    <div className="relative">
                      <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted" />
                      <input
                        type="text"
                        placeholder="Type student's email, phone, or account ID..."
                        value={userSearchText}
                        onChange={(e) => setUserSearchText(e.target.value)}
                        className="w-full pl-9 pr-4 py-2 bg-background border border-border text-sm text-ink focus:outline-none focus:border-accent"
                      />
                      {filteredUsersForForm.length > 0 && (
                        <div className="absolute left-0 right-0 mt-1 bg-card border border-border shadow-lg max-h-48 overflow-y-auto z-10">
                          {filteredUsersForForm.map(u => (
                            <button
                              key={u.id}
                              type="button"
                              onClick={() => setSelectedUser(u)}
                              className="w-full px-4 py-2 hover:bg-background text-left text-xs font-mono transition-colors flex justify-between items-center border-b border-border/40 last:border-0"
                            >
                              <span className="text-ink font-semibold">{u.email || u.phoneNumber || u.id}</span>
                              <span className="text-[9px] uppercase font-bold text-white bg-ink px-2.5 py-1 rounded transition-colors duration-150 hover:bg-accent hover:text-ink cursor-pointer">
                                Select
                              </span>
                            </button>
                          ))}
                        </div>
                      )}
                      {userSearchText.trim() && filteredUsersForForm.length === 0 && (
                        <div className="absolute left-0 right-0 mt-1 bg-background border border-border p-3 text-center text-xs text-muted italic">
                          No students found matching "{userSearchText}"
                        </div>
                      )}
                    </div>
                  )}
                </div>

                {/* Course Selection */}
                <div className="space-y-2">
                  <label className="text-xs uppercase tracking-wider font-bold text-[#5E2BFF] block">
                    2. Select Course Template
                  </label>
                  <div className="grid grid-cols-1 gap-2 max-h-40 overflow-y-auto border border-border p-2 bg-background">
                    {courses.map(course => {
                      const isSelected = selectedCourse?.id === course.id;
                      return (
                        <button
                          key={course.id}
                          type="button"
                          onClick={() => setSelectedCourse(course)}
                          className={`p-3 text-left border rounded transition-all text-sm flex justify-between items-center ${
                            isSelected 
                              ? 'border-accent bg-accent/5 font-bold' 
                              : 'border-border hover:border-accent bg-card'
                          }`}
                        >
                          <div>
                            <span className="font-serif italic text-ink">{course.title}</span>
                            <span className="ml-2 font-mono text-[10px] text-muted">({course.id.toUpperCase()})</span>
                          </div>
                          {isSelected && <Check className="w-4 h-4 text-accent shrink-0" />}
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* Expiry Selection */}
                <div className="space-y-3">
                  <label className="text-xs uppercase tracking-wider font-bold text-[#5E2BFF] block">
                    3. Access Duration Policy
                  </label>
                  <div className="flex gap-4">
                    <label className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-ink cursor-pointer">
                      <input
                        type="radio"
                        name="expiryType"
                        checked={expiryType === 'permanent'}
                        onChange={() => setExpiryType('permanent')}
                        className="accent-accent"
                      />
                      ♾️ Lifetime Access
                    </label>
                    <label className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-ink cursor-pointer">
                      <input
                        type="radio"
                        name="expiryType"
                        checked={expiryType === 'expiry'}
                        onChange={() => setExpiryType('expiry')}
                        className="accent-accent"
                      />
                      📅 With Expiry Date
                    </label>
                  </div>

                  {expiryType === 'expiry' && (
                    <div className="animate-fade-in relative">
                      <Calendar className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted" />
                      <input
                        type="date"
                        value={expiryDateText}
                        onChange={(e) => setExpiryDateText(e.target.value)}
                        required={expiryType === 'expiry'}
                        className="w-full pl-9 pr-4 py-2 bg-background border border-border text-sm text-ink focus:outline-none focus:border-accent"
                      />
                    </div>
                  )}
                </div>

                {/* Admin Note */}
                <div className="space-y-2">
                  <label className="text-xs uppercase tracking-wider font-bold text-[#5E2BFF] block">
                    4. Reason / Admin Notes
                  </label>
                  <textarea
                    placeholder="Granted for student test preparation, promo gift, offline payment, etc..."
                    value={notes}
                    onChange={(e) => setNotes(e.target.value)}
                    className="w-full h-20 p-3 bg-background border border-border text-xs text-ink placeholder-muted resize-none focus:outline-none focus:border-accent"
                  />
                </div>
              </div>

              {/* Sticky actions footer - never goes off screen */}
              <div className="flex gap-3 justify-end p-4 bg-background border-t border-border shrink-0">
                <button
                  type="button"
                  onClick={() => {
                    setShowAssignModal(false);
                    setSelectedUser(null);
                    setSelectedCourse(null);
                    setUserSearchText('');
                  }}
                  className="px-4 py-2 border border-border text-ink hover:bg-background uppercase tracking-wider text-[10px] font-bold cursor-pointer transition-colors"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  disabled={submitting || !selectedUser || !selectedCourse}
                  className="px-6 py-2 bg-ink text-white hover:bg-accent hover:text-ink font-bold uppercase tracking-widest text-[10px] transition-all disabled:bg-zinc-200 disabled:text-zinc-400 disabled:border-transparent disabled:cursor-not-allowed cursor-pointer"
                >
                  {submitting ? 'Processing Grant...' : 'Authorize Grant Access'}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* EXTEND ACCESS DURATION / EDIT EXPIRY MODAL */}
      {editingAssignment && (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-xs flex items-center justify-center z-50 p-4">
          <div className="bg-card bg-white w-full max-w-md border border-border shadow-2xl animate-fade-in flex flex-col max-h-[85vh]">
            <div className="p-6 bg-background border-b border-border flex items-center justify-between shrink-0">
              <div>
                <h3 className="font-serif italic text-lg text-ink font-bold">
                  Extend Access Duration
                </h3>
                <p className="text-xs text-muted">Update administrative access duration for student.</p>
              </div>
              <button 
                onClick={() => setEditingAssignment(null)}
                className="p-1 text-muted hover:text-ink transition-colors rounded hover:bg-background cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <form onSubmit={handleExtendSubmit} className="flex-1 flex flex-col min-h-0 overflow-hidden bg-card">
              <div className="flex-1 overflow-y-auto p-6 space-y-6 custom-scrollbar min-h-0">
                <div className="bg-background p-3 border border-border rounded text-xs space-y-1">
                  <div className="font-bold uppercase text-[9px] text-muted">Student Name / Email</div>
                  <div className="font-semibold text-ink">{editingAssignment.studentName || 'Student'} ({editingAssignment.studentEmail || editingAssignment.userId})</div>
                  <div className="font-bold uppercase text-[9px] text-muted mt-2">Course Name</div>
                  <div className="font-serif italic text-sm text-accent">{editingAssignment.courseName || editingAssignment.courseId}</div>
                </div>

                <div className="space-y-3">
                  <label className="text-xs uppercase tracking-wider font-bold text-[#5E2BFF] block">
                    Assign New Lifetime Policy
                  </label>
                  <div className="flex gap-4">
                    <label className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-ink cursor-pointer">
                      <input
                        type="radio"
                        name="extendExpiryType"
                        checked={extendExpiryType === 'permanent'}
                        onChange={() => setExtendExpiryType('permanent')}
                        className="accent-accent"
                      />
                      ♾️ Lifetime Access
                    </label>
                    <label className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-ink cursor-pointer">
                      <input
                        type="radio"
                        name="extendExpiryType"
                        checked={extendExpiryType === 'expiry'}
                        onChange={() => setExtendExpiryType('expiry')}
                        className="accent-accent"
                      />
                      📅 Select New Expiry
                    </label>
                  </div>

                  {extendExpiryType === 'expiry' && (
                    <div className="animate-fade-in relative">
                      <Calendar className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted" />
                      <input
                        type="date"
                        value={extendDateText}
                        onChange={(e) => setExtendDateText(e.target.value)}
                        required={extendExpiryType === 'expiry'}
                        className="w-full pl-9 pr-4 py-2 bg-background border border-border text-sm text-ink focus:outline-none focus:border-accent"
                      />
                    </div>
                  )}
                </div>
              </div>

              <div className="flex gap-3 justify-end p-4 bg-background border-t border-border shrink-0">
                <button
                  type="button"
                  onClick={() => setEditingAssignment(null)}
                  className="px-4 py-2 border border-border text-ink hover:bg-background uppercase tracking-wider text-[10px] font-bold cursor-pointer transition-colors"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  disabled={submitting}
                  className="px-6 py-2 bg-ink text-white hover:bg-accent hover:text-ink font-bold uppercase tracking-widest text-[10px] transition-all disabled:bg-zinc-200 disabled:text-zinc-400 disabled:border-transparent disabled:cursor-not-allowed cursor-pointer"
                >
                  {submitting ? 'Updating...' : 'Update Duration'}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};
