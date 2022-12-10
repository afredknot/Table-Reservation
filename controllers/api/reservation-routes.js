
const router = require('express').Router();
const { Reservation, Restaurant, DiningTable, User } = require('../../models');

// Create a new reservation
router.post('/', async (req, res) => {
  try {
    const reservation = await Reservation.create({
      restaurant_id: req.body.restaurant_id,
      user_id: req.body.user_id,  
      dining_table_id: req.body.dining_table_id,
      num_guests: req.body.num_guests,
      date_time: req.body.date_time,
    });

    req.session.save(() => {
      req.session.loggedIn = true;

      res.status(200).json(reservation);
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

// Get Reservation by ID
router.get('/:reservation_id', async (req, res) => {
  try {

    const reservationData = await Reservation.findOne(
      {
        where:{reservation_id: req.params.reservation_id}, 
        include: [ 
          {model: User, attributes: ['first_name', 'last_name']},
          {model: Restaurant, attributes: ['name']},
          {model: DiningTable, attributes: ['restaurant_table_ref']},
        ]
      }
    );    
  
    const reservation = reservationData.get({ plain: true });

    res.status(200).json(reservation);
  } catch (err) {
    res.status(500).json(err);
  }
});






module.exports = router;