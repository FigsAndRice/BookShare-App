const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const bookSchema = new mongoose.Schema({
  title: { type: String, required: true },
  author: { type: String, required: true },
  cover: { type: String, required: true },
  isbn: { type: String, required: true },
  price: { type: Number },
  picture: { type: String },
  condition: { type: String },
  time: { type: Date, default: Date.now },
  forSale: { type: Boolean, default: false },
  owner: { type: Schema.Types.ObjectId, ref: 'User', required: true }
});

const Book = mongoose.model('Book', bookSchema);

module.exports = Book;
