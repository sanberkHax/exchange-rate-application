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
    <header className="w-full flex justify-between p-4 sm:p-10">
      <Link
        to="/"
        className="text-primary text-center font-bold sm:text-xl cursor-pointer"
      >
        Exchange Rate Application
      </Link>

      <Button themeColor="info" onClick={handleLogout}>
        Logout
      </Button>
    </header>
  );
};
