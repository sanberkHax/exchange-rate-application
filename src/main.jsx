import React, { lazy, Suspense } from 'react';
import ReactDOM from 'react-dom/client';
import App from '@/App.jsx';
import '@progress/kendo-theme-default/dist/all.css';
import 'react-toastify/dist/ReactToastify.css';
import '@/index.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Login from './pages/Login';
import { AuthProvider } from './store/AuthContext';
import { ErrorBoundary } from 'react-error-boundary';

const Home = lazy(() => import('./pages/Home'));
const NotFound = lazy(() => import('./pages/NotFound'));

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      { path: 'login', element: <Login /> },
      { path: '*', element: <NotFound /> },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <ErrorBoundary
        fallback={
          <div
            className="text-red-500 w-screen h-screen flex flex-col justify-center items-center gap-4"
            role="alert"
          >
            <h2 className="text-lg font-semibold">
              {`Ooops, something went wrong :(`}
            </h2>
            <button
              className=" bg-red-500 p-4 text-white"
              onClick={() => window.location.assign(window.location.origin)}
            >
              Refresh
            </button>
          </div>
        }
      >
        <Suspense
          fallback={
            <div className="h-full w-full flex items-center justify-center">
              <p>Loading...</p>
            </div>
          }
        >
          <RouterProvider router={router} />
        </Suspense>
      </ErrorBoundary>
    </AuthProvider>
  </React.StrictMode>,
);
