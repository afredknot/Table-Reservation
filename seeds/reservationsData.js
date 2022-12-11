const { Reservation } = require('../models');

const reservationdata = [
  {
    restaurant_id: 1,
    user_id: 1,
    dining_table_id: 5,
    num_guests: 2,
    date_time: '2022-12-10',
  },
  {
    restaurant_id: 2,
    user_id: 2,
    dining_table_id: 13,
    num_guests: 2,
    date_time: '2022-12-11',
  },
  {
    restaurant_id: 3,
    user_id: 4,
    dining_table_id: 4,
    num_guests: 2,
    date_time: '2022-12-09',
  },
  {
    restaurant_id: 1,
    user_id: 3,
    dining_table_id: 2,
    num_guests: 4,
    date_time: '2022-12-10',
  },
  {
    restaurant_id: 2,
    user_id: 5,
    dining_table_id: 45,
    num_guests: 2,
    date_time: '2022-12-12',
  },
];

const seedReservation = () => Reservation.bulkCreate(reservationdata);

module.exports = seedReservation;