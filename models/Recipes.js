// imports
const mongoose = require('mongoose');

// local imports

// creating a recipes schema
const schema = mongoose.Schema;

const RecipeSchema = new schema({
    name: {
        type: String,
        required: true
    },
    category: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true
    },
    instructions: {
        type: String, 
        required: true
    },
    createdDate: {
        type: Date,
        default: Date.now
    },
    likes: {
        type: Number,
        default: 0
    },
    userName: {
        type: String,
    }
})

module.exports = mongoose.model('Recipe', RecipeSchema)