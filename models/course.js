'use strict';

const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const CourseSchema = new Schema({
  user: {
    type: Schema.Types.ObjectId,
    ref: 'users',
  },
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  estimatedTime: String,
  materialsNeeded: String,
});

const Course = mongoose.model('course', CourseSchema);

module.exports.Course = Course;
