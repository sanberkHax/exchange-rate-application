import api from '../lib/axios';

export const getExchangeRateList = async () => {
  const response = await api.get('cmdtbl/dCompanyExchangeRate');

  return response;
};
