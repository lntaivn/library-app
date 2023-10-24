export const oktaConfig = {
    clientId: '0oac5ky4pfWbJ0tME5d7',
    issuer: 'https://dev-33726664.okta.com/oauth2/default',
    redirectUri: 'http://localhost:3000/login/callback',
    scopes: ['openid', 'profile', 'email'],
    pkce: true,
    disableHttpsCheck: true,
}