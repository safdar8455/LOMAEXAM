import React, { useState, useEffect } from 'react';
import { Phone, AlertCircle, Loader2, LogOut } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { saveUserProfile } from '../lib/storage';

export const PhoneAuth: React.FC = () => {
  const [phoneNumber, setPhoneNumber] = useState('');
  const [verificationCode, setVerificationCode] = useState('');
  const [confirmationResult, setConfirmationResult] = useState<ConfirmationResult | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [verificationSent, setVerificationSent] = useState(false);
  const [demoModeActive, setDemoModeActive] = useState(false);

  useEffect(() => {
    setError('Demo mode: This app uses local-only authentication. Use any 6-digit code to continue.');
  }, []);

  const handleSendCode = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!phoneNumber) return;

    setLoading(true);
    setError(null);
    setTimeout(() => {
      setLoading(false);
      setVerificationSent(true);
      setDemoModeActive(true);
      setConfirmationResult({
        verificationId: 'demo',
        confirm: async () => ({
          user: {
            uid: 'demo-user-' + Date.now(),
            phoneNumber,
          },
        }),
      } as any);
      setError('Demo mode: Verification code sent (simulated). Use any 6-digit code to continue.');
    }, 1000);
  };

  const handleVerifyCode = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!verificationCode) return;

    if (!confirmationResult) return;

    setLoading(true);
    setError(null);

    try {
      const result = await confirmationResult.confirm(verificationCode);
      if (result.user) {
        await saveUserProfile(result.user.uid, result.user.phoneNumber || phoneNumber, result.user.email || '' );
        setError('Demo authentication complete. You are now signed in locally.');
      }
    } catch (err: any) {
      console.error(err);
      setError('Invalid code. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="w-full max-w-md mx-auto p-8 bg-white rounded-3xl shadow-xl border border-gray-100">
      <div className="text-center mb-10">
        <div className="w-20 h-20 bg-blue-50 rounded-full flex items-center justify-center mx-auto mb-6">
          <Phone className="w-10 h-10 text-blue-600" />
        </div>
        <h2 className="text-3xl font-bold text-gray-900 tracking-tight">Access Pro Features</h2>
        <p className="text-gray-500 mt-3 text-lg">Sign in with your phone to sync progress across all your devices.</p>
      </div>

      <AnimatePresence mode="wait">
        {!confirmationResult ? (
          <motion.form
            key="phone-input"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            onSubmit={handleSendCode}
            className="space-y-6"
          >
            <div className="space-y-2">
              <label className="block text-sm font-semibold text-gray-700 ml-1">
                Phone Number
              </label>
              <input
                type="tel"
                placeholder="+1 234 567 8900"
                className="w-full px-5 py-4 rounded-2xl border border-gray-200 focus:ring-4 focus:ring-blue-100 focus:border-blue-500 outline-none transition-all text-lg font-medium"
                value={phoneNumber}
                onChange={(e) => setPhoneNumber(e.target.value)}
                required
              />
              <p className="text-sm text-gray-400 mt-2 text-center">
                We'll send a 6-digit code to verify your number.
              </p>
            </div>

            <button
              id="sign-in-button"
              type="submit"
              disabled={loading || !phoneNumber}
              className="w-full bg-blue-600 hover:bg-blue-700 disabled:bg-blue-300 text-white font-bold py-4 rounded-2xl transition-all transform active:scale-[0.98] flex items-center justify-center gap-3 text-lg shadow-lg shadow-blue-200"
            >
              {loading ? <Loader2 className="w-6 h-6 animate-spin" /> : 'Continue'}
            </button>
          </motion.form>
        ) : (
          <motion.form
            key="code-input"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            onSubmit={handleVerifyCode}
            className="space-y-6"
          >
            <div className="space-y-2">
              <label className="block text-sm font-semibold text-gray-700 ml-1 text-center">
                Enter 6-digit Code
              </label>
              <input
                type="text"
                placeholder="000000"
                maxLength={6}
                className="w-full px-5 py-4 rounded-2xl border border-gray-200 focus:ring-4 focus:ring-blue-100 focus:border-blue-500 outline-none transition-all text-center text-3xl font-bold tracking-[0.5em]"
                value={verificationCode}
                onChange={(e) => setVerificationCode(e.target.value)}
                required
                autoFocus
              />
            </div>

            <button
              type="submit"
              disabled={loading || verificationCode.length !== 6}
              className="w-full bg-blue-600 hover:bg-blue-700 disabled:bg-blue-300 text-white font-bold py-4 rounded-2xl transition-all transform active:scale-[0.98] flex items-center justify-center gap-3 text-lg shadow-lg shadow-blue-200"
            >
              {loading ? <Loader2 className="w-6 h-6 animate-spin" /> : 'Verify Code'}
            </button>

            <div className="text-center">
              <button
                type="button"
                onClick={() => setConfirmationResult(null)}
                className="text-sm font-medium text-gray-400 hover:text-blue-600 transition-colors flex items-center justify-center mx-auto gap-2"
                disabled={loading}
              >
                <LogOut className="w-4 h-4 rotate-180" /> Use different number
              </button>
            </div>
          </motion.form>
        )}
      </AnimatePresence>

      {error && (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="mt-8 p-4 bg-red-50 border border-red-100 rounded-2xl flex gap-3 text-red-600 text-sm leading-relaxed"
        >
          <AlertCircle className="w-5 h-5 shrink-0" />
          <p>{error}</p>
        </motion.div>
      )}

    </div>
  );
};
