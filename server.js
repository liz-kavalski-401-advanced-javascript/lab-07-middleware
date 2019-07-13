'use strict';

const express = require('express');
const notFound = require('./404.js');
const errorHandler = require ('./error.js')

const app = express();

const PORT = process.env.PORT || 8080;

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
  res.status(200).send('Route D');
});

app.use('*', notFound);

app.use(errorHandler);

app.listen(PORT, () => console.log(`Listening on ${PORT}`));

