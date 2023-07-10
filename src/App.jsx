import { Route, Routes, useNavigate } from 'react-router-dom';
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

  const navigate = useNavigate();

  useEffect(() => {
    if (token) {
      auth.setUser(token);
      navigate('/');
    } else {
      auth.logout();
    }
  }, [token, auth, navigate]);

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
