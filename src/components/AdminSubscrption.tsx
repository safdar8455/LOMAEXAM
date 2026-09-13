import React, { useState, useMemo, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Check, X, Eye, Loader2, Award, Calendar, AlertCircle, ShoppingBag, CreditCard, ChevronRight, CheckCircle2, ShieldAlert, Upload, Image as ImageIcon } from 'lucide-react';
import { Subscription, PaymentQr } from '../types';
import { approveSubscription, rejectSubscription, getPaymentQRCode, uploadPaymentQRCode } from '../lib/subscrptionServices';
import { format } from 'date-fns';

interface AdminSubscriptionsProps {
  subscriptions: Subscription[];
  adminUid: string;
  onRefresh: () => void;
}

export const AdminSubscriptions: React.FC<AdminSubscriptionsProps> = ({
  subscriptions,
  adminUid,
  onRefresh,
}) => {
  const [filter, setFilter] = useState<'all' | 'pending' | 'approved' | 'rejected'>('all');
  const [selectedReceipt, setSelectedReceipt] = useState<string | null>(null);
  
  const [actionLoadingId, setActionLoadingId] = useState<string | null>(null);
  const [actionError, setActionError] = useState<string | null>(null);

  // QR Code States
  const [qrCode, setQrCode] = useState<PaymentQr | null>(null);
  const [qrLoading, setQrLoading] = useState(false);
  const [qrUploading, setQrUploading] = useState(false);
  const [qrError, setQrError] = useState<string | null>(null);
  const [qrSuccess, setQrSuccess] = useState<string | null>(null);

  useEffect(() => {
    const fetchQr = async () => {
      setQrLoading(true);
      try {
        const qr = await getPaymentQRCode();
        setQrCode(qr);
      } catch (err) {
        console.warn('Failed to load payment QR code', err);
      } finally {
        setQrLoading(false);
      }
    };
    fetchQr();
  }, []);

  const handleQrUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    if (!file.type.startsWith('image/')) {
      setQrError('Please select a valid image file (PNG/JPG).');
      return;
    }

    setQrUploading(true);
    setQrError(null);
    setQrSuccess(null);

    try {
      const updatedQr = await uploadPaymentQRCode(file, adminUid);
      setQrCode(updatedQr);
      setQrSuccess('HBL Bank QR Code successfully updated!');
    } catch (err: any) {
      setQrError(err.message || 'Failed to upload QR code.');
    } finally {
      setQrUploading(false);
    }
  };

  // Compute metrics
  const stats = useMemo(() => {
    const now = new Date();
    let active = 0;
    let expired = 0;
    let pending = 0;

    subscriptions.forEach(sub => {
      if (sub.status === 'pending') {
        pending++;
      } else if (sub.status === 'approved') {
        if (sub.expiryDate && new Date(sub.expiryDate) >= now) {
          active++;
        } else {
          expired++;
        }
      }
    });

    return { total: subscriptions.length, active, expired, pending };
  }, [subscriptions]);

  // Filter subscriptions
  const filteredSubs = useMemo(() => {
    return subscriptions.filter(sub => {
      if (filter === 'all') return true;
      return sub.status === filter;
    });
  }, [subscriptions, filter]);

  const handleApprove = async (subId: string) => {
    setActionLoadingId(subId);
    setActionError(null);
    try {
      await approveSubscription(subId, adminUid);
      onRefresh();
    } catch (err: any) {
      setActionError(err.message || 'Approval action failed.');
    } finally {
      setActionLoadingId(null);
    }
  };

  const handleReject = async (subId: string) => {
    setActionLoadingId(subId);
    setActionError(null);
    try {
      await rejectSubscription(subId, adminUid);
      onRefresh();
    } catch (err: any) {
      setActionError(err.message || 'Rejection action failed.');
    } finally {
      setActionLoadingId(null);
    }
  };

  return (
    <div className="space-y-12">
      {/* Metrics Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <div className="bg-white border border-border p-8 relative overflow-hidden shadow-sm flex flex-col justify-between h-32">
          <div className="absolute top-0 left-0 w-1 bg-zinc-400 h-full" />
          <span className="text-[9px] font-sans font-bold uppercase tracking-widest text-muted block">All Submitted Streams</span>
          <div>
            <span className="text-4xl font-serif italic text-ink">{stats.total}</span>
            <span className="text-[10px] text-muted block font-serif mt-1">Receipt submissions logged</span>
          </div>
        </div>

        <div className="bg-white border border-border p-8 relative overflow-hidden shadow-sm flex flex-col justify-between h-32">
          <div className="absolute top-0 left-0 w-1 bg-amber-500 h-full animate-pulse" />
          <span className="text-[9px] font-sans font-bold uppercase tracking-widest text-amber-600 block">🟡 Actions Required (Pending)</span>
          <div>
            <span className="text-4xl font-serif italic text-amber-600">{stats.pending}</span>
            <span className="text-[10px] text-muted block font-serif mt-1">Awaiting verification review</span>
          </div>
        </div>

        <div className="bg-white border border-border p-8 relative overflow-hidden shadow-sm flex flex-col justify-between h-32">
          <div className="absolute top-0 left-0 w-1 bg-accent h-full" />
          <span className="text-[9px] font-sans font-bold uppercase tracking-widest text-accent block">🟢 Active Subscriptions</span>
          <div>
            <span className="text-4xl font-serif italic text-accent">{stats.active}</span>
            <span className="text-[10px] text-muted block font-serif mt-1">Active paid classroom seats</span>
          </div>
        </div>

        <div className="bg-white border border-border p-8 relative overflow-hidden shadow-sm flex flex-col justify-between h-32">
          <div className="absolute top-0 left-0 w-1 bg-red-400 h-full" />
          <span className="text-[9px] font-sans font-bold uppercase tracking-widest text-red-500 block">🔴 Expired Subscriptions</span>
          <div>
            <span className="text-4xl font-serif italic text-pink-700">{stats.expired}</span>
            <span className="text-[10px] text-muted block font-serif mt-1">Lapsed course memberships</span>
          </div>
        </div>
      </div>

      {/* Dynamic QR Code Management Section */}
      <div className="bg-white border border-border p-6 md:p-8 shadow-sm grid grid-cols-1 lg:grid-cols-4 gap-8 items-center animate-fade-in" id="qr-code-management-panel">
        <div className="lg:col-span-3 space-y-3">
          <span className="text-[10px] font-sans font-bold uppercase tracking-widest text-[#5E2BFF] block">Active Payment Gateway</span>
          <h3 className="font-serif italic text-2xl text-ink">HBL Bank QR Code Management</h3>
          <p className="text-xs text-muted font-serif italic max-w-xl">
            Upload or overwrite your HBL Bank payment verification QR code. This image is rendered automatically for students choosing the QR Code gateway checkouts.
          </p>

          <div className="flex flex-wrap gap-4 pt-2">
            <label className="px-5 py-3 bg-ink hover:bg-accent text-white hover:text-ink font-sans text-xs font-bold uppercase tracking-widest rounded transition-all flex items-center gap-2 cursor-pointer shadow-sm active:scale-[0.98]">
              {qrUploading ? (
                <>
                  <Loader2 className="w-4 h-4 animate-spin" />
                  Uploading QR...
                </>
              ) : (
                <>
                  <Upload className="w-4 h-4" />
                  Upload New HBL QR
                </>
              )}
              <input
                type="file"
                accept="image/*"
                onChange={handleQrUpload}
                disabled={qrUploading}
                className="hidden"
              />
            </label>
          </div>

          {(qrError || qrSuccess) && (
            <div className="pt-2">
              {qrError && (
                <p className="text-xs text-red-600 font-sans flex items-center gap-1.5 font-semibold">
                  <span className="shrink-0">⚠️ Upload Failed:</span> {qrError}
                </p>
              )}
              {qrSuccess && (
                <p className="text-xs text-green-600 font-sans flex items-center gap-1.5 font-semibold">
                  <span className="shrink-0 font-bold">✓</span> {qrSuccess}
                </p>
              )}
            </div>
          )}
        </div>

        <div className="border border-border bg-bg/40 p-4 rounded flex flex-col items-center justify-center text-center self-stretch min-h-36">
          {qrLoading ? (
            <div className="py-6 flex flex-col items-center gap-2">
              <Loader2 className="w-6 h-6 animate-spin text-accent" />
              <p className="text-[10px] text-muted font-sans font-bold uppercase">Fetching details...</p>
            </div>
          ) : qrCode?.imageUrl ? (
            <div className="space-y-2 w-full flex flex-col items-center justify-center">
              <div className="border border-border rounded bg-white p-2 flex items-center justify-center h-28 w-28 overflow-hidden shadow-inner">
                <img
                  src={qrCode.imageUrl}
                  alt="Active HBL QR Code"
                  className="h-24 w-auto object-contain select-none"
                  referrerPolicy="no-referrer"
                />
              </div>
              <p className="text-[9px] text-muted font-sans uppercase font-bold tracking-tight">
                Updated {format(new Date(qrCode.updatedAt), 'PP')}
              </p>
            </div>
          ) : (
            <div className="py-4 flex flex-col items-center gap-2 text-muted justify-center h-full">
              <ImageIcon className="w-8 h-8 text-zinc-300" />
              <p className="text-xs font-serif italic text-ink">No QR uploaded yet</p>
              <p className="text-[8px] font-sans font-bold uppercase tracking-wider">Using text info fallbacks</p>
            </div>
          )}
        </div>
      </div>

      {/* Global Action / Error Banner */}
      {actionError && (
        <div className="p-4 bg-red-50 border border-red-200 text-red-600 font-sans text-xs flex items-center gap-2">
          <AlertCircle className="w-5 h-5 text-red-500" />
          <span>{actionError}</span>
        </div>
      )}

      {/* Subscriptions List Section */}
      <div className="bg-white border border-border shadow-sm p-6 md:p-8 space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-border pb-6">
          <div>
            <h3 className="font-serif italic text-2xl text-ink">Course Subscription Requests</h3>
            <p className="text-[10px] text-muted font-serif italic mt-1">Manage, verify, and unlock user access based on manual financial transaction validation.</p>
          </div>

          {/* Filters */}
          <div className="flex bg-bg p-1 border border-border rounded-lg text-xs font-sans">
            {(['all', 'pending', 'approved', 'rejected'] as const).map(f => (
              <button
                key={f}
                onClick={() => setFilter(f)}
                className={`px-4 py-2 font-semibold uppercase tracking-wider transition-all rounded ${
                  filter === f
                    ? 'bg-ink text-white shadow-sm'
                    : 'text-muted hover:text-ink'
                }`}
              >
                {f}
              </button>
            ))}
          </div>
        </div>

        {filteredSubs.length === 0 ? (
          <div className="text-center py-24 border border-zinc-100 bg-bg/20 rounded">
            <ShoppingBag className="w-12 h-12 text-zinc-300 mx-auto mb-4" />
            <h4 className="font-serif text-lg text-ink mb-1">No requests match this filter</h4>
            <p className="text-xs text-muted font-serif italic">No payments have been logged under the "{filter}" status currently.</p>
          </div>
        ) : (
          <div className="divide-y divide-border">
            {filteredSubs.map(sub => {
              const now = new Date();
              const isExpired = sub.status === 'approved' && sub.expiryDate && new Date(sub.expiryDate) < now;
              
              return (
                <div key={sub.id} className="py-6 flex flex-col lg:flex-row justify-between items-start lg:items-center gap-6">
                  {/* Student & Course Details */}
                  <div className="space-y-2">
                    <div className="flex items-center gap-2 flex-wrap">
                      <span className="text-[10px] font-sans font-bold uppercase px-2 py-0.5 border border-border bg-bg text-ink rounded">
                        {sub.courseId.toUpperCase()}
                      </span>
                      {sub.status === 'pending' && (
                        <span className="text-[9px] font-bold uppercase tracking-wider text-amber-600 bg-amber-50 px-2 py-0.5 border border-amber-100 rounded">
                          Awaiting Review
                        </span>
                      )}
                      {sub.status === 'approved' && (
                        <span className={`text-[9px] font-bold uppercase tracking-wider px-2 py-0.5 border rounded flex items-center gap-1 ${
                          isExpired 
                            ? 'text-red-500 bg-red-50 border-red-100' 
                            : 'text-accent bg-green-50 border-green-100'
                        }`}>
                          {isExpired ? 'Expired Subscription' : '🟢 Active Membership'}
                        </span>
                      )}
                      {sub.status === 'rejected' && (
                        <span className="text-[9px] font-bold uppercase tracking-wider text-red-500 bg-red-50 px-2 py-0.5 border border-red-100 rounded">
                          Rejected / Unapproved
                        </span>
                      )}
                    </div>

                    <h4 className="font-serif italic text-lg text-ink">
                      {sub.fullName} <span className="text-xs font-sans text-muted not-italic">(User ID: {sub.userId.substring(0, 6)}...)</span>
                    </h4>
                    
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-1 text-xs font-serif text-muted italic">
                      <p>Email: <span className="font-sans not-italic text-ink font-semibold">{sub.email}</span></p>
                      <p>Phone: <span className="font-sans not-italic text-ink font-semibold">{sub.phoneNumber}</span></p>
                      <p>Course: <span className="text-ink font-semibold">{sub.courseName}</span></p>
                      <p>Submitted: <span className="font-sans not-italic text-ink font-semibold">
                        {format(new Date(sub.submittedAt), 'PPpp')}
                      </span></p>
                    </div>
                  </div>

                  {/* Payment Proof details */}
                  <div className="bg-bg/40 border border-border p-4 rounded-lg flex items-center justify-between gap-8 w-full lg:w-fit">
                    <div className="space-y-1 text-xs">
                      <span className="text-[8px] font-sans font-bold uppercase text-muted block">Transaction Log</span>
                      <p className="font-sans font-bold text-ink">Rs. {sub.paymentAmount} via <span className="capitalize">{sub.paymentMethod.replace('_', ' ')}</span></p>
                      <p className="font-mono text-[10px] text-zinc-600">ID: {sub.transactionId}</p>
                      <p className="text-[9px] text-muted italic font-serif">Date: {sub.paymentDate}</p>
                    </div>

                    <div className="flex flex-col gap-2">
                      <button
                        onClick={() => setSelectedReceipt(sub.receiptUrl)}
                        className="px-3 py-2 bg-white hover:bg-neutral-100 border border-border rounded text-[10px] font-sans font-bold uppercase tracking-widest text-ink transition-all flex items-center gap-1 cursor-pointer"
                      >
                        <Eye className="w-3.5 h-3.5 text-accent" /> View Receipt
                      </button>
                      
                      {sub.startDate && sub.expiryDate && (
                        <div className="text-[9px] font-sans font-bold text-muted border-t border-border/60 pt-1.5 mt-0.5">
                          Expires: <span className="text-ink font-medium">{format(new Date(sub.expiryDate), 'PP')}</span>
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Actions Column */}
                  <div className="flex gap-2.5 shrink-0 w-full lg:w-auto border-t lg:border-t-0 pt-4 lg:pt-0">
                    {sub.status === 'pending' ? (
                      <>
                        <button
                          disabled={actionLoadingId !== null}
                          onClick={() => handleApprove(sub.id!)}
                          className="flex-1 lg:flex-none px-4 py-3 bg-green-600 hover:bg-accent text-white hover:text-ink font-sans text-[9px] font-bold uppercase tracking-widest rounded transition-all flex items-center justify-center gap-1 cursor-pointer shadow-sm"
                        >
                          {actionLoadingId === sub.id ? (
                            <Loader2 className="w-3.5 h-3.5 animate-spin" />
                          ) : (
                            <>
                              <Check className="w-3.5 h-3.5" /> Approve
                            </>
                          )}
                        </button>
                        <button
                          disabled={actionLoadingId !== null}
                          onClick={() => handleReject(sub.id!)}
                          className="flex-1 lg:flex-none px-4 py-3 bg-red-50 hover:bg-red-100 border border-red-200 text-red-600 font-sans text-[9px] font-bold uppercase tracking-widest rounded transition-all flex items-center justify-center gap-1 cursor-pointer"
                        >
                          {actionLoadingId === sub.id ? (
                            <Loader2 className="w-3.5 h-3.5 animate-spin" />
                          ) : (
                            <>
                              <X className="w-3.5 h-3.5" /> Reject
                            </>
                          )}
                        </button>
                      </>
                    ) : (
                      <div className="text-[10px] font-sans text-muted">
                        Review Completed {sub.approvedBy && `by admin`}
                      </div>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>

      {/* Modal image viewer */}
      <AnimatePresence>
        {selectedReceipt && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedReceipt(null)}
            className="fixed inset-0 bg-ink/75 z-50 flex items-center justify-center p-4 backdrop-blur-sm"
          >
            <motion.div 
              initial={{ scale: 0.95 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.95 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-white max-w-2xl w-full p-4 border border-zinc-200 rounded-lg relative shadow-2xl flex flex-col justify-between"
            >
              <button
                onClick={() => setSelectedReceipt(null)}
                className="absolute top-4 right-4 p-2 bg-ink/80 text-white rounded-full hover:bg-accent hover:text-ink transition-colors cursor-pointer"
              >
                <X className="w-4 h-4" />
              </button>
              
              <div className="border border-border rounded overflow-hidden max-h-[70vh] flex items-center justify-center bg-bg relative">
                <img 
                  src={selectedReceipt} 
                  referrerPolicy="no-referrer"
                  alt="Receipt Screenshot Preview" 
                  className="w-full h-auto object-contain max-h-[65vh] select-none" 
                />
              </div>

              <div className="mt-4 pt-3 border-t border-border flex items-center justify-between text-xs text-muted">
                <p className="font-serif italic">Verified audit trail receipt image</p>
                <button
                  type="button"
                  onClick={() => setSelectedReceipt(null)}
                  className="font-bold text-ink uppercase tracking-widest text-[9px]"
                >
                  Close Receipt
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
