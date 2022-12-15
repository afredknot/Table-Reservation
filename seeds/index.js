const sequelize = require('../config/connection');
const seedDiningTable = require('./diningTableData');
const seedRestaurant = require('./restaurantData');
const seedUser = require('./userData');
const seedReservations = require('./reservationsData');

//seed all
const seedAll = async () => {
  await sequelize.sync({ force: true });

  await seedRestaurant();

  await seedDiningTable();

  await seedUser();

  await seedReservations();

  process.exit(0);
};

seedAll();
