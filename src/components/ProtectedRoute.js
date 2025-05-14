import React from 'react';
import { useMemberstack } from '@memberstack/react';
import { Navigate } from 'react-router-dom';

function ProtectedRoute({ children }) {
  const { member } = useMemberstack();
  
  if (!member) {
    return <Navigate to="/" replace />;
  }
  
  return children;
}

export default ProtectedRoute;