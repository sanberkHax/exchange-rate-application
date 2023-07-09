import { Navigate } from 'react-router-dom';
import { storage } from '@/utils/storage';

const Home = () => {
  const token = storage.getToken();
  return (
    <>
      {token ? (
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
