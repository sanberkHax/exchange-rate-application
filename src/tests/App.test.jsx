import { beforeEach, describe, expect, it } from 'vitest';
import { render, screen } from '@/utils/test-utils';
import App from '@/App';
import userEvent from '@testing-library/user-event';
import { storage } from '@/utils/storage';
import { waitFor } from '@testing-library/react';

describe('App', () => {
  beforeEach(() => {
    storage.clearToken();
  });

  it('renders login page initially without header', () => {
    render(<App />);

    expect(screen.getByText(/Login/i)).toBeInTheDocument();
    expect(screen.queryByText(/Logout/i)).not.toBeInTheDocument();
  });
  it('renders home page if there is already a token', async () => {
    storage.setToken('test_token');

    render(<App />);

    expect(await screen.findByText(/Logout/i)).toBeInTheDocument();
  });
  it('logins and navigates to home page', async () => {
    render(<App />);

    const user = userEvent.setup();

    const fillButton = screen.getByText(/Click to auto fill/i);

    const loginButton = screen.getByText(/Login/i);

    await user.click(fillButton);

    await user.click(loginButton);

    await waitFor(() => expect(window.location.href).not.toContain('/login'));
  });
  it('logs out', async () => {
    storage.setToken('test_token');
    render(<App />);

    const user = userEvent.setup();

    const logoutButton = await screen.findByText(/Logout/i);

    await user.click(logoutButton);

    expect(logoutButton).not.toBeInTheDocument();
  });
});
