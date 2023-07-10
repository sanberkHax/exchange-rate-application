import { createContext, useState } from 'react';
import { storage } from '@/utils/storage';
import { toast } from 'react-toastify';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(false);

  const authenticate = credentials => {
    console.log(credentials);
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (
          credentials.username !== 'webapi@demosirketi' ||
          credentials.password !== 'Magnimore123.'
        ) {
          reject('Credentials are not valid');
        } else {
          resolve('dummy_token');
        }
      }, 1500);
    });
  };

  const login = async values => {
    try {
      setLoading(true);

      const response = await authenticate(values);

      if (response) {
        storage.setToken(response);
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
    <AuthContext.Provider value={{ user, login, logout, loading, setUser }}>
      {children}
    </AuthContext.Provider>
  );
};
