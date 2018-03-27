const mongoose = require('mongoose');
mongoose.Promise = global.Promise;
const md5 = require('md5');
const validator = require('validator');
const mongoErrHandler = require('mongoose-mongodb-errors');
const passport = require('passport-local-mongoose');

const userSchema = new mongoose.Schema({
  email: {
    type: String,
    unique: true,
    lowercase: true,
    trim: true,
    validate: [validator.isEmail, 'Email is not valid'],
    required: 'Email is required',
  },
  name: {
    type: String,
    trim: true,
    required: 'Name is required',
  },
});

userSchema.virtual('gravatar').get(function () {
  const hash = md5(this.email);
  return `https://gravatar.com/avatar/${hash}?s=200`;
});

userSchema.plugin(passport, { usernameField: 'email' });
userSchema.plugin(mongoErrHandler);

module.exports = mongoose.model('User', userSchema);
