const { User } = require('../models');

const userdata = [
  {
    first_name: 'Nathan',
    last_name: 'Russell',
    email: 'nate@gmail.com',
    phone_number: '(614)-555-7874',
    password: '$2b$10$VsQ3B86WghiZB6mKfdovSuGIn7yycWc5NDeBrIZMY1C3jfteqBiOK',
  },
  {
    first_name: 'Nate',
    last_name: 'Fritz',
    email: 'fritz@gmail.com',
    phone_number: '(614)-555-6546',
    password: '$2b$10$VsQ3B86WghiZB6mKfdovSuGIn7yycWc5NDeBrIZMY1C3jfteqBiOK',
  },
  {
    first_name: 'Tom',
    last_name: 'Fallara',
    email: 'tom@gmail.com',
    phone_number: '(614)-555-4444',
    password: '$2b$10$VsQ3B86WghiZB6mKfdovSuGIn7yycWc5NDeBrIZMY1C3jfteqBiOK',
  },
  {
    first_name: 'Daniel',
    last_name: 'Nelson',
    email: 'daniel@gmail.com',
    phone_number: '(614)-555-2114',
    password: '$2b$10$VsQ3B86WghiZB6mKfdovSuGIn7yycWc5NDeBrIZMY1C3jfteqBiOK',
  },
  {
    first_name: 'Michael',
    last_name: 'Frabott',
    email: 'michael@gmail.com',
    phone_number: '(614)-555-5644',
    password: '$2b$10$VsQ3B86WghiZB6mKfdovSuGIn7yycWc5NDeBrIZMY1C3jfteqBiOK',
  },
];

const seedUser = () => User.bulkCreate(userdata);

module.exports = seedUser;