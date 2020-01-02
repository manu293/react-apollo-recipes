// imports
const mongoose = require('mongoose');

// local imports

// creating a recipes schema
const { Schema } = mongoose;

const RecipeSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  category: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  instructions: {
    type: String,
    required: true,
  },
  createdDate: {
    type: Date,
    default: Date.now,
  },
  likes: {
    type: Number,
    default: 0,
  },
  userName: {
    type: String,
  },
});

RecipeSchema.index({
  '$**': 'text',
});

module.exports = mongoose.model('Recipe', RecipeSchema);
