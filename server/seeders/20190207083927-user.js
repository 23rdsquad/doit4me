'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Users', [{
      nickname: 'qwerty',
      password: 'qwerty',
      email: 'johndoe@mail.com',
      ip: '127.0.0.1',
      zip: 98165,
      personal: 'I love helping people',
      rating: 5,
      avatar: '1234567890',
      deletedAt: null,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      nickname: 'qwerty123',
      password: 'qwerty123',
      email: 'janedoe@mail.com',
      ip: '127.0.1.0',
      zip: 98168,
      personal: 'Hello, how are you?',
      rating: 5,
      avatar: '1234567890',
      deletedAt: null,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      nickname: 'qwerty1',
      password: 'qwerty1',
      email: 'peterjones@mail.com',
      ip: '127.0.0.1',
      zip: 98165,
      personal: 'Please give me some job',
      rating: 5,
      avatar: '1234567890',
      deletedAt: null,
      createdAt: new Date(),
      updatedAt: new Date()
    }], {});
  },

  down: (queryInterface, Sequelize) => {
      return queryInterface.bulkDelete('Users', null, {});
  }
};
