
const router = require('express').Router();
const { Restaurant, DiningTable } = require('../../models');


// CREATE new Restaurant
router.post('/', async (req, res) => {
    try {
      const dbRestaurantData = await Restaurant.create({
        name: req.body.name,
        image_link: req.body.image_link,  
        address: req.body.address,
        phone: req.body.phone,
        menu_link: req.body.menu_link,
        hours: req.body.hours,
        description: req.body.description,
        floorplan_filepath: req.body.floorplan_filepath,
      });
  
      req.session.save(() => {
        req.session.loggedIn = true;
  
        res.status(200).json(dbRestaurantData);
      });
    } catch (err) {
      console.log(err);
      res.status(500).json(err);
    }
  });

// route to get all restaurant
router.get('/', async (req, res) => {
    try {
      const restaurantData = await Restaurant.findAll();
      res.status(200).json(restaurantData);
    } catch (err) {
      res.status(500).json(err);
    }
  });
  module.exports = router;


  // TODO: Get restaurant by ID
  router.get('/:restaurant_id', async (req, res) => {
    try {
      console.log('You are Here!')
      const restaurantData = await Restaurant.findByPK(req.params.restaurant_id, {
        // include: [
        //   {
        //     model: DiningTable,
        //     attributes: ['restaurant_table_ref', 'num_seats'],
        //   },
        // ],

    });
      console.log(restaurantData)
      const restaurant = restaurantData.get({ plain: true });
      console.log(restaurant)
      res.status(200).json(restaurant);
    } catch (err) {
      res.status(500).json(err);
    }
  });
  module.exports = router;