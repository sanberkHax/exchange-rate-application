import { render as rtlRender } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import { AuthProvider } from '../store/AuthContext';

function render(ui) {
  function Wrapper({ children }) {
    return (
      <AuthProvider>
        <MemoryRouter>{children}</MemoryRouter>
        <ToastContainer />
      </AuthProvider>
    );
  }
  return rtlRender(ui, { wrapper: Wrapper });
}

// re-export everything
export * from '@testing-library/react';

// override render method
export { render };
