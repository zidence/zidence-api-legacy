const jwt = require('jsonwebtoken')

module.exports = (req, res, next) => {
  try {
    const accessToken = req.headers.authorization.split(' ')[1]
    req.accessToken = accessToken
  } catch (error) {
    res
      .status(401)
      .send({ message: 'Token is not provided', error: error.toString() })
  }

  try {
    const decodedAccessToken = jwt.verify(
      req.accessToken,
      process.env.SECRET_KEY
    )
    req.decodedAccessToken = decodedAccessToken
    next()
  } catch (error) {
    res.status(500).send({
      message: 'Error verifying access token',
      error: error.toString(),
    })
  }
}
