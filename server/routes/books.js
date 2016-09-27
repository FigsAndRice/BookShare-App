const express = require('express');
const router = express.Router();

const Book = require('../models/book');


router.get('/', (req, res) => {
  Book.find({}, (err, books) => {
    res.status(err ? 400 : 200).send(err || books)
  })
})

router.get('/:isbn', (req, res) => {
  Book.find({ isbn: req.params.isbn }, (err, books) => {
    res.status(err ? 400 : 200).send(err || books)
  })
})

router.delete('/:id', (req, res) =>{
  Book.findByIdAndRemove(req.params.id, err => {
    if(err) return res.status(400).send(err)
    res.send()
  })
})

router.put('/:bookid/addImage', upload.single('image'), (req, res) =>{
  Photo.upload(req.file, (err, photo) => {
    if (err) return res.status(400).send(err)
    Book.findById(req.params.bookid), (err, book) => {
      if(err || !book){
        return res.status(400).send(err || 'Book not Found!')
      }
      book.pictures.push(photo._id);
      book.save(err =>{
        res.send();
      })
    }
  })
})

module.exports = router;
