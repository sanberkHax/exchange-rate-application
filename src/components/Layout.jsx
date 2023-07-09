import { Header } from './Header';
import { Outlet } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import { useAuth } from '@/hooks/useAuth';

export const Layout = () => {
  const auth = useAuth();

  return (
    <>
      <main className="h-screen flex flex-col items-center justify-center">
        {auth.isLoggedIn && <Header />}
        <Outlet />
        <ToastContainer
          position="top-left"
          pauseOnFocusLoss={false}
          autoClose={2000}
          hideProgressBar
          pauseOnHover={false}
        />
      </main>
    </>
  );
};
