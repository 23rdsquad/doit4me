const User = require('../models').user;

module.exports = {
  check: (req, res, next) => {
    res.status(200).json({ status: 'lol'})
  },

  createUser: (req, res, next) => {
    console.log('req.body', req.body)
    // res.status(200).json({ status: 'Created one user' })
    const { name } = req.body;
    return User
    .create({ name })
    .then(user => res.status(200).json({ status: 'Created one user', user }))
    .catch(error => console.log(error));
  },

  getAllUsers: (req, res, next) => {
    return User
    .findAll({paranoid: false})
    .then(users => res.status(200).json({ status: 'Retrieved all users', users }))
    .catch(error => console.log(error));
  },

  getSingleUser: (req, res, next) => {
    const { id } = req.params;
    return User
    .findById(id)
    .then(user => res.status(200).json({ status: 'Retrieved one user', user }))
    .catch(error => console.log(error));
  },

  updateUser: (req, res, next) => {
    const { id } = req.params;
    const { name } = req.body;
    return User
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

  destroyUser: (req, res, next) => {
    const { id } = req.params;
    return User
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