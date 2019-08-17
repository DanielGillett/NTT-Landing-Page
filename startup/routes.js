"use strict";

//const express = require('express');
const helmet = require('helmet');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const index = require('../src/routes/index');
const error = require('../middleware/error');

module.exports = function (app) {
  app.set('view engine', 'ejs');
  app.use(helmet());
  app.use(cookieParser());
  app.use(bodyParser.urlencoded({
    extended: false
  }));
  app.use(bodyParser.json());
  app.use('/', index);
  app.use(error);
};