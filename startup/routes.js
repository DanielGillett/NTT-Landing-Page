"use strict";

//const express = require('express');
var helmet = require('helmet');

var bodyParser = require('body-parser');

var cookieParser = require('cookie-parser');

var index = require('../src/routes/index');

var error = require('../middleware/error');

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