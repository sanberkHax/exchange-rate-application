import { render as rtlRender } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { AuthProvider } from '../store/AuthContext';
import { HelmetProvider } from 'react-helmet-async';

function render(ui) {
  function Wrapper({ children }) {
    return (
      <AuthProvider>
        <HelmetProvider>
          <MemoryRouter>{children}</MemoryRouter>
        </HelmetProvider>
      </AuthProvider>
    );
  }
  return rtlRender(ui, { wrapper: Wrapper });
}

// re-export everything
export * from '@testing-library/react';

// override render method
export { render };
