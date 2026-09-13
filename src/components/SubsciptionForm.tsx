import React, { useState, useRef, useEffect } from 'react';
import { motion } from 'motion/react';
import { Upload, X, ShieldAlert, CheckCircle2, CreditCard, Calendar, Check, AlertCircle, Phone, Loader2 } from 'lucide-react';
import { Course, PaymentQr } from '../types';
import { createSubscription, getPaymentQRCode } from '../lib/subscrptionServices';

interface SubscriptionFormProps {
  course: Course;
  userId: string;
  userPhone: string;
  onSuccess: () => void;
  onCancel: () => void;
}

export const SubscriptionForm: React.FC<SubscriptionFormProps> = ({
  course,
  userId,
  userPhone,
  onSuccess,
  onCancel,
}) => {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState(userPhone || '');
  const [paymentMethod, setPaymentMethod] = useState('easypaisa');
  const [transactionId, setTransactionId] = useState('');
  const [paymentDate, setPaymentDate] = useState(new Date().toISOString().split('T')[0]);
  const [receiptFile, setReceiptFile] = useState<File | null>(null);
  const [receiptPreview, setReceiptPreview] = useState<string | null>(null);
  
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [dragActive, setDragActive] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const [paymentQr, setPaymentQr] = useState<PaymentQr | null>(null);
  const [paymentQrLoading, setPaymentQrLoading] = useState(false);

  const fileInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    const fetchQr = async () => {
      setPaymentQrLoading(true);
      try {
        const qr = await getPaymentQRCode();
        setPaymentQr(qr);
      } catch (err) {
        console.warn('Unable to load payment QR code:', err);
      } finally {
        setPaymentQrLoading(false);
      }
    };
    fetchQr();
  }, []);

  const handleDrag = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === 'dragenter' || e.type === 'dragover') {
      setDragActive(true);
    } else if (e.type === 'dragleave') {
      setDragActive(false);
    }
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);

    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      const file = e.dataTransfer.files[0];
      if (file.type.startsWith('image/')) {
        setReceiptFile(file);
        const reader = new FileReader();
        reader.onload = () => {
          setReceiptPreview(reader.result as string);
        };
        reader.readAsDataURL(file);
      } else {
        setError('Please drop/upload an image file (PNG/JPG/JPEG receipt)');
      }
    }
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      if (file.type.startsWith('image/')) {
        setReceiptFile(file);
        const reader = new FileReader();
        reader.onload = () => {
          setReceiptPreview(reader.result as string);
        };
        reader.readAsDataURL(file);
      } else {
        setError('Please select an image file (receipt photo/screenshot)');
      }
    }
  };

  const handleRemoveFile = () => {
    setReceiptFile(null);
    setReceiptPreview(null);
    if (fileInputRef.current) {
      fileInputRef.current.value = '';
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);

    if (!fullName.trim()) return setError('Full Name is required.');
    if (!email.trim() || !email.includes('@')) return setError('A valid Email address is required.');
    if (!phone.trim()) return setError('Phone Number is required.');
    if (!transactionId.trim()) return setError('Transaction ID / Reference Number is required.');
    if (!receiptFile) return setError('Please upload a screenshot or receipt photo of the transfer.');

    setSubmitting(true);
    try {
      await createSubscription(
        {
          userId,
          courseId: course.id,
          courseName: course.title,
          paymentAmount: 300, // Standard fee
          transactionId: transactionId.trim(),
          fullName: fullName.trim(),
          email: email.trim(),
          phoneNumber: phone.trim(),
          paymentMethod,
          paymentDate,
          planMonths: 1, // Standard plan duration
        },
        receiptFile
      );
      
      setIsSubmitted(true);
      
      // Auto-trigger mailto notification to admin
      const subject = `[PENDING] Subscription Request for ${course.shortTitle} - ${fullName.trim()}`;
      const body = `Hello Admin,\n\nI have submitted a subscription request for the course: ${course.title} (${course.id.toUpperCase()}).\n\nMy Details:\n- Name: ${fullName.trim()}\n- Email: ${email.trim()}\n- Phone: ${phone.trim()}\n- User ID: ${userId}\n\nPayment Information:\n- Paid via: ${paymentMethod.replace('_', ' ').toUpperCase()}\n- Date: ${paymentDate}\n- Transaction ID: ${transactionId.trim()}\n- Paid Amount: Rs. 300\n\n*[Payer: please remember to attach your payment receipt screenshot to this email]*\n\nThank you!`;
      const mailtoUrl = `mailto:safderjamali12@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
      
      try {
        window.location.href = mailtoUrl;
      } catch (e) {
        console.warn("Could not auto-open mail client", e);
      }
    } catch (err: any) {
      setError(err.message || 'Failed to submit subscription request. Please try again.');
    } finally {
      setSubmitting(false);
    }
  };

  if (isSubmitted) {
    const subject = `[PENDING] Subscription Request for ${course.shortTitle} - ${fullName.trim()}`;
    const body = `Hello Admin,\n\nI have submitted a subscription request for the course: ${course.title} (${course.id.toUpperCase()}).\n\nMy Details:\n- Name: ${fullName.trim()}\n- Email: ${email.trim()}\n- Phone: ${phone.trim()}\n- User ID: ${userId}\n\nPayment Information:\n- Paid via: ${paymentMethod.replace('_', ' ').toUpperCase()}\n- Date: ${paymentDate}\n- Transaction ID: ${transactionId.trim()}\n- Paid Amount: Rs. 300\n\n*[Payer: please remember to attach your payment receipt screenshot to this email]*\n\nThank you!`;
    const mailtoUrl = `mailto:safderjamali12@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

    return (
      <div className="bg-white border border-border p-8 md:p-12 shadow-2xl relative overflow-hidden transition-all duration-300 max-w-2xl mx-auto animate-fade-in" id="subscription-success-panel">
        <div className="absolute top-0 left-0 w-full h-1 bg-emerald-500" />
        
        <div className="text-center space-y-6 animate-fade-in">
          <div className="w-16 h-16 bg-green-50 border border-green-200 text-green-600 rounded-full flex items-center justify-center mx-auto shadow-sm">
            <CheckCircle2 className="w-10 h-10 animate-pulse" />
          </div>

          <div className="space-y-2">
            <span className="text-[10px] font-sans font-bold uppercase tracking-[0.3em] text-green-600 block">Record Logged of Submission</span>
            <h2 className="text-2xl md:text-3xl font-serif italic text-ink">Subscription Logged!</h2>
            <p className="text-xs text-muted font-serif italic max-w-md mx-auto leading-relaxed">
              Your payment verification details have been registered into our secure database. To expedite quick activation, please confirm by dispatching this message to the administrator.
            </p>
          </div>

          <div className="bg-bg border border-border p-6 rounded text-left text-xs space-y-4">
            <h4 className="font-sans font-bold uppercase tracking-wider text-ink text-[10px] border-b border-border pb-2 flex items-center justify-between">
              <span>Prepared Admin Notification</span>
              <span className="text-muted text-[9px] font-mono">To: safderjamali12@gmail.com</span>
            </h4>
            
            <div className="space-y-2 font-serif italic text-muted">
              <p><strong className="font-sans not-italic text-ink font-semibold">Selected Course:</strong> {course.title}</p>
              <p><strong className="font-sans not-italic text-ink font-semibold">Student Name:</strong> {fullName}</p>
              <p><strong className="font-sans not-italic text-ink font-semibold">Transaction:</strong> Rs. 300 via {paymentMethod.replace('_', ' ').toUpperCase()} (ID: {transactionId})</p>
            </div>
            
            <div className="bg-[#FAF8F5] p-3 border border-border rounded text-[11px] text-ink flex items-start gap-2.5">
              <ShieldAlert className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
              <div>
                <span className="font-bold">Next Step:</span> If your browser did not automatically open your email app, click the button below to review/open, and <span className="underline font-bold">be sure to attach your receipt screenshot/photo</span> as verification proof before sending!
              </div>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 pt-2">
            <a
              href={mailtoUrl}
              id="send-admin-email-button"
              className="flex-1 py-4 bg-ink text-white hover:bg-accent hover:text-ink font-sans font-bold uppercase tracking-widest text-[10px] transition-all flex items-center justify-center gap-2 shadow-lg active:scale-[0.98] cursor-pointer"
            >
              📬 Send Notification Email
            </a>
            <button
              type="button"
              id="continue-to-dashboard-button"
              onClick={onSuccess}
              className="px-6 py-4 border border-border text-ink hover:bg-bg hover:border-ink transition-all text-[10px] font-sans font-bold uppercase tracking-widest cursor-pointer"
            >
              Continue to Dashboard
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white border border-border p-8 md:p-12 shadow-2xl relative overflow-hidden transition-all duration-300">
      <div className="absolute top-0 left-0 w-full h-1 bg-accent" />
      
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-8 border-b border-border pb-6">
        <div>
          <span className="text-[10px] font-sans font-bold uppercase tracking-[0.3em] text-accent block mb-2">Secure Gateway Enrollment</span>
          <h2 className="text-3xl font-serif italic text-ink leading-none">Course Subscription Request</h2>
          <p className="text-xs text-muted font-serif italic mt-1.5">For {course.shortTitle} — {course.title}</p>
        </div>
        <button 
          onClick={onCancel}
          className="text-[10px] font-sans font-bold uppercase tracking-widest text-muted hover:text-ink hover:underline flex items-center gap-1.5"
        >
          <X className="w-4 h-4" /> Cancel
        </button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
        {/* Left column: payment steps */}
        <div className="lg:col-span-2 space-y-8 bg-bg/50 p-6 md:p-8 border border-border">
          <h3 className="font-serif italic text-xl text-ink pb-2 border-b border-border">Payment Instructions</h3>
          
          <div className="space-y-6">
            <div className="flex gap-4">
              <span className="w-7 h-7 shrink-0 rounded-full border border-ink flex items-center justify-center font-mono text-xs font-bold bg-white shadow-sm">1</span>
              <div>
                <h4 className="text-xs font-sans font-bold uppercase tracking-wider text-ink mb-1">Transfer fee of Rs. 300</h4>
                <p className="text-xs text-muted leading-relaxed font-serif italic">Please pay Rs. 300 to one of our payment addresses below.</p>
              </div>
            </div>

            <div className="space-y-3 pl-11">

              <div className="bg-white p-3.5 border border-border rounded shadow-sm text-xs space-y-1">
                <span className="text-[9px] font-bold text-amber-600 uppercase tracking-widest block font-sans">🟠 Option A: HBL Bank</span>
                <p className="font-mono text-ink font-bold">Account Number: 08797901691603</p>
                <p className="font-mono text-ink font-bold">IBAN: PK65HABB0008797901691603</p>
                <p className="text-[10px] text-muted font-sans/80">Branch: Safora Goth KARACHI</p>
              </div>

              <div className="bg-white p-3.5 border border-border rounded shadow-sm text-xs space-y-2">
                <span className="text-[9px] font-bold text-amber-600 uppercase tracking-widest block font-sans">🔴 Option B: Payment via QR</span>
                {paymentQrLoading ? (
                  <p className="text-[10px] text-muted animate-pulse font-serif italic">Loading current HBL QR...</p>
                ) : paymentQr?.imageUrl ? (
                  <div className="space-y-2">
                    <img
                      src={paymentQr.imageUrl}
                      alt="HBL QR payment code"
                      className="w-full h-auto object-contain border border-border rounded max-h-48 shadow-sm"
                      referrerPolicy="no-referrer"
                    />
                    <p className="text-[9px] text-muted">Scan QR to pay. Updated {new Date(paymentQr.updatedAt).toLocaleDateString()}</p>
                  </div>
                ) : (
                  <p className="text-[10px] text-muted italic">No payment QR uploaded yet. Please use the HBL bank transfer details above.</p>
                )}
              </div>
            </div>

            <div className="flex gap-4">
              <span className="w-7 h-7 shrink-0 rounded-full border border-ink flex items-center justify-center font-mono text-xs font-bold bg-white shadow-sm">2</span>
              <div>
                <h4 className="text-xs font-sans font-bold uppercase tracking-wider text-ink mb-1">Submit Proof of Payment</h4>
                <p className="text-xs text-muted leading-relaxed font-serif italic">Provide the transaction details and screenshots in the form to your right.</p>
              </div>
            </div>

            <div className="flex gap-4">
              <span className="w-7 h-7 shrink-0 rounded-full border border-ink flex items-center justify-center font-mono text-xs font-bold bg-white shadow-sm">3</span>
              <div>
                <h4 className="text-xs font-sans font-bold uppercase tracking-wider text-ink mb-1">Admin Approval Verification</h4>
                <p className="text-xs text-muted leading-relaxed font-serif italic">Administrator will verify payment within 1-2 hours and approve access for 30 full days.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Right column: form submission */}
        <form onSubmit={handleSubmit} className="lg:col-span-3 space-y-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="space-y-1.5">
              <label className="block text-[8px] font-bold uppercase tracking-widest text-muted font-sans">Full Name (Payer)</label>
              <input 
                type="text" 
                required
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
                placeholder="John Doe"
                className="w-full bg-bg border border-border px-4 py-3 text-xs font-sans focus:outline-ink outline-none transition-all placeholder:text-muted/60"
              />
            </div>

            <div className="space-y-1.5">
              <label className="block text-[8px] font-bold uppercase tracking-widest text-muted font-sans font-sans">Email Address</label>
              <input 
                type="email" 
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="john@example.com"
                className="w-full bg-bg border border-border px-4 py-3 text-xs font-sans focus:outline-ink outline-none transition-all placeholder:text-muted/60"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="space-y-1.5">
              <label className="block text-[8px] font-bold uppercase tracking-widest text-muted font-sans">Phone Number</label>
              <input 
                type="text" 
                required
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                placeholder="+92 300 1234567"
                className="w-full bg-bg border border-border px-4 py-3 text-xs font-sans focus:outline-ink outline-none transition-all placeholder:text-muted/60"
              />
            </div>

            <div className="space-y-1.5">
              <label className="block text-[8px] font-bold uppercase tracking-widest text-muted font-sans font-sans">LOMA Course Template</label>
              <input 
                type="text" 
                disabled
                value={`${course.shortTitle} — ${course.title}`}
                className="w-full bg-bg/80 border border-border px-4 py-3 text-xs font-sans text-muted outline-none cursor-not-allowed"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div className="space-y-1.5">
              <label className="block text-[8px] font-bold uppercase tracking-widest text-muted font-sans">Payment Method</label>
              <select
                value={paymentMethod}
                onChange={(e) => setPaymentMethod(e.target.value)}
                className="w-full bg-bg border border-border px-4 py-3 text-xs font-sans focus:outline-ink outline-none transition-all"
              >
                <option value="easypaisa">Easypaisa</option>
                <option value="jazzcash">JazzCash</option>
                <option value="hbl_bank">HBL Bank Transfer</option>
              </select>
            </div>

            <div className="space-y-1.5 sm:col-span-2">
              <label className="block text-[8px] font-bold uppercase tracking-widest text-muted font-sans">Payment Date</label>
              <input 
                type="date" 
                required
                value={paymentDate}
                onChange={(e) => setPaymentDate(e.target.value)}
                className="w-full bg-bg border border-border px-4 py-3 text-xs font-sans focus:outline-ink outline-none transition-all"
              />
            </div>
          </div>

          <div className="space-y-1.5">
            <label className="block text-[8px] font-bold uppercase tracking-widest text-muted font-sans">Transaction / Reference ID</label>
            <input 
              type="text" 
              required
              value={transactionId}
              onChange={(e) => setTransactionId(e.target.value)}
              placeholder="e.g. TR-20230202-0941 or standard TXN ID"
              className="w-full bg-bg border border-border px-4 py-3 text-xs font-sans focus:outline-ink outline-none transition-all placeholder:text-muted/60"
            />
          </div>

          {/* Receipt screenshot upload area */}
          <div className="space-y-1.5">
            <label className="block text-[8px] font-bold uppercase tracking-widest text-muted font-sans">Receipt Screenshot (PNG/JPG)</label>
            
            {receiptPreview ? (
              <div className="relative border border-border bg-bg/25 p-4 rounded flex items-center justify-between gap-4">
                <div className="flex items-center gap-3">
                  <img src={receiptPreview} alt="Receipt Preview" className="w-16 h-16 object-cover border border-border shadow-sm rounded bg-white" />
                  <div>
                    <p className="text-[11px] font-bold text-ink truncate max-w-xs">{receiptFile?.name}</p>
                    <p className="text-[9px] text-muted">{(receiptFile!.size / 1024 / 1024).toFixed(2)} MB</p>
                  </div>
                </div>
                <button 
                  type="button"
                  onClick={handleRemoveFile}
                  className="p-1.5 text-zinc-400 hover:text-red-500 hover:bg-red-50 border border-transparent hover:border-red-100 rounded transition-all mr-2"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>
            ) : (
              <div 
                onDragEnter={handleDrag}
                onDragOver={handleDrag}
                onDragLeave={handleDrag}
                onDrop={handleDrop}
                onClick={() => fileInputRef.current?.click()}
                className={`border-2 border-dashed rounded-lg p-8 text-center cursor-pointer transition-all duration-200 flex flex-col items-center justify-center gap-3 ${
                  dragActive 
                    ? 'border-accent bg-accent/5' 
                    : 'border-border hover:border-ink hover:bg-bg/40'
                }`}
              >
                <input 
                  type="file" 
                  ref={fileInputRef}
                  onChange={handleFileChange}
                  accept="image/*"
                  className="hidden"
                />
                <Upload className="w-8 h-8 text-muted/80 animate-bounce" />
                <div>
                  <p className="text-xs font-bold text-ink">Drag & drop your receipt screenshot, or <span className="text-accent underline font-serif italic">browse files</span></p>
                  <p className="text-[10px] text-muted mt-1">Accepts proof transaction receipt photos up to 4MB.</p>
                </div>
              </div>
            )}
          </div>

          {error && (
            <div className="p-3.5 bg-red-50 border border-red-200 text-red-600 text-[10px] font-sans flex items-center gap-2.5 shadow-sm">
              <AlertCircle className="w-4 h-4 shrink-0 text-red-500" />
              <span>{error}</span>
            </div>
          )}

          <div className="flex items-center gap-4 pt-2">
            <button
              type="submit"
              disabled={submitting}
              className={`flex-1 py-4 ${submitting ? 'bg-muted/40 cursor-not-allowed' : 'bg-ink hover:bg-accent'} text-white ${submitting ? 'text-muted' : 'hover:text-ink'} font-sans font-bold uppercase tracking-widest text-[10px] transition-all flex items-center justify-center gap-2 shadow-lg ${submitting ? '' : 'hover:shadow-2xl'} active:scale-[0.98]`}
            >
              {submitting ? (
                <>
                  <Loader2 className="w-4 h-4 animate-spin" />
                  Transmitting Payment Record...
                </>
              ) : (
                'Submit Payment Verification'
              )}
            </button>
            <button
              type="button"
              disabled={submitting}
              onClick={onCancel}
              className={`px-6 py-4 border border-border ${submitting ? 'text-muted cursor-not-allowed' : 'text-muted hover:text-ink hover:bg-bg hover:border-ink'} transition-all text-[10px] font-sans font-bold uppercase tracking-widest`}
            >
              Back
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
