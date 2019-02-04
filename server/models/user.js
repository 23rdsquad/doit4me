'use strict';
module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    name: DataTypes.STRING,
  }, {
    timestamps: true,
    paranoid: true
  });
  return User;
};