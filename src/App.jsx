import { Route, Routes } from 'react-router-dom';
import { lazy } from 'react';
import Login from '@/pages/Login';
import { Layout } from '@/components/Layout';
import { ProtectedRoute } from '@/routes/ProtectedRoute';

// Lazy load pages to improve performance
const Home = lazy(() => import('@/pages/Home'));
const NotFound = lazy(() => import('@/pages/NotFound'));

const App = () => {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route
          path="/"
          element={
            <ProtectedRoute>
              <Home />
            </ProtectedRoute>
          }
        />
        <Route path="/login" element={<Login />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
};

export default App;
