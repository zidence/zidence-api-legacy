const express = require('express')
const router = express.Router()
const item = require('./middlewares')
const auth = require('./../auth/middlewares')

// GET item list
router.get('/', auth.isApiKeyMatched, item.getAll)

// POST items
router.post('/', auth.isApiKeyMatched, item.addItems)

module.exports = router
