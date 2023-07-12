import { describe, expect, it } from 'vitest';

import { render, screen } from '@/utils/test-utils';

import { CurrencyCalculator } from '@/pages/Home/CurrencyCalculator';
import userEvent from '@testing-library/user-event';
import { EXCHANGE_RATES } from '@/constants/EXCHANGE_RATES';
describe('CurrencyCalculator', () => {
  it('renders properly', () => {
    render(<CurrencyCalculator exchangeRates={EXCHANGE_RATES} />);

    expect(screen.getByText(/Calculate/i)).toBeInTheDocument();
  });

  it('calculates 1.00 TRY to USD', async () => {
    render(<CurrencyCalculator exchangeRates={EXCHANGE_RATES} />);

    const user = userEvent.setup();

    const calculateButton = screen.getByText(/Calculate/i);

    await user.click(calculateButton);

    expect(await screen.findByText(/1.00 TRY/i)).toBeInTheDocument();
    expect(await screen.findByText(/0.04 USD/i)).toBeInTheDocument();
  });
  it('renders combobox values with corresponding country flags', async () => {
    render(<CurrencyCalculator exchangeRates={EXCHANGE_RATES} />);

    const fromInput = screen.getByDisplayValue(/TRY/i);
    const fromFlag = screen.getByTitle(/TR/);

    const toInput = screen.getByDisplayValue(/USD/i);
    const toFlag = screen.getByTitle(/US/);

    expect(fromInput).toBeInTheDocument();
    expect(fromFlag).toBeInTheDocument();
    expect(toInput).toBeInTheDocument();
    expect(toFlag).toBeInTheDocument();
  });
  it('switches currency values and updates the result', async () => {
    render(<CurrencyCalculator exchangeRates={EXCHANGE_RATES} />);

    const user = userEvent.setup();

    const calculateButton = screen.getByText(/Calculate/i);

    await user.click(calculateButton);

    expect(await screen.findByText(/1.00 TRY/i)).toBeInTheDocument();
    expect(await screen.findByText(/0.04 USD/i)).toBeInTheDocument();

    const switchButton = screen.getByText(/Switch/i);

    await user.click(switchButton);

    expect(await screen.findByText(/1.00 USD/i)).toBeInTheDocument();
    expect(await screen.findByText(/26.06 TRY/i)).toBeInTheDocument();
  });
});
