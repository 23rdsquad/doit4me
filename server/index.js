const express = require('express');
const session = require('express-session');
const bodyParser = require('body-parser');
const router = require('express').Router();

const swaggerUi = require('swagger-ui-express'),
    swaggerDocument = require('./swagger.json');

require('dotenv').config();

const app = express();
app.use(bodyParser.json());
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));
app.use('/api/v1', router);

// Middleware initializtion
const checkForSession = require('./middlewares/checkForSession');

// Session initialization
app.use( session({
  secret: process.env.SECRET_KEY,
  saveUninitialized: false,
  resave: false,
  cookie: {
    maxAge: 200 * 1000
  }
}));

// Using session middleware
app.use( checkForSession );

// Connecting controllers
const users_controller = require('./controllers/users_controller');
const tasks_controller = require('./controllers/tasks_controller');
const reviews_controller = require('./controllers/reviews_controller');


app.post('/register', users_controller.register);
app.post('/login', users_controller.login);
app.post('/logout', users_controller.logout);

app.post('/user/create', users_controller.createUser);
app.get('/users', users_controller.getAllUsers);
app.get('/user/get/:id', users_controller.getSingleUser);
app.put('/user/update/:id', users_controller.updateUser);
app.delete('/user/delete/:id', users_controller.destroyUser);

app.post('/task/create', tasks_controller.createTask);
app.get('/tasks', tasks_controller.getAllTasks);
app.get('/task/get/:id', tasks_controller.getSingleTask);
app.get('/task/get/all/:user_id', tasks_controller.getTasksByUserId);
app.put('/task/update/:id', tasks_controller.updateTask);
app.delete('/task/delete/:id', tasks_controller.destroyTask);

app.post('/review/create', reviews_controller.createReview);
app.get('/reviews', reviews_controller.getAllReviews);
app.get('/review/get/:id', reviews_controller.getSingleReview);
app.get('/review/get/all/:user_id', reviews_controller.getReviewsByUserId);
app.put('/review/update/:id', reviews_controller.updateReview);
app.delete('/review/delete/:id', reviews_controller.destroyReview);

const port = process.env.BACKEND_PORT;
const server = app.listen( port, () => console.log(`Listening on port: ${port}`) );