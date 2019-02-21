'use strict';
module.exports = (sequelize, DataTypes) => {
  const Review = sequelize.define('Review', {
    job_id: {
      allowNull: false,
      type: DataTypes.INTEGER
    },
    creator_id: {
      allowNull: false,
      type: DataTypes.INTEGER
    },
    contractor_id: {
      allowNull: true,
      type: DataTypes.INTEGER
    },
    rate: {
      allowNull: false,
      type: DataTypes.INTEGER
    },
    description: {
      allowNull: false,
      type: DataTypes.STRING
    }
  }, {
    timestamps: true,
    paranoid: true
  });
  Review.associate = function(models) {
    Review.belongsTo(models.User, {
      as: 'User',
      foreignKey: 'creator_id',
      onDelete: 'CASCADE'
    })
  };
  return Review;
};