'use strict';

const express = require('express');
const notFound = require('./404.js');
const errorHandler = require ('./error')

const app = express();

const PORT = process.env.PORT || 8080;

let requestTime = function (req, res, next) {
  req.requestTime = Date(Date.now());
  console.log(req.requestTime, ' in the fuction')
  next();
};

app.use(requestTime);


app.get('/a', (req,res) => {
  res.status(200).send('Route A');
});

app.get('/b', (req,res) => {
  res.status(200).send('Route B');
});

app.get('/c', (req,res) => {
  res.status(200).send('Route C');
});

app.get('/d', (req,res) => {
  if('/d'==='/d'){
    throw errorHandler;
  }
  res.status(200).send('Route D');
});

app.use('*', notFound);

app.use(errorHandler);

app.listen(PORT, () => console.log(`Listening on ${PORT}`));

