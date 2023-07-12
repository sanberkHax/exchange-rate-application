export const storage = {
  getToken: () => {
    return JSON.parse(window.localStorage.getItem('token'));
  },
  setToken: token => {
    window.localStorage.setItem('token', JSON.stringify(token));
  },

  clearToken: () => {
    window.localStorage.removeItem('token');
  },
  getExpirationDate: () => {
    const parsedDate = new Date(
      Date.parse(JSON.parse(window.localStorage.getItem('expiration_date'))),
    );
    return parsedDate;
  },
  setExpirationDate: expirationDate => {
    window.localStorage.setItem(
      'expiration_date',
      JSON.stringify(expirationDate),
    );
  },
  clearExpirationDate: () => {
    window.localStorage.removeItem('expiration_date');
  },
};
