import { Suspense } from 'react';
import { ErrorBoundary } from 'react-error-boundary';
import { BrowserRouter } from 'react-router-dom';
import { AuthProvider } from '@/store/AuthContext';
import { ErrorFallback } from '@/components/ErrorFallback';
import { SuspenseFallback } from '@/components/SuspenseFallback';

export const AppProviders = ({ children }) => {
  return (
    <ErrorBoundary fallback={<ErrorFallback />}>
      <Suspense fallback={<SuspenseFallback />}>
        <AuthProvider>
          <BrowserRouter>{children}</BrowserRouter>
        </AuthProvider>
      </Suspense>
    </ErrorBoundary>
  );
};
