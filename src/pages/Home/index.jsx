import { Navigate } from 'react-router-dom';

const Home = () => {
  const user = false;
  return (
    <>
      {user ? (
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
