
const db = require('../models')
const { Task } = db

module.exports = {
  createTask: (req, res, next) => {
    const { title, creator, price, description, location, deadline, status, contractor } = req.body;
    return Task
    .create({ title, creator, price, description, location, deadline, status, contractor })
    .then(task => res.status(200).json({ status: 'Created one task', task }))
    .catch(error => console.log(error));
  },

  getAllTasks: (req, res, next) => {
    return Task
    .findAll({paranoid: false})
    .then(tasks => res.status(200).json({ status: 'Retrieved all tasks', tasks }))
    .catch(error => console.log(error));
  },

  getSingleTask: (req, res, next) => {
    const { id } = req.params;
    return Task
    .findById(id)
    .then(task => res.status(200).json({ status: 'Retrieved one task', task }))
    .catch(error => console.log(error));
  },

  updateTask: (req, res, next) => {
    const { id } = req.params;
    const { title, creator, price, description, location, deadline, status, contractor } = req.body;
    return Task
    .findById(id)
    .then(task => {
      if (!task) {
        return res.status(404).send({ message: 'Task not found' })
      }
      return task
      .update({
        title: title,
        creator: creator,
        price: price,
        description: description,
        location: location,
        deadline: deadline,
        status: status,
        contractor: contractor
      })
      .then(task => res.status(200).json({ status: 'Updated one task', task }))
      .catch(error => console.log(error));
    })
    .catch(error => console.log(error));
  },

  destroyTask: (req, res, next) => {
    const { id } = req.params;
    return Task
    .findById(id)
    .then(task => {
      if (!task) {
        return res.status(404).send({ message: 'Task not found' })
      }
      return task
      .destroy()
      .then(() => res.status(200).json({ status: 'Deleted one task', task }))
      .catch(error => console.log(error));
    })
    .catch(error => console.log(error));
  },
};