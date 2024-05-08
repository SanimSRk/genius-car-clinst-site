import React, { useContext } from 'react';
import { AuthContext } from '../AuthProvider/AuthProvider';
import { Navigate, useLocation } from 'react-router-dom';

const PrivtedRout = ({ children }) => {
  const { user, lodings } = useContext(AuthContext);
  const location = useLocation();
  if (lodings) {
    return <span className="loading loading-spinner loading-lg"></span>;
  }
  if (!user) {
    return <Navigate state={location.pathname} to={'/login'}></Navigate>;
  }
  return <div>{children}</div>;
};

export default PrivtedRout;
