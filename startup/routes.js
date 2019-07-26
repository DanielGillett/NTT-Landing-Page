const express = require('express');
const helmet = require('helmet');
// const path = require('path');
const cookieParser = require('cookie-parser');
const index = require('../routes/index');
const error = require('../middleware/error');

module.exports = function (app) {

    // app.set('views', path.join(__dirname, 'views'));
    app.set('view engine', 'ejs');

    app.use(helmet());
    app.use(express.json());
    app.use(cookieParser());
    app.use(express.urlencoded({ extended: false }));
    // app.use(express.static(path.join(__dirname, 'public')));

    app.use('/', index);
    app.use(error);

}

