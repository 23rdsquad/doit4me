const Users = require('../models').items;
const models = require ('../models');

module.exports = {
  createItem: (req, res, next) => {
    console.log(req.body)
    // res.status(200).json({ status: 'Created one user' })
    const { name } = req.body;
    return Users
    .create({ name })
    .then(user => res.status(200).json({ status: 'Created one user', user }))
    .catch(error => console.log(error));
  },

  getAllItems: (req, res, next) => {
    return Users
    .findAll({paranoid: false})
    .then(users => res.status(200).json({ status: 'Retrieved all users', users }))
    .catch(error => console.log(error));
  },

  getSingleItem: (req, res, next) => {
    const { id } = req.params;
    return Users
    .findById(id)
    .then(user => res.status(200).json({ status: 'Retrieved one user', user }))
    .catch(error => console.log(error));
  },

  updateItem: (req, res, next) => {
    const { id } = req.params;
    const { name } = req.body;
    return Users
    .findById(id)
    .then(user => {
      if (!user) {
        return res.status(404).send({ message: 'User not found' })
      }
      return user
      .update({
        name: name
      })
      .then(user => res.status(200).json({ status: 'Updated one user', user }))
      .catch(error => console.log(error));
    })
    .catch(error => console.log(error));
  },

  destroyItem: (req, res, next) => {
    const { id } = req.params;
    return Users
    .findById(id)
    .then(user => {
      if (!user) {
        return res.status(404).send({ message: 'User not found' })
      }
      return user
      .destroy()
      .then(() => res.status(200).json({ status: 'Deleted one user', user }))
      .catch(error => console.log(error));
    })
  },
};