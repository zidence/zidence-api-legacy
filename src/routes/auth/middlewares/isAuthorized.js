const models = require('../../../models')
const User = models.User

module.exports = async (req, res, next) => {
  const username = req.params.username
  const user = await User.findByPk(+req.decodedAccessToken.id)

  if (username === user.username) {
    req.isAuthorized = true
    req.authorizedUser = user
    next()
  } else {
    req.isAuthorized = false
    next()
  }
}
