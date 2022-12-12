const router = require('express').Router();

const userRoutes = require('./user-routes');
const restaurantRoutes = require('./restaurant-routes');
const reservationRoutes = require('./reservation-routes');
const testRoutes = require('./test-routes');

router.use('/users', userRoutes);
router.use('/restaurants', restaurantRoutes);
router.use('/reservations', reservationRoutes);
router.use('/tests', testRoutes);

module.exports = router;
