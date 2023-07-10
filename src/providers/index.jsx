import { Suspense } from 'react';
import { ErrorBoundary } from 'react-error-boundary';
import { BrowserRouter } from 'react-router-dom';
import { AuthProvider } from '@/store/AuthContext';
import { ErrorFallback } from '@/components/ErrorFallback';
import { Loader } from '@progress/kendo-react-indicators';
import { HelmetProvider } from 'react-helmet-async';

export const AppProviders = ({ children }) => {
  return (
    <ErrorBoundary fallback={<ErrorFallback />}>
      <Suspense
        fallback={
          <Loader
            size="large"
            type="pulsing"
            themeColor="info"
            className="m-auto"
          />
        }
      >
        <AuthProvider>
          <HelmetProvider>
            <BrowserRouter>{children}</BrowserRouter>
          </HelmetProvider>
        </AuthProvider>
      </Suspense>
    </ErrorBoundary>
  );
};
