
const router = require('express').Router();
const { Restaurant } = require('../../models');

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

  module.exports = router;
  