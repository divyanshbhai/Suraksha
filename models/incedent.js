const mongoose = require('mongoose');

const IncedentSchema = new mongoose.Schema({
  Country: {
    type: String,
    required: true
  },
  City: {
    type: String,
    required: true
  },
  For: {
    type: String,
    required: true
  },
  age: {
    type: Number,
    required: true
  },
  gender: {
    type: String,
    required: true
  },
  what: {
    type: String,
    required: true
  },
  when: {
    type: Date,
    required: true
  },
  Time: {
    type: String, 
    required: true
  },
  type: {
    type: [String],
    required: true
  },
  reported: {
    type: String,
    required: true
  },
  feel: {
    type: [String],
    required: true
  },
  experience: {
    type: String,
  },
  location: {
    lat: {
      type: Number,
      required: true
    },
    long: {
      type: Number,
      required: true
    }
  }
});

module.exports = mongoose.model('Incedent', IncedentSchema);
