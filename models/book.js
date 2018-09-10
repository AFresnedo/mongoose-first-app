const mongoose = require('mongoose');

const publisherSchema = new mongoose.Schema({
  name: String,
  year: Number
});

const bookSchema = new mongoose.Schema({
  title: String,
  pages: Number,
  author: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  publisher: publisherSchema
});

// publisher: [publisherSchema] would be multiple publishers
// it is a sub collection within bookSchmea
// [ { type: mong.... } ] would be an array of references to authors

module.exports = mongoose.model('Book', bookSchema);

// reference versus embedded:
// if piece moves from meusem would need to change embedded data (so use ref)
// peice's creator usually doesn't change (embedded, static data, incl & be
// done)
