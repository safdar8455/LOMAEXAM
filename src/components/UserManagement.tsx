import React, { useEffect, useState } from 'react';
import { Shield, Users, RefreshCw, Check, Loader2, AlertTriangle } from 'lucide-react';
import { motion } from 'motion/react';

interface UserRecord {
  id: string;
  phoneNumber?: string;
  email?: string;
  createdAt: any;
  role: 'admin' | 'student';
}

interface UserManagementProps {
  adminUid: string;
}

export const UserManagement: React.FC<UserManagementProps> = ({ adminUid }) => {
  const [users, setUsers] = useState<UserRecord[]>([]);
  const [loading, setLoading] = useState(false);
  const [updatingId, setUpdatingId] = useState<string | null>(null);
  const [message, setMessage] = useState<{ text: string; type: 'success' | 'error' } | null>(null);

  const fetchUsers = async () => {
    setLoading(true);
    setMessage(null);
    try {
      const saved = localStorage.getItem('loma_users');
      const rawUsers = saved ? JSON.parse(saved) : [];
      const userList = rawUsers.map((user: any) => ({
        id: user.uid,
        phoneNumber: user.phoneNumber || '',
        email: user.email || '',
        createdAt: user.createdAt ? new Date(user.createdAt).toLocaleDateString() : 'N/A',
        role: user.role || 'student'
      } as UserRecord));
      setUsers(userList);
    } catch (error) {
      console.error('Failed to load registered users:', error);
      setMessage({ text: 'Error fetching users list.', type: 'error' });
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  const handleToggleRole = async (targetUser: UserRecord) => {
    if (targetUser.id === adminUid) {
      setMessage({ text: 'Cannot toggle your own administrative access.', type: 'error' });
      return;
    }

    setUpdatingId(targetUser.id);
    setMessage(null);

    const nextRole = targetUser.role === 'admin' ? 'student' : 'admin';

    try {
      const saved = localStorage.getItem('loma_users');
      const rawUsers = saved ? JSON.parse(saved) : [];
      const updated = rawUsers.map((user: any) =>
        user.uid === targetUser.id ? { ...user, role: nextRole } : user
      );
      localStorage.setItem('loma_users', JSON.stringify(updated));

      setUsers(prev => prev.map(u => u.id === targetUser.id ? { ...u, role: nextRole } : u));
      setMessage({ 
        text: `Successfully updated user privilege to ${nextRole.toUpperCase()}`, 
        type: 'success' 
      });
    } catch (err) {
      console.error('Failed to modify user role:', err);
      setMessage({ text: 'Unauthorized. Only master admins can adjust role states.', type: 'error' });
    } finally {
      setUpdatingId(null);
    }
  };

  return (
    <div className="space-y-8 animate-fade-in font-sans">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 border-b border-border pb-6">
        <div>
          <h2 className="text-3xl font-serif italic text-ink">User Registrations</h2>
          <p className="text-xs text-muted mt-1 uppercase tracking-widest">Verify and toggle security access for all student and administrative staff</p>
        </div>
        <button
          onClick={fetchUsers}
          disabled={loading}
          className="flex items-center gap-2 px-6 py-3 border border-border hover:bg-ink hover:text-white transition-all text-[10px] uppercase font-bold tracking-widest cursor-pointer bg-white"
        >
          {loading ? <Loader2 className="w-3.5 h-3.5 animate-spin" /> : <RefreshCw className="w-3.5 h-3.5" />}
          Reload Registry
        </button>
      </div>

      {message && (
        <div className={`p-4 border text-[10px] font-bold uppercase tracking-widest font-sans flex items-center gap-2.5 ${
          message.type === 'success' 
            ? 'bg-emerald-50 border-emerald-200 text-emerald-800' 
            : 'bg-red-50 border-red-200 text-red-800'
        }`}>
          {message.type === 'success' ? <Check className="w-4 h-4 shrink-0" /> : <AlertTriangle className="w-4 h-4 shrink-0" />}
          <span>{message.text}</span>
        </div>
      )}

      {loading && users.length === 0 ? (
        <div className="py-24 flex flex-col items-center justify-center gap-4 bg-white border border-border">
          <Loader2 className="w-8 h-8 animate-spin text-accent" />
          <p className="text-xs font-serif italic text-muted">Scanning active student registries...</p>
        </div>
      ) : users.length === 0 ? (
        <div className="py-24 text-center bg-white border border-border">
          <Users className="w-16 h-16 text-border mx-auto mb-4" />
          <h3 className="text-xl font-serif text-ink mb-2">Registry is Empty</h3>
          <p className="text-xs font-serif italic text-muted max-w-sm mx-auto">No registered student or administrator records were retrieved from Firestore.</p>
        </div>
      ) : (
        <div className="border border-border shadow-sm overflow-hidden bg-white">
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-bg border-b border-border text-[8px] font-bold uppercase tracking-wider text-muted">
                  <th className="py-4 px-6">User Identifier</th>
                  <th className="py-4 px-6">Assigned Email</th>
                  <th className="py-4 px-6">Joined Date</th>
                  <th className="py-4 px-6">Access Group</th>
                  <th className="py-4 px-6 text-right">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border text-xs text-ink">
                {users.map((userRecord) => (
                  <tr key={userRecord.id} className="hover:bg-bg/25 transition-colors">
                    <td className="py-4 px-6 font-mono font-medium">
                      {userRecord.phoneNumber || <span className="text-muted font-sans italic">No phone record</span>}
                      <span className="block text-[8px] text-muted font-sans font-normal mt-0.5">UID: {userRecord.id}</span>
                    </td>
                    <td className="py-4 px-6 font-mono text-stone-500">
                      {userRecord.email || <span className="text-muted font-sans italic">Not assigned</span>}
                    </td>
                    <td className="py-4 px-6 text-muted font-mono">{userRecord.createdAt}</td>
                    <td className="py-4 px-6">
                      <span className={`inline-flex items-center gap-1.5 px-3 py-1 rounded text-[9px] font-bold uppercase tracking-wider ${
                        userRecord.role === 'admin' 
                          ? 'bg-rose-50 text-rose-700 border border-rose-100' 
                          : 'bg-green-50 text-green-700 border border-green-100'
                      }`}>
                        {userRecord.role === 'admin' ? <Shield className="w-2.5 h-2.5" /> : <Users className="w-2.5 h-2.5" />}
                        {userRecord.role}
                      </span>
                    </td>
                    <td className="py-4 px-6 text-right">
                      <button
                        onClick={() => handleToggleRole(userRecord)}
                        disabled={updatingId !== null || userRecord.id === adminUid}
                        className={`px-4 py-2 text-[9px] font-bold uppercase tracking-widest border border-border cursor-pointer transition-all ${
                          userRecord.id === adminUid
                            ? 'opacity-50 cursor-not-allowed bg-stone-50 text-stone-400'
                            : 'hover:bg-ink hover:text-white bg-white hover:border-transparent'
                        }`}
                      >
                        {updatingId === userRecord.id ? (
                          <Loader2 className="w-3 h-3 animate-spin mx-auto animate-pulse" />
                        ) : userRecord.role === 'admin' ? (
                          'Revoke Admin'
                        ) : (
                          'Make Admin'
                        )}
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}
    </div>
  );
};
