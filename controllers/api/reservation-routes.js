
const router = require('express').Router();
const { Reservation, Restaurant, DiningTable, User } = require('../../models');

// Create a new reservation
router.post('/', async (req, res) => {
  try {
    await Reservation.create({
      restaurant_id: req.body.restaurant_id,
      user_id: req.body.user_id,  
      dining_table_id: req.body.dining_table_id,
      num_guests: req.body.num_guests,
      date_time: req.body.date_time,
    });

    req.session.save(() => {
      req.session.loggedIn = true;

      res.render('floorplan', {  });;
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

module.exports = router;



  