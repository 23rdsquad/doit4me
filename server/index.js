const express = require('express');
const bodyParser = require('body-parser');

require('dotenv').config();

const app = express();
app.use(bodyParser.json());

const users_controller = require('./controllers/users_controller');

app.get('/check', users_controller.check);

app.post('/user/create', users_controller.createUser);
app.get('/user', users_controller.getAllUsers);
app.get('/user/get/:id', users_controller.getSingleUser);
app.put('/user/update/:id', users_controller.updateUser);
app.delete('/user/delete/:id', users_controller.destroyUser);

const port = process.env.BACKEND_PORT;
const server = app.listen( port, () => console.log(`Listening on port: ${port}`) );