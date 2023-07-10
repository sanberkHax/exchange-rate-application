export const authentication = credentials => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (
        credentials.username !== 'webapi@demosirketi' ||
        credentials.password !== 'Magnimore123.'
      ) {
        reject('Credentials are not valid');
      } else {
        resolve('dummy_token');
      }
    }, 1500);
  });
};
