'use strict';

const express = require('express');
const notFound = require('./404.js');
const errorHandler = require ('./error');
const routes= require('./routes');
const app = express();

const PORT = process.env.PORT || 8080;

let requestTime = function (req, res, next) {
  req.requestTime = Date(Date.now());
  console.log(req.requestTime, ' in the fuction')
  next();
};

let newBMiddleware = function (number){
  // if (typeof number===Number){
    return function(req,res,next){
      req.number = number*number;
      console.log(req.number);
      next();
    }
    // }
  };
 

app.use(requestTime);


app.get('/a', (req,res) => {
  res.status(200).send('Route A');
});

app.get('/b',newBMiddleware(2), (req,res) => {
  res.status(200).send('Route B');
});

app.use(routes);

app.use('*', notFound);

app.use(errorHandler);

app.listen(PORT, () => console.log(`Listening on ${PORT}`));

