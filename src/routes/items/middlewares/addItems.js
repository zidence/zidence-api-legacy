const { Item } = require('../../../models')

module.exports = async (req, res) => {
  const newItems = req.body.items

  try {
    const result = await Item.bulkCreate(newItems)
    res
      .status(200)
      .send({ message: 'Items successfully added', data: { items: result } })
  } catch (error) {
    res.status(503).send({ message: 'Database error', error: error.toString() })
  }
}
