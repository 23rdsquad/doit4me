'use strict';
module.exports = (sequelize, DataTypes) => {
  const Task = sequelize.define('Task', {
    title: DataTypes.STRING,
    category: DataTypes.STRING,
    creator_id: DataTypes.INTEGER,
    contractor_id: DataTypes.INTEGER,
    price: DataTypes.INTEGER,
    description: DataTypes.STRING, // has to be array
    location: DataTypes.INTEGER,
    deadline: DataTypes.DATE,
    status: DataTypes.STRING,
    photos: DataTypes.STRING,
    requests: DataTypes.STRING
  }, {
    timestamps: true,
    paranoid: true
  });
  return Task;
};