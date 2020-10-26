const models = require('../../../models')
const User = models.User

module.exports = async (req, res, next) => {
  const email = req.body.email

  const result = await User.findAll({ where: { email: email } })

  if (result.length === 0) {
    req.isEmailRegistered = false
    next()
  } else {
    req.isEmailRegistered = true
    next()
  }
}
