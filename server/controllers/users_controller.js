
const db = require('../models');
const bcrypt = require ('bcrypt');
const saltRound = 12;
const { User } = db;

module.exports = {
  register: (req, res, next) => {
    let { nickname, password, email, ip, location, personal, rating, photo } = req.body;
    bcrypt.hash(password, saltRound)
    .then(hashedPassword => {
      password = hashedPassword;
      return User
      .create({ nickname, password, email, ip, location, personal, rating, photo })
      .then(user => res.status(200).json({ status: 'Created one user', user }))
      .catch(error => console.log(error));
    })
    .catch(error => console.log(error));
  },

  login: (req, res, next) => {
    req.session.destroy();
    res.status(200).json( {} );
  },

  logout: (req, res, next) => {
    req.session.destroy();
    res.status(200).json( {} );
  },

  createUser: (req, res, next) => {
    const { nickname, password, email, ip, location, personal, rating, photo } = req.body;
    return User
    .create({ nickname, password, email, ip, location, personal, rating, photo })
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
    const { nickname, password, email, ip, location, personal, rating, photo } = req.body;
    return User
    .findById(id)
    .then(user => {
      if (!user) {
        return res.status(404).send({ message: 'User not found' })
      }
      return user
      .update({
        nickname: nickname,
        password: password,
        email: email,
        ip: ip,
        location: location,
        personal: personal,
        rating: rating,
        photo: photo
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
    .catch(error => console.log(error));
  },
};