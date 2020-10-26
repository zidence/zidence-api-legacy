module.exports = {
  authenticateUser: null,
  deauthenticateUser: null,
  getAuthenticatedUser: null,
  isAuthenticated: null,
  isAuthorized: null,
  isPasswordCorrect: null,
  isEmailRegistered: require('./isEmailRegistered'),
  isUsernameRegistered: require('./isUsernameRegistered'),
  registerNewUser: require('./registerNewUser'),
  isApiKeyMatched: null,
}
