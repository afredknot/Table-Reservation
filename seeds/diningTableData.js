const { DiningTable } = require('../models');

const diningtabledata = [
  {
    restaurant_table_ref: 1,
    restaurant_id: 1,
    num_seats: 4,
  },
  {
    restaurant_table_ref: 2,
    restaurant_id: 1,
    num_seats: 4,
  },
  {
    restaurant_table_ref: 3,
    restaurant_id: 1,
    num_seats: 4,
  },
  {
    restaurant_table_ref: 4,
    restaurant_id: 1,
    num_seats: 6,
  },
  {
    restaurant_table_ref: 7,
    restaurant_id: 1,
    num_seats: 6,
  },
  {
    restaurant_table_ref: 8,
    restaurant_id: 1,
    num_seats: 4,
  },
  {
    restaurant_table_ref: 9,
    restaurant_id: 1,
    num_seats: 4,
  },
  {
    restaurant_table_ref: 10,
    restaurant_id: 1,
    num_seats: 4,
  },
  {
    restaurant_table_ref: 11,
    restaurant_id: 1,
    num_seats: 4,
  },
  {
    restaurant_table_ref: 12,
    restaurant_id: 1,
    num_seats: 8,
  },
  {
    restaurant_table_ref: 13,
    restaurant_id: 1,
    num_seats: 4,
  },
  {
    restaurant_table_ref: 14,
    restaurant_id: 1,
    num_seats: 4,
  },
  {
    restaurant_table_ref: 15,
    restaurant_id: 1,
    num_seats: 4,
  },
  {
    restaurant_table_ref: 1,
    restaurant_id: 2,
    num_seats: 4,
  },
  {
    restaurant_table_ref: 2,
    restaurant_id: 2,
    num_seats: 4,
  },
  {
    restaurant_table_ref: 3,
    restaurant_id: 2,
    num_seats: 4,
  },
  {
    restaurant_table_ref: 4,
    restaurant_id: 2,
    num_seats: 6,
  },
  {
    restaurant_table_ref: 7,
    restaurant_id: 2,
    num_seats: 6,
  },
  {
    restaurant_table_ref: 8,
    restaurant_id: 2,
    num_seats: 4,
  },
  {
    restaurant_table_ref: 9,
    restaurant_id: 2,
    num_seats: 4,
  },
  {
    restaurant_table_ref: 10,
    restaurant_id: 2,
    num_seats: 4,
  },
  {
    restaurant_table_ref: 11,
    restaurant_id: 2,
    num_seats: 4,
  },
  {
    restaurant_table_ref: 12,
    restaurant_id: 2,
    num_seats: 8,
  },
  {
    restaurant_table_ref: 13,
    restaurant_id: 2,
    num_seats: 4,
  },
  {
    restaurant_table_ref: 14,
    restaurant_id: 2,
    num_seats: 4,
  },
  {
    restaurant_table_ref: 15,
    restaurant_id: 2,
    num_seats: 4,
  },
  {
    restaurant_table_ref: 1,
    restaurant_id: 3,
    num_seats: 4,
  },
  {
    restaurant_table_ref: 2,
    restaurant_id: 3,
    num_seats: 4,
  },
  {
    restaurant_table_ref: 3,
    restaurant_id: 3,
    num_seats: 4,
  },
  {
    restaurant_table_ref: 4,
    restaurant_id: 3,
    num_seats: 6,
  },
  {
    restaurant_table_ref: 7,
    restaurant_id: 3,
    num_seats: 6,
  },
  {
    restaurant_table_ref: 8,
    restaurant_id: 3,
    num_seats: 4,
  },
  {
    restaurant_table_ref: 9,
    restaurant_id: 3,
    num_seats: 4,
  },
  {
    restaurant_table_ref: 10,
    restaurant_id: 3,
    num_seats: 4,
  },
  {
    restaurant_table_ref: 11,
    restaurant_id: 3,
    num_seats: 4,
  },
  {
    restaurant_table_ref: 12,
    restaurant_id: 3,
    num_seats: 8,
  },
  {
    restaurant_table_ref: 13,
    restaurant_id: 3,
    num_seats: 4,
  },
  {
    restaurant_table_ref: 14,
    restaurant_id: 3,
    num_seats: 4,
  },
  {
    restaurant_table_ref: 15,
    restaurant_id: 3,
    num_seats: 4,
  },
  {
    restaurant_table_ref: 1,
    restaurant_id: 4,
    num_seats: 4,
  },
  {
    restaurant_table_ref: 2,
    restaurant_id: 4,
    num_seats: 4,
  },
  {
    restaurant_table_ref: 3,
    restaurant_id: 4,
    num_seats: 4,
  },
  {
    restaurant_table_ref: 4,
    restaurant_id: 4,
    num_seats: 6,
  },
  {
    restaurant_table_ref: 7,
    restaurant_id: 4,
    num_seats: 6,
  },
  {
    restaurant_table_ref: 8,
    restaurant_id: 4,
    num_seats: 4,
  },
  {
    restaurant_table_ref: 9,
    restaurant_id: 4,
    num_seats: 4,
  },
  {
    restaurant_table_ref: 10,
    restaurant_id: 4,
    num_seats: 4,
  },
  {
    restaurant_table_ref: 11,
    restaurant_id: 4,
    num_seats: 4,
  },
  {
    restaurant_table_ref: 12,
    restaurant_id: 4,
    num_seats: 8,
  },
  {
    restaurant_table_ref: 13,
    restaurant_id: 4,
    num_seats: 4,
  },
  {
    restaurant_table_ref: 14,
    restaurant_id: 4,
    num_seats: 4,
  },
  {
    restaurant_table_ref: 15,
    restaurant_id: 4,
    num_seats: 4,
  },
];

const seedDiningTable = () => DiningTable.bulkCreate(diningtabledata);

module.exports = seedDiningTable;
