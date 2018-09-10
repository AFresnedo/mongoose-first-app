// require mongoose node module
const mongoose = require('mongoose');

// connect to your database named hellowdi20 (find or create)
mongoose.connect(process.env.MONGOOSE_URL ||
'mongodb://localhost:27017/hellowdi20', { useNewUrlParser: true });

// gather up models
module.exports.User = require('./user');
