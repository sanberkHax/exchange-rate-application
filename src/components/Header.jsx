import { Button } from '@progress/kendo-react-buttons';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '@/hooks/useAuth';

export const Header = () => {
  const navigate = useNavigate();

  const auth = useAuth();

  const handleLogout = () => {
    auth.logout();
    navigate('/login');
  };

  return (
    <header className="w-full flex justify-between p-10 fixed top-0">
      <Link to="/" className="text-black font-bold text-xl cursor-pointer">
        Exchange Rate Application
      </Link>

      <Button
        className="bg-slate-600 text-white hover:bg-slate-700"
        onClick={handleLogout}
      >
        Logout
      </Button>
    </header>
  );
};
