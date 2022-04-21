const express = require('express');
const dotenv = require('dotenv');
const bodyParser = require('body-parser');
const cors = require('cors');
const errorHandler = require('./src/middleware/errorHandler')
// const routes = require('./src/routes');
const endpoints = require('./src/routes').Router;

dotenv.config();
require('./src/config/sequelize');

const app = express();

app.use(
  bodyParser.urlencoded({
    extended: true,
  }),
);

app.use(cors());
app.use(bodyParser.json());
app.use('/', endpoints);
app.use(errorHandler);

module.exports = app;
