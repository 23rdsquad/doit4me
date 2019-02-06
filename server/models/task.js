'use strict';
module.exports = (sequelize, DataTypes) => {
  const Task = sequelize.define('Task', {
    title: DataTypes.STRING,
    creator: DataTypes.INTEGER,
    price: DataTypes.INTEGER,
    description: DataTypes.STRING, // has to be array
    location: DataTypes.INTEGER,
    deadline: DataTypes.DATE,
    status: DataTypes.STRING,
    contractor: DataTypes.INTEGER, // for now string, later will be base64
    photos: DataTypes.STRING,
    category: DataTypes.STRING,
    requests: DataTypes.STRING
  }, {
    timestamps: true,
    paranoid: true
  });
  return Task;
};