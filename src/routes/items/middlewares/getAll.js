const models = require('../../../models')
const Item = models.Item

module.exports = async (req, res) => {
  try {
    const items = await Item.findAll()
    res.status(200).send({ message: 'List of items', data: items })
  } catch (error) {
    res.status(503).send({ message: 'Database error', error: error.toString() })
  }
}
