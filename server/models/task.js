'use strict';
module.exports = (sequelize, DataTypes) => {
  const Task = sequelize.define('Task', {
    title: {
      allosNull: false,
      type: DataTypes.STRING
    },
    category: {
      allosNull: false,
      type: DataTypes.STRING
    },
    creator_id: {
      allosNull: false,
      type: DataTypes.INTEGER
    },
    contractor_id: {
      allosNull: true,
      type: DataTypes.INTEGER
    },
    price: {
      allosNull: false,
      type: DataTypes.INTEGER
    },
    description: {
      allosNull: false,
      type: DataTypes.STRING
    },
    location: {
      allosNull: false,
      type: DataTypes.INTEGER
    },
    deadline: {
      allosNull: true,
      type: DataTypes.DATE
    },
    status: {
      allosNull: true,
      type: DataTypes.STRING
    },
    photos: {
      allosNull: true,
      type: DataTypes.STRING
    },
    requests: DataTypes.STRING
  }, {
    timestamps: true,
    paranoid: true
  });
  Task.associate = function (models) {
    Task.belongsTo(models.User, {
      foreignKey: 'creator_id',
      onDelete: 'CASCADE'
    })
  }
  return Task;
};