const express = require('express');
const path = require('path');
// const cookieParser = require('cookie-parser');
const logger = require('morgan');
const cors = require('cors');
const cookieSession = require('cookie-session');
const address = require('./routes/address');

const app = express();
const db = require('./db');
const dbHelpers = require('./helpers/dbHelpers')(db);
// console.log(dbHelpers);
app.use(cors());
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
// app.use(cookieParser());
app.use(
  cookieSession({
    name: 'session',
    keys: ['key1', 'key2'],
    maxAge: 24 * 60 * 60 * 1000, // 24 hours
  })
);
// app.use(express.static(path.join(__dirname, 'public')));

app.use('/api/', address(dbHelpers));

// maybe?? default error handling
// app.use(function (err, req, res, next) {
//   console.error(err.stack)
//   res.status(500).send(err)
// })

module.exports = app;
