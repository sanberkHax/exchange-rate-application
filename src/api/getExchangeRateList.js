import { EXCHANGE_RATES } from '@/constants/EXCHANGE_RATES';

// Fake exchange rate service with 1.5s delay

export const getExchangeRateList = () =>
  new Promise(resolve => {
    setTimeout(() => {
      resolve(EXCHANGE_RATES);
    }, 1500);
  });
