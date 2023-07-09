import { Outlet } from 'react-router';
import { Layout } from './components/Layout';
import { ToastContainer } from 'react-toastify';

function App() {
  return (
    <>
      <Layout>
        <Outlet />
      </Layout>
      <ToastContainer
        position="top-left"
        pauseOnFocusLoss={false}
        autoClose={2000}
        hideProgressBar
        pauseOnHover={false}
      />
    </>
  );
}

export default App;
