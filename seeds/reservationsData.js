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
    dining_table_id: 22,
    num_guests: 2,
    date_time: '2022-12-11',
  },
  {
    restaurant_id: 3,
    user_id: 4,
    dining_table_id: 40,
    num_guests: 2,
    date_time: '2022-12-09',
  },
  {
    restaurant_id: 1,
    user_id: 3,
    dining_table_id: 8,
    num_guests: 4,
    date_time: '2022-12-10',
  },
  {
    restaurant_id: 2,
    user_id: 5,
    dining_table_id: 16,
    num_guests: 2,
    date_time: '2022-12-12',
  },
  {
    restaurant_id: 4,
    user_id: 5,
    dining_table_id: 52,
    num_guests: 2,
    date_time: '2022-12-10',
  },
  {
    restaurant_id: 2,
    user_id: 3,
    dining_table_id: 18,
    num_guests: 2,
    date_time: '2022-12-11',
  },
  {
    restaurant_id: 3,
    user_id: 2,
    dining_table_id: 36,
    num_guests: 2,
    date_time: '2022-12-09',
  },
  {
    restaurant_id: 1,
    user_id: 5,
    dining_table_id: 6,
    num_guests: 4,
    date_time: '2022-12-10',
  },
  {
    restaurant_id: 4,
    user_id: 2,
    dining_table_id: 59,
    num_guests: 2,
    date_time: '2022-12-12',
  },
];

const seedReservation = () => Reservation.bulkCreate(reservationdata);

module.exports = seedReservation;