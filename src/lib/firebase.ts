import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import firebaseConfig from '../../firebase-applet-config.json';

// Check if Firebase config has valid credentials
export const hasValidConfig = !!(
  firebaseConfig?.apiKey &&
  firebaseConfig?.projectId &&
  firebaseConfig?.authDomain &&
  firebaseConfig?.apiKey !== 'DEMO_API_KEY'
);

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app, firebaseConfig.firestoreDatabaseId);
export const auth = getAuth(app);
