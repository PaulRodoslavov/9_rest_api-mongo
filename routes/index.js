"use strict";

const Course = require('../models/course').Course;
const User = require('../models/users').User;
const express = require('express');
const router = express.Router();
// const Users = require('./models').User;


// setup a friendly greeting for the root route
router.get('/', (req, res) => {
  res.json({
    message: 'Welcome to the REST API project!',
  });
});

router.get('/api/courses', (req, res, next) => {
   Course.find({})
      .exec(function(err, questions){
         if(err) return next(err);
         res.json(questions);
      });
});

router.get('/api/users', (req, res, next) => {
   User.find({})
      .exec(function(err, questions){
         if(err) return next(err);
         res.json(questions);
      });
});

router.get('/api/users', (req, res) => {
   res.json({
      temporary: "wait for database"
   })
});

module.exports = router;
