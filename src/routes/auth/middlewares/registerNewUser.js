const models = require('../../../models')
const User = models.User
const bcrypt = require('bcrypt')

module.exports = async (req, res) => {
  const { username, email, password } = req.body

  if (req.isEmailRegistered) {
    res
      .status(409)
      .send({ message: 'Email already registered', data: { email: email } })
  } else if (req.isUsernameRegistered) {
    res
      .status(409)
      .send({ message: 'Username already taken', data: { username: username } })
  } else {
    const saltRounds = 11
    const hash = await bcrypt.hash(password, saltRounds)

    const newUser = {
      username: username,
      email: email,
      hash: hash,
    }

    await User.create(newUser)

    res.status(200).send({
      message: 'User successfully registered',
      data: { username: username, email: email },
    })
  }
}
