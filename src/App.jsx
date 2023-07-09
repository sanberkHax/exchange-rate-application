import { Route, Routes } from 'react-router-dom';
import { lazy, useEffect } from 'react';

import { ProtectedRoute } from '@/routes/ProtectedRoute';
import Login from '@/pages/Login';
import { Layout } from '@/components/Layout';
import { useAuth } from '@/hooks/useAuth';
import { storage } from '@/utils/storage';

const Home = lazy(() => import('@/pages/Home'));
const NotFound = lazy(() => import('@/pages/NotFound'));

const App = () => {
  const auth = useAuth();
  const token = storage.getToken();

  useEffect(() => {
    if (token) {
      auth.login();
    } else {
      auth.logout();
    }
  }, [token, auth]);

  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/login" element={<Login />} />
        <Route
          path="/"
          element={
            <ProtectedRoute>
              <Home />
            </ProtectedRoute>
          }
        />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
};

export default App;
