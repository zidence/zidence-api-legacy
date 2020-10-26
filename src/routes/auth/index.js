const express = require('express')
const router = express.Router()
const auth = require('./middlewares')

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
router.post('/logout', auth.isAuthenticated, auth.deauthenticateUser)

// GET authenticated user data
router.get(
  '/:username',
  auth.isAuthenticated,
  auth.isAuthorized,
  auth.getAuthenticatedUser
)

module.exports = router
