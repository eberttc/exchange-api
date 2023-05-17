'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    return Promise.all([
      queryInterface.addColumn(
        'exchanges', // table name
        'id', // new field name
        {
          type: Sequelize.UUID,
          primaryKey: true,
          autoIncrementIdentity: true
        },
      )
    ]);
  },

  async down (queryInterface, Sequelize) {
   // logic for reverting the changes
   return Promise.all([
    queryInterface.removeColumn('exchanges', 'id')
  ]);
  }
};
