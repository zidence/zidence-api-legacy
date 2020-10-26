const bcrypt = require('bcrypt')

module.exports = async (req, res, next) => {
  if (!req.isEmailRegistered) {
    next()
  } else {
    const password = req.body.password
    const hash = req.user.hash
    try {
      const match = await bcrypt.compare(password, hash)

      if (match) {
        next()
      } else {
        res.status(401).send({ message: 'Wrong Password' })
      }
    } catch (error) {
      res
        .status(500)
        .send({
          message: 'Error comparing password hash',
          error: error.toString(),
        })
    }
  }
}
