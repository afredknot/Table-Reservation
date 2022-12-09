const sequelize = require('../config/connection');
const seedDiningTable = require('./diningTableData');
const seedRestaurant = require('./restaurantData');
const seedUser = require('./userData');
const seedReservations = require('./reservationsData');

const seedAll = async () => {
  await sequelize.sync({ force: true });

  await seedRestaurant();

  await seedDiningTable();

  await seedUser();

  await seedReservations();

  process.exit(0);
};

seedAll();
