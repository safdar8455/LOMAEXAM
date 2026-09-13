import React, { createContext, useContext, useEffect, useState } from 'react';
import { auth, setAuthCurrentUser, clearAuthCurrentUser } from './firebase';

export interface UserProfile {
  uid: string;
  phoneNumber: string;
  email: string;
  createdAt: string;
  role: 'admin' | 'student';
}

interface AuthContextType {
  user: UserProfile | null;
  profile: UserProfile | null;
  loading: boolean;
  setRole: (newRole: 'admin' | 'student') => Promise<void>;
  refreshProfile: () => Promise<void>;
}

const CURRENT_USER_KEY = 'loma_current_user';
const USERS_KEY = 'loma_users';

const getStoredUsers = (): UserProfile[] => {
  try {
    const saved = localStorage.getItem(USERS_KEY);
    return saved ? JSON.parse(saved) : [];
  } catch {
    return [];
  }
};

const saveStoredUsers = (users: UserProfile[]) => {
  localStorage.setItem(USERS_KEY, JSON.stringify(users));
};

const seedDefaultAdmin = () => {
  const users = getStoredUsers();
  if (!users.some((user) => user.email === 'safderjamali12@gmail.com')) {
    users.push({
      uid: 'admin-seeded',
      phoneNumber: '+923000000000',
      email: 'safderjamali12@gmail.com',
      createdAt: new Date().toISOString(),
      role: 'admin',
    });
    saveStoredUsers(users);
  }
};

const readCurrentSession = (): UserProfile | null => {
  try {
    const saved = localStorage.getItem(CURRENT_USER_KEY);
    if (!saved) return null;
    const parsed = JSON.parse(saved) as UserProfile;
    return parsed && parsed.uid ? parsed : null;
  } catch {
    return null;
  }
};

const writeCurrentSession = (user: UserProfile) => {
  localStorage.setItem(CURRENT_USER_KEY, JSON.stringify(user));
  setAuthCurrentUser({
    uid: user.uid,
    phoneNumber: user.phoneNumber,
    email: user.email,
    role: user.role,
  });
};

const clearCurrentSession = () => {
  localStorage.removeItem(CURRENT_USER_KEY);
  clearAuthCurrentUser();
};

export const signInLocalUser = (input: {
  uid: string;
  phoneNumber: string;
  email?: string;
  role?: 'admin' | 'student';
}) => {
  const users = getStoredUsers();
  const existingIndex = users.findIndex((user) => user.uid === input.uid);
  const profile: UserProfile = {
    uid: input.uid,
    phoneNumber: input.phoneNumber || '',
    email: input.email || '',
    createdAt: existingIndex >= 0 ? users[existingIndex].createdAt : new Date().toISOString(),
    role: input.role || 'student',
  };

  if (existingIndex >= 0) {
    users[existingIndex] = profile;
  } else {
    users.push(profile);
  }

  saveStoredUsers(users);
  writeCurrentSession(profile);
  window.dispatchEvent(new Event('loma-auth-changed'));
  return profile;
};

export const signOutLocalUser = () => {
  clearCurrentSession();
  window.dispatchEvent(new Event('loma-auth-changed'));
};

const AuthContext = createContext<AuthContextType>({
  user: null,
  profile: null,
  loading: true,
  setRole: async () => {},
  refreshProfile: async () => {},
});

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<UserProfile | null>(null);
  const [profile, setProfile] = useState<UserProfile | null>(null);
  const [loading, setLoading] = useState(true);

  const syncUserState = () => {
    const currentUser = readCurrentSession();
    if (!currentUser) {
      setUser(null);
      setProfile(null);
      setAuthCurrentUser(null);
      setLoading(false);
      return;
    }

    const users = getStoredUsers();
    const stored = users.find((entry) => entry.uid === currentUser.uid) || currentUser;
    const mergedProfile: UserProfile = {
      uid: stored.uid,
      phoneNumber: stored.phoneNumber || currentUser.phoneNumber || '',
      email: stored.email || currentUser.email || '',
      createdAt: stored.createdAt || currentUser.createdAt || new Date().toISOString(),
      role: stored.role || currentUser.role || 'student',
    };

    setUser(mergedProfile);
    setProfile(mergedProfile);
    writeCurrentSession(mergedProfile);
    setAuthCurrentUser({
      uid: mergedProfile.uid,
      phoneNumber: mergedProfile.phoneNumber,
      email: mergedProfile.email,
      role: mergedProfile.role,
    });
    setLoading(false);
  };

  const refreshProfile = async () => {
    syncUserState();
  };

  const setRole = async (newRole: 'admin' | 'student') => {
    if (!user) return;
    const users = getStoredUsers();
    const nextUsers = users.map((entry) =>
      entry.uid === user.uid ? { ...entry, role: newRole } : entry
    );
    saveStoredUsers(nextUsers);

    const nextProfile: UserProfile = { ...user, role: newRole };
    setUser(nextProfile);
    setProfile(nextProfile);
    writeCurrentSession(nextProfile);
  };

  useEffect(() => {
    seedDefaultAdmin();
    syncUserState();

    const onAuthChanged = () => {
      syncUserState();
    };

    window.addEventListener('loma-auth-changed', onAuthChanged);
    return () => window.removeEventListener('loma-auth-changed', onAuthChanged);
  }, []);

  return (
    <AuthContext.Provider value={{ user, profile, loading, setRole, refreshProfile }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
