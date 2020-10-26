const jwt = require('jsonwebtoken')

module.exports = async (req, res) => {
  if (!req.isEmailRegistered) {
    res
      .status(400)
      .send({
        message: 'Email is not registered yet',
        data: { email: req.body.email },
      })
  } else {
    const { id, username, email } = req.user
    const payload = {
      id: id,
      username: username,
      email: email,
    }

    const token = jwt.sign(payload, process.env.SECRET_KEY, {
      expiresIn: '3 days',
    })

    res.status(200).send({
      message: 'User successfully authenticated',
      data: { accessToken: token },
    })
  }
}
