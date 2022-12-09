const User = require('./User');
const DiningTable = require('./DiningTable');
const Restaurant = require('./Restaurant');
const Reservation = require('./Reservation');

User.hasMany(Reservation, {
  foreignKey: 'user_id',
});

Reservation.belongsTo(User, {
  foreignKey: 'user_id',
});

Restaurant.hasMany(DiningTable, {
  foreignKey: 'restaurant_id',
  onDelete: 'CASCADE',
});

DiningTable.belongsTo(Restaurant, {
  foreignKey: 'restaurant_id',
});

DiningTable.hasMany(Reservation, {
  foreignKey: 'reservation_id',
});

Reservation.belongsTo(DiningTable, {
  foreignKey: 'reservation_id',
});

Restaurant.belongsTo(Reservation, {
  through: {
    model: DiningTable,
    unique: false
  },
  as: 'restaurant_reservation'
});

Reservation.belongsTo(Restaurant, {
  through: {
    model: DiningTable,
    unique: false
  },
  as: 'reservation_restaurant'
});

module.exports = { User, DiningTable, Restaurant, Reservation };
