export const hasValidConfig = false;

export const auth: { currentUser: any } = {
  currentUser: null,
};

export const db = null;
export const storage = null;

export const setAuthCurrentUser = (user: any | null) => {
  auth.currentUser = user;
};

export const clearAuthCurrentUser = () => {
  auth.currentUser = null;
};
