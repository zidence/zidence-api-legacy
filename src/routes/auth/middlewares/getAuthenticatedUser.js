module.exports = (req, res) => {
  if (!req.isAuthorized) {
    res.status(401).send({
      message: 'Access token do not have authority for the requested username',
    })
  } else {
    const user = req.authorizedUser
    res.status(200).send({ message: 'User data', data: user })
  }
}
