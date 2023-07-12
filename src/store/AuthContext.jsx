import { createContext, useEffect, useState } from 'react';
import { storage } from '@/utils/storage';
import { toast } from 'react-toastify';
import { authentication } from '@/api/authentication';

export const AuthContext = createContext({});

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const token = storage.getToken();

    if (token) {
      setUser(token);
    }
  }, []);

  const login = async values => {
    try {
      setLoading(true);

      const response = await authentication(values);

      if (response) {
        storage.setToken(response.access_token);

        const currentDate = new Date();

        const expirationTimeInSeconds = response.expires_in;
        const expirationTimeInMilliseconds = expirationTimeInSeconds * 1000;

        const expirationDate = new Date(
          currentDate.valueOf() + expirationTimeInMilliseconds,
        );

        storage.setExpirationDate(expirationDate);

        setUser(response.access_token);

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
    storage.clearExpirationDate();
  };

  return (
    <AuthContext.Provider value={{ user, login, logout, loading }}>
      {children}
    </AuthContext.Provider>
  );
};
