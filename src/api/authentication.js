import api from '../lib/axios';

export const authentication = async credentials => {
  const response = await api.post(
    'token',
    { grant_type: 'password', ...credentials },
    {
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
    },
  );
  return response;
};
