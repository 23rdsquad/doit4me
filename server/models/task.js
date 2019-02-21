'use strict';
module.exports = (sequelize, DataTypes) => {
  const Task = sequelize.define('Task', {
    title: {
      allowNull: false,
      type: DataTypes.STRING
    },
    category: {
      allowNull: false,
      type: DataTypes.STRING
    },
    creator_id: {
      allowNull: false,
      type: DataTypes.INTEGER
    },
    contractor_id: {
      allowNull: true,
      type: DataTypes.INTEGER
    },
    price: {
      allowNull: false,
      type: DataTypes.INTEGER
    },
    description: {
      allowNull: false,
      type: DataTypes.STRING
    },
    zip: {
      allowNull: false,
      type: DataTypes.INTEGER
    },
    deadline: {
      allowNull: true,
      type: DataTypes.DATE
    },
    status: {
      allowNull: true,
      type: DataTypes.STRING
    },
    photos: {
      allowNull: true,
      type: DataTypes.STRING
    },
    requests: {
      allowNull: true,
      type: DataTypes.STRING
    }
  }, {
    timestamps: true,
    paranoid: true
  });
  Task.associate = function (models) {
    Task.belongsTo(models.User, {
      as: 'User',
      foreignKey: 'creator_id',
      onDelete: 'CASCADE' })
  }
  return Task;
};