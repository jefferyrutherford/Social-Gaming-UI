// src/environments/environment.ts
export const environment = {
  production: false,
  cognito: {
    clientId: '5ruerc3fsvcck8e1jipodje6r4',
    domain: 'testerino.auth.us-east-2.amazoncognito.com',
    redirectUri: 'http://localhost:4200/login'//,
    //logoutUri: 'http://localhost:4200'
  },
  imageBaseUrl: '/assets/playerCard/'
};
