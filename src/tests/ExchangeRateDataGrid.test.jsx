import { describe, expect, it } from 'vitest';

import { render, screen } from '@/utils/test-utils';

import { ExchangeRateDataGrid } from '@/pages/Home/ExchangeRateDataGrid';
import { EXCHANGE_RATES } from '@/constants/EXCHANGE_RATES';
describe('ExchangeRateDataGrid', () => {
  it('renders properly', () => {
    render(<ExchangeRateDataGrid exchangeRates={EXCHANGE_RATES} />);

    expect(screen.getByText(/26.0616/i)).toBeInTheDocument();
  });
});
