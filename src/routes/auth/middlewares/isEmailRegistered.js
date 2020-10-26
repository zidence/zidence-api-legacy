const models = require('../../../models')
const User = models.User

module.exports = async (req, res, next) => {
  const email = req.body.email

  const result = await User.findOne({ where: { email: email } })

  if (result === null) {
    req.isEmailRegistered = false
    next()
  } else {
    req.isEmailRegistered = true
    req.user = result
    next()
  }
}
