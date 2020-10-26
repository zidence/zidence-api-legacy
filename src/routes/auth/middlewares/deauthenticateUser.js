module.exports = (req, res) => {
  const { username } = req.decodedAccessToken

  res
    .status(200)
    .send({
      message: 'User is successfully logged out',
      data: { username: username },
    })
}
