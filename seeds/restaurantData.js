const { Restaurant } = require('../models');

const restaurantdata = [
  {
    name: 'PizzaPizza',
    image_link: 'PIZZALOGO.jpg',
    address: '123 A Slice of Pie Way',
    phone: '(614)-555-7874',
    menu_link: 'pizzapizza.com',
    hours:'11AM - 10PM',
    category:'Pizza',
    description: 'We Make and Sell Good Pizza',
    floorplan_filepath: 'PIZZAFLOORPLAN.svg',
  },
  {
    name: `Burgers 'N Beer`,
    image_link: 'LOGO.jpg',
    address: '456 Double Decker Lane',
    phone: '(614)-555-6546',
    menu_link: 'burgersnbeer.com',
    hours:'1PM - 12AM',
    category:'Burgers',
    description: `Slingin' Sammies and Brews`,
    floorplan_filepath: 'BURGERFLOORPLAN.svg',
  },
  {
    name: `Wanna TACO bout it?`,
    image_link: 'TACOLOGO.jpg',
    address: '55879 Tamale St.',
    phone: '(614)-555-9978',
    menu_link: 'tacoboutit.com',
    hours:'9AM - 9PM',
    category:'Mexican',
    description: `Delivering delicious tacos and burritos since 1999.`,
    floorplan_filepath: 'TACOFLOORPLAN.svg',
  },
  {
    name: `Tacos. Tortas. Tequila.`,
    image_link: 'TTTLOGO.jpg',
    address: '55879 Tequila Blvd.',
    phone: '(614)-555-9844',
    menu_link: 'tripletTacos.com',
    hours:'10AM - 1AM',
    category:'Mexican',
    description: `Where every day is Taco Tuesday!`,
    floorplan_filepath: 'TTTFLOORPLAN.svg',
  },
];

const seedRestaurant = () => Restaurant.bulkCreate(restaurantdata);

module.exports = seedRestaurant;
