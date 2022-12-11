
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

// route to get all restaurants
router.get('/', async (req, res) => {
    try {
      const dbRestaurantData = await Restaurant.findAll();
      res.status(200).json(dbRestaurantData);
    } catch (err) {
      res.status(500).json(err);
    }
  });
  module.exports = router;


  // TODO: Get restaurant by ID
  router.get('/:restaurant_id', async (req, res) => {
    try {
      const dbRestaurantData = await Restaurant.findOne({
        where: {
          restaurant_id: req.params.restaurant_id
        }

      });
      if (!dbRestaurantData) {
        res.status(404).json({ message: 'No user with this id!' });
        return;
      }
      console.log(dbRestaurantData)
      // const restaurant = dbRestaurantData.get({ plain: true });
      // console.log(restaurant)
      res.status(200).json(dbRestaurantData);
    } catch (err) {
      res.status(500).json(err);
    }
  });

  module.exports = router;