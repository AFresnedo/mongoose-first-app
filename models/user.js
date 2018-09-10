// require mongoose node module
const mongoose = require('mongoose');

// NOTE schema is important in mongoose
const userSchema = new mongoose.Schema({
  name: String,
  image: String,
  birthyear: Number,
  admin: Boolean
});

// create and export the user model
module.exports = mongoose.model('User', userSchema);
