// imports
const mongoose = require('mongoose');

// local imports

// define the schema
const schema = mongoose.Schema;

const UserSchema = new schema({
    userName: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true
    },
    email: {
        type: String, 
        required: true,
    },
    joinDate: {
        type: Date,
        default: Date.now
    },
    favorites: {
        type: [schema.Types.ObjectId],
        ref: 'Recipes'
    }
})

module.exports = mongoose.model('User', UserSchema)