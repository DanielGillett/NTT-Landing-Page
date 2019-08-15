const express = require('express');
const path = require('path');

const app = express();

app.set('views', path.join(__dirname, 'views'));
app.use(express.static(path.join(__dirname, 'public')));

require('./startup/logging')(app);
require('./startup/routes')(app);

module.exports = app;


