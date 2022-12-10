const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class DiningTable extends Model {}

DiningTable.init(
  {
    dining_table_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement:true,
    },
    restaurant_table_ref: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    restaurant_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      // references: {
      //   model: 'restaurant',
      //   key: 'restaurant_id',
      // },
    },
    num_seats: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  },
  {
    sequelize,
    freezeTableName: true,
    underscored: true,
    modelName: 'dining_table',
  }
);

module.exports = DiningTable;
