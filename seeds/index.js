const sequelize = require('../config/connection');
const seedRestaurant = require('./restaurantData');
// const seedPaintings = require('./paintingData');

const seedAll = async () => {
  await sequelize.sync({ force: true });

  await seedRestaurant();

  // await seedPaintings();

  process.exit(0);
};

seedAll();
