
const router = require('express').Router();
const { Restaurant, Reservation, DiningTable, User } = require('../../models');
const fs = require('fs');
const sequelize = require('sequelize')

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
    const dbRestaurantData = await Restaurant.findAll()


    res.status(200).json(dbRestaurantData);
  } catch (err) {
    res.status(500).json(err);
  }
});

  // GET route for search results
router.get('/search/:restaurant', async (req, res) => {
    try {
      const dbRestaurantData = await Restaurant.findAll({


      where: {
        name: {
          [sequelize.Op.like]: `%${req.params.restaurant}%`,
        },
      },
      order: [sequelize.literal(`name = '${req.params.restaurant}' desc, length(name)`)]
   })

    const results = dbRestaurantData.map((data) => data.get({ plain: true }));
    console.log(results);
    
      res.render("search", { results, loggedIn: req.session.loggedIn, });
    } catch (err) {
      res.status(500).json(err);
    }
  });

  // Get restaurant by ID 
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
      
      res.status(200).render('restaurantdetails', {restaurant, loggedIn: req.session.loggedIn,});
    } catch (err) {
      res.status(500).json(err);
    }
  });

 // Get restaurant data by ID 
 router.get('/:restaurant_id/data', async (req, res) => {
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
    res.status(200).json(restaurant);
  } catch (err) {
    res.status(500).json(err);
  }
});

// Get floorplan by restautrant ID 
  router.get('/reserve/:restaurant_id', async (req, res) => {
    try {

      const restaurantData = await Restaurant.findOne(
        {
        where:{restaurant_id: req.params.restaurant_id},
        include: [{model: Reservation}]
      });
      
      const diningTableResos = [];
      const restaurant = restaurantData.get({ plain: true });
      for (i=0; i<restaurant.reservations.length; i++){
        diningTableResos.push(restaurant.reservations[i].dining_table_id)
      }
   
      const floorplanFilepath = restaurant.floorplan_filepath
      const floorplan = fs.readFileSync(`db/floorplans/${floorplanFilepath}`, 'utf8');
      
      let restaurantObject = {
        reservations: diningTableResos,
        floorplan: floorplan
      }
      console.log(diningTableResos);

      // res.status(200).json(restaurantObject);
      res.status(200).render('tableselect', {restaurantObject, loggedIn: req.session.loggedIn,});
    } catch (err) {
      res.status(500).json(err);
    }
  });

  //  Get table by ID
  router.get('/table/:dining_table_id', async (req, res) => {
    try {

      const diningTableData = await DiningTable.findOne(
        {
          where:{dining_table_id: req.params.dining_table_id}, 
          include: [{model: Restaurant}, {model: Reservation}]
          
        }
      );    
    
      const diningTable = diningTableData.get({ plain: true });

      res.status(200).json(diningTable);
    } catch (err) {
      res.status(500).json(err);
    }
  });
  module.exports = router;


  