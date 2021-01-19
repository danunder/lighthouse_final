const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');

const address = require('./routes/address');

const app = express();

const db = require('./db');
const dbHelpers = require('./helpers/dbHelpers')(db);
// console.log(dbHelpers);
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
// app.use(express.static(path.join(__dirname, 'public')));

app.use('/api/', address(dbHelpers));

module.exports = app;
