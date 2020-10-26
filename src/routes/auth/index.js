const express = require('express')
const router = express.Router()
const auth = require('./middlewares')

// GET authenticated user data
// router.get(
//   '/profile',
//   auth.isAuthenticated,
//   auth.isAuthorized,
//   auth.getAuthenticatedUser
// )

// Register new user
router.post(
  '/register',
  auth.isEmailRegistered,
  auth.isUsernameRegistered,
  auth.registerNewUser
)

// User Login
router.post(
  '/login',
  auth.isEmailRegistered,
  auth.isPasswordCorrect,
  auth.authenticateUser
)

// User logout
// router.post('/logout', auth.isAuthenticated, auth.deauthenticateUser)

module.exports = router
