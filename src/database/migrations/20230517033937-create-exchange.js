'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.createTable('exchanges', {
      originCurrency: {
        type: Sequelize.STRING,
        allowNull: false
      },
      finalCurrency: {
        type: Sequelize.STRING,
        allowNull: false
      },
      date: {
        type: Sequelize.STRING,
        allowNull: false,
        defaultValue: true
      },
      value: {
        type: Sequelize.DECIMAL,
        allowNull: false      
      }
    });
  },

  async down (queryInterface, Sequelize) {
    return queryInterface.dropTable('Exchanges');
  }
};
