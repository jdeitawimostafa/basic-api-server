'use strict';

const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const app = express();
const notFoundHndler = require('./error-handlers/404.js');
const errorHandler = require('./error-handlers/500.js');
const foodRoute = require('../src/routes/food.js');
const clothesRoute = require('../src/routes/clothes');


app.use(express.json());
app.use(morgan('dev'));
app.use(cors());
app.use('/api/v1/food',foodRoute);
app.use('/api/v1/clothes',clothesRoute);
app.use('*', notFoundHndler);
app.use(errorHandler);

function start(port){
  app.listen(port,() => {
    console.log(`listining to port ${port}`);
  });
}

module.exports = {
  server:app,
  start:start,
};
