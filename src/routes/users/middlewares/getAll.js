const models = require('../../../models')
const User = models.User

module.exports = async (req, res) => {
  const users = await User.findAll({
    attributes: ['username', 'email', 'createdAt'],
  })

  res.status(200).send({ message: 'List of Zidence Users', data: users })
}
