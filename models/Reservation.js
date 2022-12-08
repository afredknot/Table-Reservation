const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Reservation extends Model {}

Reservation.init(
  {
    reservation_id: {
      type: DataTypes.STRING,
      allowNull: false,
      primaryKey: true,
    },
    restaurant_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    user_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    dining_table_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    date_time: {
      type: DataTypes.DATETIME,
      allowNull: false,
    },
  },
  {
    sequelize,
    freezeTableName: true,
    underscored: true,
    modelName: 'reservation',
  }
);

module.exports = Reservation;
