// src/environments/environment.ts
export const environment = {
  production: true,
  cognito: {
    clientId: '7nb439s4gah8m4j7frd0diqk0i',
    // domain: 'testerino.auth.us-east-2.amazoncognito.com',
    domain: 'socialgaming.auth.us-east-2.amazoncognito.com',
    redirectUri: 'http://localhost:4200'//,
    //logoutUri: 'http://localhost:4200'
  },
  imageBaseUrl: '/assets/playerCard/'
};
