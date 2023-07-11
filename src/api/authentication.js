// Fake authentication service with 1.5s delay

export const authentication = credentials => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      // Simulate service validation for credentials
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
