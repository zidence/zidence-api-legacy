module.exports = (req, res, next) => {
  const xApiKey = req.get('X-API-Key')
  const isApiKeyMatched = xApiKey === process.env.API_KEY

  if (isApiKeyMatched) {
    next()
  } else {
    res
      .status(401)
      .send({
        message: 'Unauthorized access',
        error: 'User must provide correct API key',
      })
  }
}
