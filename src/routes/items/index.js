const express = require('express')
const router = express.Router()
const item = require('./middlewares')

// GET item list
router.get('/', item.getAll)

module.exports = router
