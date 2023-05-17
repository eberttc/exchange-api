'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    return Promise.all([
      queryInterface.addColumn(
        'exchanges', // table name
        'createdAt', // new field name
        {
          type: Sequelize.DATE,
         
        }
      ),
      queryInterface.addColumn(
        'exchanges', // table name
        'updatedAt', // new field name
        {
          type: Sequelize.DATE,
         
        }
      ),
      queryInterface.addColumn(
        'exchanges', // table name
        'deletedAt', // new field name
        {
          type: Sequelize.DATE,
         
        }
      ),
      queryInterface.addColumn(
        'exchanges', // table name
        'version', // new field name
        {
          type: Sequelize.DECIMAL,
         
        },
      )
    ]);
  },

  async down (queryInterface, Sequelize) {
    return Promise.all([
      queryInterface.removeColumn('exchanges', 'createdAt'),
      queryInterface.removeColumn('exchanges', 'updatedAt'),
      queryInterface.removeColumn('exchanges', 'deletedAt'),
      queryInterface.removeColumn('exchanges', 'version')

,
queryInterface.removeColumn('exchanges', 'createdAt')


    ]);
  }
};
