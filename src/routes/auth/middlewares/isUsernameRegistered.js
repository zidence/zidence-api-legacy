const models = require('../../../models')
const User = models.User

module.exports = async (req, res, next) => {
  const username = req.body.username

  const result = await User.findAll({ where: { username: username } })

  if (result.length === 0) {
    req.isUsernameRegistered = false
    next()
  } else {
    req.isUsernameRegistered = true
    next()
  }
}
