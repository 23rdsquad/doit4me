'use strict';
module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    nickname: {
      allowNull: false,
      type: DataTypes.STRING
    },
    password: {
      allowNull: false,
      type: DataTypes.STRING
    },
    email: {
      allowNull: false,
      type: DataTypes.STRING
    },
    ip: {
      allowNull: false,
      type: DataTypes.STRING // has to be array
    },
    zip: {
      allowNull: false,
      type: DataTypes.INTEGER
    },
    personal: {
      allowNull: false,
      type: DataTypes.STRING // has to be array
    },
    rating: {
      allowNull: false,
      type: DataTypes.FLOAT
    },
    photo: {
      allowNull: false,
      type: DataTypes.STRING // for now string, later will be base64
    }
  }, {
    timestamps: true,
    paranoid: true
  });
  User.associate = function(models) {
    User.hasMany(models.Task, {
      as: 'Task',
      foreignKey: 'creator_id',
      onDelete: 'CASCADE'
    })
  };
  return User;
};