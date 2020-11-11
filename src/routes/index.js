const express = require('express')
const router = express.Router()

/* GET home page. */
router.get('/', (req, res) => {
  res.status(200).send({ message: 'Zidence API' })
})

module.exports = router
