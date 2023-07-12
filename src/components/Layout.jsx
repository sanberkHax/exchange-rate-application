import { Header } from './Header';
import { Outlet } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import { useAuth } from '@/hooks/useAuth';
import { Footer } from './Footer';

export const Layout = () => {
  const auth = useAuth();

  return (
    <>
      {auth.user && <Header />}
      <main className="min-h-[calc(100vh-110px)] flex flex-col items-center p-4 sm:p-10 gap-10">
        <Outlet />
      </main>
      {auth.user && <Footer />}
      <ToastContainer
        position="top-left"
        pauseOnFocusLoss={false}
        autoClose={2000}
        hideProgressBar
        theme="colored"
        pauseOnHover={false}
      />
    </>
  );
};
