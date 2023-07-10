import { EXCHANGE_RATES } from '@/constants/DummyResponse';

export const getExchangeRateList = () =>
  new Promise(resolve => {
    setTimeout(() => {
      resolve(EXCHANGE_RATES);
    }, 1500);
  });
