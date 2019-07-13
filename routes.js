'use strict'
const express = require('express');
const errorHandler= require('./error');
const router= express.Router();

router.get('/c', (req,res) => {
    res.status(200).send('Route C');
  });
  
router.get('/d', (req,res) => {
    if('/d'==='/d'){
    throw errorHandler;
    }
res.status(200).send('Route D');
});

module.exports= router;

  