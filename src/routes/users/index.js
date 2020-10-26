const express = require('express')
const router = express.Router()
const user = require('./middlewares')

/* GET users listing. */
router.get('/', user.getAll)

module.exports = router
