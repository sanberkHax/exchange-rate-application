import { Navigate } from 'react-router-dom';
import { storage } from '@/utils/storage';
import { useAuth } from '@/hooks/useAuth';
import { useEffect } from 'react';
import { toast } from 'react-toastify';

export const ProtectedRoute = ({ children }) => {
  const token = storage.getToken();
  const expirationDate = storage.getExpirationDate();

  const initialDate = new Date();

  const isExpired = initialDate > expirationDate;

  const auth = useAuth();

  useEffect(() => {
    if (isExpired) {
      auth.logout();
      toast.error('Session expired. Please login again.');
    }
  }, [auth, isExpired]);

  if (!token || isExpired) {
    return <Navigate to="/login" replace />;
  }

  return children;
};
