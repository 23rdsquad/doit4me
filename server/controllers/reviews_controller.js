
const db = require('../models');
const { Review } = db;

module.exports = {
  createReview: (req, res, next) => {
    const { task_id, creator_id, contractor_id, rate, description } = req.body;
    return Review
    .create({ task_id, creator_id, contractor_id, rate, description })
    .then(review => res.status(200).json({ status: 'Created one review', review }))
    .catch(error => console.log(error));
  },

  getAllReviews: (req, res, next) => {
    return Review
    .findAll({paranoid: false})
    .then(reviews => res.status(200).json({ status: 'Retrieved all reviews', reviews }))
    .catch(error => console.log(error));
  },

  getSingleReview: (req, res, next) => {
    const { id } = req.params;
    return Review
    .findById(id)
    .then(review => res.status(200).json({ status: 'Retrieved one review', review }))
    .catch(error => console.log(error));
  },

  getReviewsByUserId: (req, res, next) => {
    const { user_id } = req.params;
    return Review
    .findAll({
      where: {creator_id: user_id}
    })
    .then(reviews => res.status(200).json({ status: 'Retrieved reviews for the user', reviews }))
    .catch(error => console.log(error));
  },

  updateReview: (req, res, next) => {
    const { id } = req.params;
    const { task_id, creator_id, contractor_id, rate, description } = req.body;
    return Review
    .findById(id)
    .then(review => {
      if (!review) {
        return res.status(404).send({ message: 'Review not found' })
      }
      return review
      .update({
        task_id: task_id,
        creator_id: creator_id,
        contractor_id: contractor_id,
        rate: rate,
        description: description
      })
      .then(review => res.status(200).json({ status: 'Updated one review', review }))
      .catch(error => console.log(error));
    })
    .catch(error => console.log(error));
  },

  destroyReview: (req, res, next) => {
    const { id } = req.params;
    return Review
    .findById(id)
    .then(review => {
      if (!review) {
        return res.status(404).send({ message: 'Review not found' })
      }
      return review
      .destroy()
      .then(() => res.status(200).json({ status: 'Deleted one review', review }))
      .catch(error => console.log(error));
    })
    .catch(error => console.log(error));
  }
};