const express = require('express');
const bodyParser = require('body-parser');

require('dotenv').config();

const app = express();
app.use(bodyParser.json());

const users_controller = require('./controllers/items_controller');

app.post('/item/create', items_controller.createItem);
app.get('/items', items_controller.getAllItems);

const port = process.env.BACKEND_PORT;
const server = app.listen( port, () => console.log(`Listening on port: ${port}`) );