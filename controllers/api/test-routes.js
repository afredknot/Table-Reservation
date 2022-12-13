  
const router = require('express').Router();
const { Restaurant, Reservation, DiningTable, User } = require('../../models');
const sequelize = require('sequelize')
  
//   Get floorplan by ID 
  router.get('/:restaurant_id', async (req, res) => {
    try {

      const restaurantData = await Restaurant.findOne(
        {
        where:{restaurant_id: req.params.restaurant_id},
        include: [
          {
            model: DiningTable,
            attributes: ['restaurant_table_ref', 'num_seats'],
          },
          {
            model: Reservation,
            attributes: ['date_time', 'dining_table_id']
          },
        ],

    });
      const restaurant = restaurantData.get({ plain: true });
      res.render('tableselect');
    } catch (err) {
      res.status(500).json(err);
    }
  });

// router.get('/', async (req, res) => {
//     try {
//       const dbRestaurantData = await Restaurant.findAll()
  
  
//       res.status(200).json(dbRestaurantData);
//     } catch (err) {
//       res.status(500).json(err);
//     }
//   });
  
module.exports = router;
