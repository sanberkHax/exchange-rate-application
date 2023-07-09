import { describe, expect, it } from 'vitest';

import { render, screen } from '@/utils/test-utils';

import { LoginForm } from '@/components/LoginForm';
import userEvent from '@testing-library/user-event';
describe('LoginForm', () => {
  it('renders login form', () => {
    render(<LoginForm />);

    expect(screen.getByText('Username')).toBeInTheDocument();
  });

  it('shows validation errors', async () => {
    render(<LoginForm />);

    const user = userEvent.setup();

    const loginButton = screen.getByText(/Login/i);

    await user.click(loginButton);

    expect(
      await screen.findByText(/Please enter a username/i),
    ).toBeInTheDocument();

    expect(
      await screen.findByText(/Please enter a password/i),
    ).toBeInTheDocument();
  });

  it('fills test credentials', async () => {
    render(<LoginForm />);

    const user = userEvent.setup();

    const fillButton = screen.getByText(/Fill Test Credentials/i);

    await user.click(fillButton);

    expect(
      await screen.findByDisplayValue(/webapi@demosirketi/i),
    ).toBeInTheDocument();

    expect(
      screen.queryByText(/Please enter a username/i),
    ).not.toBeInTheDocument();
  });
});
