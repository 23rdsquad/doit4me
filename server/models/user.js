'use strict';
module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    nickname: {
      allosNull: false,
      type: DataTypes.STRING
    },
    password: {
      allosNull: false,
      type: DataTypes.STRING
    },
    email: {
      allosNull: false,
      type: DataTypes.STRING
    },
    ip: {
      allosNull: false,
      type: DataTypes.STRING // has to be array
    },
    location: {
      allosNull: false,
      type: DataTypes.INTEGER
    },
    personal: {
      allosNull: false,
      type: DataTypes.STRING // has to be array
    },
    rating: {
      allosNull: false,
      type: DataTypes.FLOAT
    },
    photo: {
      allosNull: false,
      type: DataTypes.STRING // for now string, later will be base64
    }
  }, {
    timestamps: true,
    paranoid: true
  });
  User.associate = function(models) {
    User.hasMany(models.Task, {
      foreignKey: 'id',
      onDelete: 'CASCADE'
    })
  };
  return User;
};