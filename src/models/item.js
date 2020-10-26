'use strict'
module.exports = (sequelize, DataTypes) => {
  const Item = sequelize.define(
    'Item',
    {
      name: DataTypes.STRING,
      userId: DataTypes.INTEGER,
    },
    { underscored: true }
  )
  Item.associate = function (models) {
    // associations can be defined here
    Item.belongsTo(models.User)
  }
  return Item
}
