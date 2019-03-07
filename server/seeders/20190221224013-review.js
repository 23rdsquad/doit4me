'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Reviews', [{
      task_id: 1,
      contractor_id: 1,
      creator_id: 2,
      rate: 5,
      description: "everything was perfect",
      deletedAt: null,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      task_id: 2,
      contractor_id: 1,
      creator_id: 3,
      rate: 4,
      description: "it was okay",
      deletedAt: null,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      task_id: 3,
      contractor_id: 2,
      creator_id: 2,
      rate: 5,
      description: "task was completed",
      deletedAt: null,
      createdAt: new Date(),
      updatedAt: new Date()
    }], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Reviews', null, {});
  }
};
