import React, { lazy } from 'react';
import ReactDOM from 'react-dom/client';
import App from '@/App.jsx';
import '@progress/kendo-theme-default/dist/all.css';
import 'react-toastify/dist/ReactToastify.css';
import '@/index.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Login from './pages/Login';

const Home = lazy(() => import('./pages/Home'));

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
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);
