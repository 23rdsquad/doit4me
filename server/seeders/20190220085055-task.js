'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Tasks', [{
      title: 'do something',
      category: 'do',
      creator_id: 1,
      contractor_id: 1,
      price: 1000,
      description: 'a good task',
      zip: 91121,
      deadline: '2012-02-15',
      status: '1',
      photos: '1',
      requests: '1',
      deletedAt: null,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      title: 'cook food',
      category: 'cook',
      creator_id: 2,
      contractor_id: 1,
      price: 8200,
      description: 'please Im starving',
      zip: 51142,
      deadline: '2019-03-10',
      status: '1',
      photos: '1',
      requests: '1',
      deletedAt: null,
      createdAt: new Date(),
      updatedAt: new Date()
    }], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Tasks', null, {});
  }
};
