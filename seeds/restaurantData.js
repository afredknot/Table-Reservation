const { Restaurant } = require('../models');

const restaurantdata = [
  {
    name: 'PizzaPizza',
    image_link: 'PIZZALOGO.jpg',
    address: '123 A Slice of Pie Way',
    phone: '(614)-555-7874',
    menu_link: 'pizzamenu.com',
    hours:'11AM - 10PM',
    description: 'We Make and Sell Good Pizza',
    floorplan_filepath: 'PIZZAFLOORPLAN.svg',
  },
  {
    name: `Burgers 'N Beer`,
    image_link: 'LOGO.jpg',
    address: '456 Double Decker Lane',
    phone: '(614)-555-6546',
    menu_link: 'burgermenu.com',
    hours:'1PM - 12AM',
    description: `Slingin' Sammies and Brews`,
    floorplan_filepath: 'BURGERFLOORPLAN.svg',
  },
  {
    name: `Wanna TACO bout it?`,
    image_link: 'TACOLOGO.jpg',
    address: '55879 Tequila Blvd.',
    phone: '(614)-555-9978',
    menu_link: 'tacomenu.com',
    hours:'9AM - 9PM',
    description: `Where every day is Taco Tuesday!`,
    floorplan_filepath: 'TACOFLOORPLAN.svg',
  },
];

const seedRestaurant = () => Restaurant.bulkCreate(restaurantdata);

module.exports = seedRestaurant;
