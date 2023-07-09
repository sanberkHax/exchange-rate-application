import React from 'react';
import ReactDOM from 'react-dom/client';
import App from '@/App.jsx';
import { AppProviders } from './providers';
import '@progress/kendo-theme-default/dist/all.css';
import 'react-toastify/dist/ReactToastify.css';
import '@/index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AppProviders>
      <App />
    </AppProviders>
  </React.StrictMode>,
);
