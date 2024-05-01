import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
  updateCurrentUser,
} from 'firebase/auth';
import { createContext, useEffect, useState } from 'react';
import auth from '../Firebase/Firebase.init';

export const AuthContext = createContext(null);
const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [lodings, setLodings] = useState(true);

  const createUser = (email, password) => {
    setLodings(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const updateUserProfile = fullName => {
    updateCurrentUser(auth.currentUser, {
      displayName: fullName,
    });
  };
  const singUsers = (email, password) => {
    setLodings(true);
    return signInWithEmailAndPassword(auth, email, password);
  };
  const logOutUsers = () => {
    setUser(null);
    setLodings(false);
    signOut(auth);
  };
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, currentUsers => {
      if (currentUsers) {
        setUser(currentUsers);
        setLodings(false);
      } else {
        setLodings(false);
      }
    });
    return () => unsubscribe;
  }, []);
  const info = { createUser, singUsers, updateUserProfile };
  return <AuthContext.Provider value={info}>{children}</AuthContext.Provider>;
};

export default AuthProvider;
