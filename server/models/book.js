const mongoose = require('mongoose');

const bookSchema = new mongoose.Schema({
  isbn: { type: String, required: true },
  price: { type: Number, required: true },
  condition: { type: String },
  time: { type: Date, default: Date.now },
  pictures: [{ type: Schema.Types.ObjectId, ref: 'Pic' }],
  class_name: { type: Schema.Types.ObjectId, ref: 'Class'}
})

const Book = mongoose.model('Book', bookSchema);

module.exports = Book;
