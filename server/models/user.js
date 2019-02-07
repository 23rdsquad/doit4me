'use strict';
module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    nickname: DataTypes.STRING,
    password: DataTypes.STRING,
    email: DataTypes.STRING,
    ip: DataTypes.STRING, // has to be array
    location: DataTypes.INTEGER,
    personal: DataTypes.STRING,
    rating: DataTypes.FLOAT,
    photo: DataTypes.STRING // for now string, later will be base64
  }, {
    timestamps: true,
    paranoid: true
  });
  return User;
};