const router = require('express').Router();
const { User, Reservation, Restaurant, DiningTable } = require('../../models');

// CREATE new user
router.post('/', async (req, res) => {
  try {
    const dbUserData = await User.create({
      first_name: req.body.first_name,
      last_name: req.body.last_name,  
      phone: req.body.phone,
      email: req.body.email,
      password: req.body.password,
    });

    req.session.save(() => {
      req.session.loggedIn = true;

      res.status(200).json(dbUserData);
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

// Login
router.post('/login', async (req, res) => {
  try {
    const dbUserData = await User.findOne({
      where: {
      //use email to find user
        email: req.body.email,
      },
    });

    if (!dbUserData) {
      res
        .status(400)
        .json({ message: 'Incorrect email or password. Please try again!' });
      return;
    }

    const validPassword = await dbUserData.checkPassword(req.body.password);

    // if (!validPassword) {
    //   res
    //     .status(400)
    //     .json({ message: 'Incorrect email or password. Please try again!' });
    //   return;
    // }

    req.session.save(() => {
      req.session.loggedIn = true;
      req.session.user = dbUserData.user_id;

      res
        .status(200)
        .json({ user: dbUserData, message: `${dbUserData.first_name}, you are now logged in!` });
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

// Logout
router.post('/logout', (req, res) => {
  if (req.session.loggedIn) {
    req.session.destroy(() => {
      res.status(204).end();
    });
  } else {
    res.status(404).end();
  }
});

//logout fetch 



router.get('/reservations/:user_id', async (req, res) => {
  try {

    const reservationData = await Reservation.findAll(
      {
        where:{user_id: req.params.user_id}, 
        include: [ 
          {model: User, attributes: ['first_name', 'last_name']},
          {model: Restaurant, attributes: ['name']},
          {model: DiningTable, attributes: ['restaurant_table_ref']},
        ]
      }
    );    
  
    const reservation = reservationData.map((reservation) => reservation.get({ plain: true }));

    res.status(200).json(reservation);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
