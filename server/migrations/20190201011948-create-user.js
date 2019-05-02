'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Users', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      nickname: {
        allosNull: false,
        type: Sequelize.STRING
      },
      password: {
        allosNull: false,
        type: Sequelize.STRING
      },
      email: {
        allosNull: false,
        type: Sequelize.STRING
      },
      ip: {
        allosNull: false,
        type: Sequelize.ARRAY(Sequelize.STRING)
      },
      zip: {
        allosNull: false,
        type: Sequelize.INTEGER
      },
      personal: {
        allowNull: false,
        type: Sequelize.STRING
      },
      rating: {
        allosNull: false,
        type: Sequelize.FLOAT
      },
      avatar: {
        allowNull: false,
        type: Sequelize.STRING
      },
      deletedAt: {
        type: Sequelize.DATE
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Users');
  }
};