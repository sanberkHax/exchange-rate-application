import { describe, expect, it } from 'vitest';

import { render, screen } from '@/utils/test-utils';

import { ExchangeRateCalculator } from '@/components/ExchangeRateCalculator';
import userEvent from '@testing-library/user-event';
import { EXCHANGE_RATES } from '@/constants/DummyResponse';
describe('ExchangeRateCalculator', () => {
  it('renders properly', () => {
    render(<ExchangeRateCalculator exchangeRates={EXCHANGE_RATES} />);

    expect(screen.getByText(/Calculate/i)).toBeInTheDocument();
  });

  it('calculates 1.00 TRY to USD', async () => {
    render(<ExchangeRateCalculator exchangeRates={EXCHANGE_RATES} />);

    const user = userEvent.setup();

    const calculateButton = screen.getByText(/Calculate/i);

    await user.click(calculateButton);

    expect(
      await screen.findByText(/1.00 TRY equals 0.04 USD/i),
    ).toBeInTheDocument();
  });
  it('renders combobox values with corresponding country flags', async () => {
    render(<ExchangeRateCalculator exchangeRates={EXCHANGE_RATES} />);

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
    render(<ExchangeRateCalculator exchangeRates={EXCHANGE_RATES} />);

    const user = userEvent.setup();

    const calculateButton = screen.getByText(/Calculate/i);

    await user.click(calculateButton);

    expect(
      await screen.findByText(/1.00 TRY equals 0.04 USD/i),
    ).toBeInTheDocument();

    const switchButton = screen.getByText(/Switch/i);

    await user.click(switchButton);

    expect(
      await screen.findByText(/1.00 USD equals 26.06 TRY/i),
    ).toBeInTheDocument();
  });
});
