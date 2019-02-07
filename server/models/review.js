'use strict';
module.exports = (sequelize, DataTypes) => {
  const Review = sequelize.define('Review', {
    job_id: DataTypes.INTEGER,
    creator_id: DataTypes.INTEGER,
    contractor_id: DataTypes.INTEGER,
    rate: DataTypes.INTEGER,
    description: DataTypes.STRING 
  }, {
    timestamps: true,
    paranoid: true
  });
  Review.associate = function(models) {
    // associations can be defined here
  };
  return Review;
};