'use strict';
module.exports = (sequelize, DataTypes) => {
  const Review = sequelize.define('Review', {
    title: DataTypes.STRING
  }, {});
  Review.associate = function(models) {
    // associations can be defined here
  };
  return Review;
};