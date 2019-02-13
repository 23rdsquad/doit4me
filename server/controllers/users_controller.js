
const db = require('../models');
const bcrypt = require ('bcrypt');
const saltRound = 12;
const { User } = db;

module.exports = {
  register: (req, res, next) => {
    const { nickname, email, ip, location, personal, rating, photo } = req.body;
    let { password } = req.body;
    // using bcrypt to encrypt the password
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
    // getting user from the request
    const { nickname, password } = req.body;
    return User
    // looking for a user with the nickname from the request
    .findAll({
      where: {
        nickname: nickname
      }
    })
    .then(users => {
      // if there is no user with a requested nickname we return error 403
      if (users.length) {
        bcrypt.compare(password, users[0].dataValues.password).then(passwordMatch => {
          // if the password does not correspond with one in database we return error 401
          if (passwordMatch) {
            req.session.user = {
              nickname: users[0].dataValues.nickname
            }
            // if the user was not initialized we create it in checkForSession middleware
            res.status(200).json( req.session.user );
          } else {
            res.status(401).json({ message: 'Wrong password' });
          }
        })
        .catch((error) => res.status(500).send(error));
      } else {
        res.status(403).json({ message: "That user is not registered" });
      }
    })
    .catch(error => res.status(500).send(error));
  },

  logout: (req, res, next) => {
    req.session.destroy();
    res.status(200).json( { message: 'User is logged out'} );
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