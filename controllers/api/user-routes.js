const router = require('express').Router();
const { User, Reservation, Restaurant, DiningTable  } = require('../../models');

// CREATE new user
router.post('/', async (req, res) => {
  try {
    const dbUserData = await User.create({
      first_name: req.body.first_name,
      last_name: req.body.last_name,  
      phone_number: req.body.phone_number,
      email: req.body.email,
      password: req.body.password,
    });

    req.session.save(() => {
      req.session.loggedIn = true;
      req.session.user = dbUserData.user_id;
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

    if (!validPassword) {
      res
        .status(400)
        .json({ message: 'Incorrect email or password. Please try again!' });
      return;
    }

    req.session.save(() => {
      req.session.loggedIn = true;
      req.session.user = dbUserData.user_id;

      res
        .status(200)
        .json({ user: dbUserData, message: 'You are now logged in!' });
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



//Get one user
router.get('/profile', async (req, res) => {
  try {
    const dbUserData = await User.findOne({
      where: { user_id: req.session.user },
      include: [ 
        {model: Reservation},
      ]
    });
    if (!dbUserData) {
      res.status(404).json({ message: 'No user with this id' });
      return;
    }
    const user = dbUserData.get({ plain: true });

    // res.status(200).json(dbUserData);
    res.status(200).render('profile', {user, loggedIn: req.session.loggedIn,});
  } catch (err) {
    res.status(500).json(err);
  }
});


// GET reservation by user ID
router.get('/profile/reservations/', async (req, res) => {
  try {

    const reservationData = await Reservation.findAll(
      {
        where:{user_id: req.session.user}, 
        include: [ 
          {model: User, attributes: ['first_name', 'last_name']},
          {model: Restaurant, attributes: ['name']},
          {model: DiningTable, attributes: ['restaurant_table_ref']},
        ]
      }
    );

    const reservations = reservationData.map((reservation) => reservation.get({ plain: true }));

    res.status(200).render('reservations', {reservations, loggedIn: req.session.loggedIn,});
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/', async (req, res) => {
  try {
    const userData = await User.findAll();
    res.status(200).json(userData);
  } catch (err) {
    res.status(500).json(err);
  }
});
module.exports = router;
