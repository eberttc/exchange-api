'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.bulkInsert('exchanges', [{
      originCurrency: 'USD',
      finalCurrency: 'PEN',
      date: '2023-01-01',
      value: 3.99
    }], {});
  },

  async down (queryInterface, Sequelize) {
    return queryInterface.bulkDelete('exchanges', null, {});

  }
};
