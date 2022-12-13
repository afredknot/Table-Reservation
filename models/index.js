const User = require('./User');
const DiningTable = require('./DiningTable');
const Restaurant = require('./Restaurant');
const Reservation = require('./Reservation');

User.hasMany(Reservation, {
  foreignKey: 'user_id',
});

// User.belongsToMany(DiningTable, {
//   through: {
//     model: Reservation,
//     unique: false
//   },
// });

// DiningTable.belongsToMany(User, {
//   through: {
//     model: Reservation,
//     unique: false
//   },
// });

// User.belongsToMany(Restaurant, {
//   through: {
//     model: Reservation,
//     unique: false
//   },
// });


// Restaurant.belongsToMany(User, {
//   through: {
//     model: Reservation,
//     unique: false
//   },
// });


Reservation.belongsTo(User, {
  foreignKey: 'user_id',
});

Restaurant.hasMany(DiningTable, {
  foreignKey: 'restaurant_id',
  // onDelete: 'CASCADE',
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

Restaurant.hasMany(Reservation, {
  foreignKey: 'restaurant_id',
});

Reservation.belongsTo(Restaurant, {
  foreignKey: 'restaurant_id',
});

module.exports = { User, DiningTable, Restaurant, Reservation };
