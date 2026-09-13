import { auth } from './firebase';
import { Subscription, PaymentQr } from '../types';

const COLLECTION_NAME = 'subscriptions';
const SUBSCRIPTIONS_KEY = 'loma_subscriptions';
const QR_KEY = 'loma_payment_qr';

export const fileToBase64 = (file: File): Promise<string> => {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result as string);
    reader.onerror = (error) => reject(error);
  });
};

export const uploadReceipt = async (_userId: string, _courseId: string, file: File): Promise<string> => {
  return await fileToBase64(file);
};

export const createSubscription = async (
  subscriptionData: Omit<Subscription, 'id' | 'receiptUrl' | 'submittedAt' | 'approved' | 'status'>,
  receiptFile: File
): Promise<string> => {
  const receiptUrl = await uploadReceipt(subscriptionData.userId, subscriptionData.courseId, receiptFile);

  const subs = readSubscriptions();
  const newSub: Subscription = {
    ...subscriptionData,
    id: `${Date.now()}-${Math.random().toString(16).slice(2)}`,
    receiptUrl,
    submittedAt: new Date().toISOString(),
    approved: false,
    status: 'pending',
    planMonths: subscriptionData.planMonths || 1,
  };

  subs.push(newSub);
  localStorage.setItem(SUBSCRIPTIONS_KEY, JSON.stringify(subs));
  return newSub.id || '';
};

const readSubscriptions = (): Subscription[] => {
  try {
    const saved = localStorage.getItem(SUBSCRIPTIONS_KEY);
    return saved ? JSON.parse(saved) : [];
  } catch {
    return [];
  }
};

export const getUserSubscriptions = async (userId: string): Promise<Subscription[]> => {
  return readSubscriptions()
    .filter((sub) => sub.userId === userId)
    .sort((a, b) => new Date(b.submittedAt).getTime() - new Date(a.submittedAt).getTime());
};

export const getAllSubscriptions = async (): Promise<Subscription[]> => {
  return readSubscriptions().sort((a, b) => new Date(b.submittedAt).getTime() - new Date(a.submittedAt).getTime());
};

export const approveSubscription = async (subscriptionId: string, adminUid: string): Promise<void> => {
  const subs = readSubscriptions();
  const index = subs.findIndex((sub) => sub.id === subscriptionId);

  if (index < 0) return;

  const now = new Date();
  const expiry = new Date();
  expiry.setDate(now.getDate() + 30 * (subs[index].planMonths || 1));

  subs[index] = {
    ...subs[index],
    approved: true,
    status: 'approved',
    startDate: now.toISOString(),
    expiryDate: expiry.toISOString(),
    approvedBy: adminUid,
  };

  localStorage.setItem(SUBSCRIPTIONS_KEY, JSON.stringify(subs));
};

export const rejectSubscription = async (subscriptionId: string, adminUid: string): Promise<void> => {
  const subs = readSubscriptions();
  const index = subs.findIndex((sub) => sub.id === subscriptionId);

  if (index < 0) return;

  subs[index] = {
    ...subs[index],
    approved: false,
    status: 'rejected',
    approvedBy: adminUid,
  };

  localStorage.setItem(SUBSCRIPTIONS_KEY, JSON.stringify(subs));
};

export const getPaymentQRCode = async (): Promise<PaymentQr | null> => {
  try {
    const saved = localStorage.getItem(QR_KEY);
    return saved ? JSON.parse(saved) : null;
  } catch {
    return null;
  }
};

export const uploadPaymentQRCode = async (file: File, adminUid: string): Promise<PaymentQr> => {
  if (!auth.currentUser) {
    throw new Error('You must be signed in to upload a payment QR image.');
  }

  const payload: PaymentQr = {
    imageUrl: await fileToBase64(file),
    paymentMethod: 'hbl_bank',
    updatedAt: new Date().toISOString(),
    updatedBy: adminUid,
  };

  localStorage.setItem(QR_KEY, JSON.stringify(payload));
  return payload;
};
