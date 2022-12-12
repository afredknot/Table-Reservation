const { Restaurant } = require('../models');

const restaurantdata = [
  {
    name: 'PizzaPizza',
    image_link: 'PIZZALOGO.jpg',
    address: '123 A Slice of Pie Way',
    phone: '(614)-555-7874',
    menu_link: 'pizzamenu.com',
    hours:'11AM - 10PM',
    category:'Pizza',
    description: 'We Make and Sell Good Pizza',
    floorplan_filepath: 'PIZZAFLOORPLAN.txt',
  },
  {
    name: `Burgers 'N Beer`,
    image_link: 'LOGO.jpg',
    address: '456 Double Decker Lane',
    phone: '(614)-555-6546',
    menu_link: 'burgermenu.com',
    hours:'1PM - 12AM',
    category:'Burgers',
    description: `Slingin' Sammies and Brews`,
    floorplan_filepath: 'BURGERFLOORPLAN.txt',
  },
  {
    name: `Wanna TACO bout it?`,
    image_link: 'TACOLOGO.jpg',
    address: '55879 Tequila Blvd.',
    phone: '(614)-555-9978',
    menu_link: 'tacomenu.com',
    hours:'9AM - 9PM',
    category:'Mexican',
    description: `Delivering delicious tacos and burritos since 1999.`,
    floorplan_filepath: 'TACOFLOORPLAN.txt',
  },
  {
    name: `Tacos. Tortas. Tequila.`,
    image_link: 'TTTLOGO.jpg',
    address: '55879 Tamale St.',
    phone: '(614)-555-9844',
    menu_link: 'tttmenu.com',
    hours:'10AM - 1AM',
    category:'Mexican',
    description: `Where every day is Taco Tuesday!`,
    floorplan_filepath: 'TTTFLOORPLAN.txt',
  },
];

const seedRestaurant = () => Restaurant.bulkCreate(restaurantdata);

module.exports = seedRestaurant;
