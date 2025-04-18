const mongoose = require('mongoose');

const TipSchema = new mongoose.Schema({
  text: {
    type: String,
    required: true
  },
  date: {
    type: Date,
    required: true
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

module.exports = mongoose.model('Tip', TipSchema);