import { EXCHANGE_RATES } from '@/constants/EXCHANGE_RATES';

export const getExchangeRateList = () =>
  new Promise(resolve => {
    setTimeout(() => {
      resolve(EXCHANGE_RATES);
    }, 1500);
  });
