import { Button } from '@progress/kendo-react-buttons';
import { storage } from '@/utils/storage';
import { useNavigate } from 'react-router-dom';

export const Layout = ({ children }) => {
  const token = storage.getToken();
  const navigate = useNavigate();

  const handleLogout = () => {
    storage.clearToken();
    navigate('/login');
  };

  return (
    <>
      <main className="h-screen flex flex-col items-center justify-center">
        {token && (
          <header className="w-full flex justify-end p-10 fixed top-0">
            <Button
              className="bg-slate-600 text-white hover:bg-slate-700"
              onClick={handleLogout}
            >
              Logout
            </Button>
          </header>
        )}
        {children}
      </main>
    </>
  );
};
