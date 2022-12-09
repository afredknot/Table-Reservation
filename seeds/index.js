const sequelize = require('../config/connection');
const seedDiningTable = require('./diningTableData');
const seedRestaurant = require('./restaurantData');
// const seedPaintings = require('./paintingData');

const seedAll = async () => {
  await sequelize.sync({ force: true });

  await seedRestaurant();

  await seedDiningTable();

  process.exit(0);
};

seedAll();
