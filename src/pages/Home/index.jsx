import { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import { AuthContext } from '../../store/AuthContext';

const Home = () => {
  const { isLoggedIn } = useContext(AuthContext);
  return (
    <>
      {isLoggedIn ? (
        <div className="flex flex-col gap-10 justify-center items-center text-center">
          <h1 className="text-black font-bold text-3xl">Home</h1>
        </div>
      ) : (
        <Navigate to="/login" />
      )}
    </>
  );
};

export default Home;
