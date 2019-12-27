/* eslint-disable no-shadow */
/* eslint-disable consistent-return */
/* eslint-disable func-names */
// imports
const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

// local imports

// define the schema
const { Schema } = mongoose;

const UserSchema = new Schema({
  userName: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  joinDate: {
    type: Date,
    default: Date.now,
  },
  favorites: {
    type: [Schema.Types.ObjectId],
    ref: 'Recipes',
  },
});

UserSchema.pre('save', function(next) {
  // if the user already exists
  if (!this.isModified('password')) {
    return next();
  }

  bcrypt.genSalt(10, (err, salt) => {
    if (err) return next(err);
    bcrypt.hash(this.password, salt, (err, hash) => {
      if (err) return next(err);

      this.password = hash;
      next();
    });
  });
});

module.exports = mongoose.model('User', UserSchema);
