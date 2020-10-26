module.exports = {
  authenticateUser: require('./authenticateUser'),
  deauthenticateUser: null,
  getAuthenticatedUser: null,
  isAuthenticated: null,
  isAuthorized: null,
  isPasswordCorrect: require('./isPasswordCorrect'),
  isEmailRegistered: require('./isEmailRegistered'),
  isUsernameRegistered: require('./isUsernameRegistered'),
  registerNewUser: require('./registerNewUser'),
  isApiKeyMatched: null,
}
