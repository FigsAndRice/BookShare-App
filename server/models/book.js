const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const bookSchema = new mongoose.Schema({
  isbn: { type: String, required: true },
  price: { type: Number },
  condition: { type: String },
  time: { type: Date, default: Date.now },
  forSale: { type: Boolean, default: false},
  owner: { type: Schema.Types.ObjectId, ref: 'User'},
  pictures: [{ type: Schema.Types.ObjectId, ref: 'Image' }],
  class_name: { type: Schema.Types.ObjectId, ref: 'Class'}
})

const Book = mongoose.model('Book', bookSchema);

module.exports = Book;
