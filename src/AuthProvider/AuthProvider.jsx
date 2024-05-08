import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
  updateCurrentUser,
} from 'firebase/auth';
import { createContext, useEffect, useState } from 'react';
import auth from '../Firebase/Firebase.init';
import axios from 'axios';

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
      const currentUserEmail = currentUsers?.email || user.email;
      const userEmail = { email: currentUserEmail };
      if (currentUsers) {
        setUser(currentUsers);
        setLodings(false);

        axios
          .post('http://localhost:5000/jwt', userEmail, {
            withCredentials: true,
          })
          .then(res => {
            console.log(res.data);
          });
      } else {
        setLodings(false);
        axios
          .post('http://localhost:5000/logout', userEmail, {
            withCredentials: true,
          })
          .then(res => {
            console.log(res.data);
          });
      }
    });
    return () => unsubscribe;
  }, []);
  const info = {
    createUser,
    lodings,
    user,
    singUsers,
    updateUserProfile,
    logOutUsers,
  };
  return <AuthContext.Provider value={info}>{children}</AuthContext.Provider>;
};

export default AuthProvider;
