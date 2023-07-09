import { createContext, useState } from 'react';
import { storage } from '@/utils/storage';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const login = () => {
    setIsLoggedIn(true);
    storage.setToken('dummy_token');
  };
  const logout = () => {
    setIsLoggedIn(false);
    storage.clearToken();
  };

  return (
    <AuthContext.Provider value={{ isLoggedIn, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
