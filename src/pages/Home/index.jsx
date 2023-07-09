import { Navigate } from 'react-router-dom';
import { storage } from '@/utils/storage';

const Home = () => {
  const token = storage.getToken();
  return (
    <>
      {token ? (
        <div>
          <h1>Home</h1>
        </div>
      ) : (
        <Navigate to="/login" />
      )}
    </>
  );
};

export default Home;
