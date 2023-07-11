import { createContext, useEffect, useState } from 'react';
import { storage } from '@/utils/storage';
import { toast } from 'react-toastify';
import { authentication } from '@/api/authentication';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(false);

  const token = storage.getToken();

  useEffect(() => {
    if (token) {
      setUser(token);
    } else {
      setUser(null);
    }
  }, [token]);

  const login = async values => {
    try {
      setLoading(true);

      const response = await authentication(values);

      if (response) {
        storage.setToken(response);

        setUser(response);

        toast.success('Login succesfull');
      }
    } catch (err) {
      toast.error(err);
    } finally {
      setLoading(false);
    }
  };

  const logout = () => {
    setUser(null);
    storage.clearToken();
  };

  return (
    <AuthContext.Provider value={{ user, login, logout, loading }}>
      {children}
    </AuthContext.Provider>
  );
};
