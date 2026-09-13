import React, { useState } from 'react';
import { Shield, Mail, Lock, AlertCircle, Loader2, ArrowLeft, KeySquare } from 'lucide-react';
import { motion } from 'motion/react';
import { signInLocalUser } from '../lib/AuthContext';

interface AdminLoginProps {
  onBackToStudent: () => void;
  onLoginSuccess: () => void;
}

export const AdminLogin: React.FC<AdminLoginProps> = ({ onBackToStudent, onLoginSuccess }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [resetSuccess, setResetSuccess] = useState<string | null>(null);
  const [resetLoading, setResetLoading] = useState(false);

  const handlePasswordReset = async () => {
    if (!email) {
      setError('Please provide your admin email address to request a reset link.');
      return;
    }

    const trimmedEmail = email.trim().toLowerCase();
    setResetLoading(true);
    setError(null);
    setResetSuccess(null);

    try {
      if (trimmedEmail === 'safderjamali12@gmail.com') {
        setResetSuccess(`Admin access is available locally for ${email.trim()}. Use any non-empty password to continue.`);
        return;
      }

      setError('This local-only build only supports the seeded admin account.');
    } finally {
      setResetLoading(false);
    }
  };

  const handleAdminSignIn = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !password) return;

    setLoading(true);
    setError(null);
    setResetSuccess(null);

    try {
      const trimmedEmail = email.trim().toLowerCase();

      if (trimmedEmail === 'safderjamali12@gmail.com') {
        signInLocalUser({
          uid: 'admin-local',
          phoneNumber: '+923000000000',
          email: trimmedEmail,
          role: 'admin',
        });
        onLoginSuccess();
        return;
      }

      setError('You are not an admin. Only the seeded admin account can access this local console.');
    } catch (err: any) {
      setError(err.message || 'Invalid email or password. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="w-full max-w-md mx-auto p-8 md:p-12 bg-white border border-border rounded-none shadow-2xl relative overflow-hidden">
      <div className="absolute top-0 left-0 w-[6px] h-full bg-indigo-600" />
      
      <div className="text-center mb-10">
        <div className="w-16 h-16 bg-indigo-50 border border-indigo-100 rounded-full flex items-center justify-center mx-auto mb-6">
          <Shield className="w-8 h-8 text-indigo-600" />
        </div>
        <h2 className="text-3xl font-serif italic text-ink">Administrative Gateway</h2>
        <p className="text-muted mt-2 text-xs uppercase tracking-widest font-sans">Authorized personnel only</p>
      </div>

      <form onSubmit={handleAdminSignIn} className="space-y-6">
        <div className="space-y-2">
          <label className="block text-[10px] uppercase font-bold tracking-widest text-muted font-sans">
            Admin Email Address
          </label>
          <div className="relative">
            <Mail className="absolute left-4 top-1/2 transform -translate-y-1/2 w-4 h-4 text-muted" />
            <input
              type="email"
              placeholder="admin@lomaexammaster.com"
              className="w-full pl-12 pr-4 py-4 border border-border focus:border-indigo-600 outline-none transition-all text-sm font-sans placeholder:text-stone-300"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              disabled={loading}
              autoFocus
            />
          </div>
        </div>

        <div className="space-y-2">
          <div className="flex justify-between items-center">
            <label className="block text-[10px] uppercase font-bold tracking-widest text-muted font-sans">
              Secure Access Key
            </label>
            <button
              type="button"
              onClick={handlePasswordReset}
              disabled={resetLoading}
              className="text-[9px] font-sans font-bold text-indigo-600 hover:text-indigo-800 disabled:text-indigo-300 underline uppercase tracking-wider bg-transparent border-0 cursor-pointer"
            >
              Forgot Key?
            </button>
          </div>
          <div className="relative">
            <Lock className="absolute left-4 top-1/2 transform -translate-y-1/2 w-4 h-4 text-muted" />
            <input
              type="password"
              placeholder="••••••••••••"
              className="w-full pl-12 pr-4 py-4 border border-border focus:border-indigo-600 outline-none transition-all text-sm font-sans placeholder:text-stone-300"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              disabled={loading}
            />
          </div>
        </div>

        <button
          type="submit"
          disabled={loading || !email || !password}
          className="w-full bg-indigo-600 hover:bg-indigo-700 disabled:bg-indigo-300 text-white font-sans text-xs font-bold uppercase tracking-widest py-4.5 rounded-none transition-all flex items-center justify-center gap-3 cursor-pointer shadow"
        >
          {loading ? <Loader2 className="w-5 h-5 animate-spin" /> : 'Request Console Access'}
        </button>
      </form>

      {resetSuccess && (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="mt-6 p-4 bg-emerald-50 border border-emerald-100 rounded-none flex gap-3 text-emerald-800 text-[10px] font-sans leading-relaxed"
        >
          <KeySquare className="w-4 h-4 shrink-0 mt-0.5" />
          <p>{resetSuccess}</p>
        </motion.div>
      )}

      {error && (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="mt-6 p-4 bg-red-50 border border-red-100 rounded-none flex gap-3 text-red-600 text-[10px] font-sans leading-relaxed"
        >
          <AlertCircle className="w-4 h-4 shrink-0 mt-0.5" />
          <p>{error}</p>
        </motion.div>
      )}

      <div className="mt-8 pt-6 border-t border-border text-center">
        <button
          type="button"
          onClick={onBackToStudent}
          className="inline-flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest text-muted hover:text-ink transition-colors cursor-pointer"
        >
          <ArrowLeft className="w-3.5 h-3.5" /> Student Access Portal
        </button>
      </div>
    </div>
  );
};
