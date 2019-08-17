"use strict";

var express = require('express');

var path = require('path');

var logger = require('morgan');

var app = express();
app.use(logger('dev'));
app.set('views', path.join(__dirname, '../views'));
app.use(express["static"](path.join(__dirname, '../public')));

require('../startup/logging')(app);

require('../startup/routes')(app);

module.exports = app;