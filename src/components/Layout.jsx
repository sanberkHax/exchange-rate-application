import { Header } from './Header';
import { useContext } from 'react';
import { AuthContext } from '../store/AuthContext';

export const Layout = ({ children }) => {
  const { isLoggedIn } = useContext(AuthContext);

  return (
    <>
      <main className="h-screen flex flex-col items-center justify-center">
        {isLoggedIn && <Header />}
        {children}
      </main>
    </>
  );
};
