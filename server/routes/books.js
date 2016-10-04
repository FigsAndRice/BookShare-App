const express = require('express');

const router = express.Router();
const multer = require('multer');

const Book = require('../models/book');
const Image = require('../models/image');

const upload = multer({ storage: multer.memoryStorage() });

router.get('/', (req, res) => {
  Book.find({}, (err, books) => {
    res.status(err ? 400 : 200).send(err || books);
  }).populate('owner');
});

router.post('/', (req, res) => {
  Book.create(req.body, (err, book) => {
    res.status(err ? 400 : 200).send(err || book);
  });
});

router.get('/:isbn', (req, res) => {
  Book.find({ isbn: req.params.isbn }, (err, books) => {
    res.status(err ? 400 : 200).send(err || books);
  }).populate('owner');
});

router.get('/owner/:ownerid', (req, res) => {
  Book.find({ owner: req.params.ownerid }, (err, books) => {
    res.status(err ? 400 : 200).send(err || books);
  });
});

router.delete('/removePicture/:bookid', (req, res) => {
  Book.findOneById(req.params.bookid, (err, book) => {
    book.pictures.map((pic) => {
      Image.findOneAndRemove({ _id: pic }, Image.RemoveMiddlware, err => {
        if (err) return err;
        return;
      });
    });
    Book.findOneByIdAndRemove(req.params.bookid, (err) => {
      if (err) res.status(400).send(err);
      res.status(200).send();
    });
  });
});

router.put('/edit/:id', (req, res) => {
  Book.findByIdAndUpdate(req.params.id, { $set: req.body }, { new: true })
    .then(() => res.send())
    .catch(err => res.status(400).send(err));
});

router.delete('/:id', (req, res) => {
  Book.findByIdAndRemove(req.params.id, (err) => {
    if (err) return res.status(400).send(err);
    res.send();
  });
});

router.put('/:bookid/addImage', upload.single('image'), (req, res) => {
  Image.upload(req.file, (err, photo) => {
    if (err) return res.status(400).send(err);
    Book.findById(req.params.bookid, (err, book) => {
      if (err || !book) {
        return res.status(400).send(err || 'Book not Found!');
      }
      book.pictures.push(photo._id);
      book.save((err) => {
        if (err) res.status(400).send(err);
        res.send();
      });
    }).populate('owner');
  });
});

router.put('/:bookid/changeOwner/:ownerid', (req, res) => {
  Book.findByIdAndUpdate(req.params.bookid,
    { $set: { owner: req.params.ownerid } },
    { new: true }, (err, book) => {
      res.status(err ? 400 : 200).send(err || book);
    });
});

router.put('/:bookid/:classid', (req, res) => {
  Book.findByIdAndUpdate(req.params.bookid,
    { $set: { class_name: req.params.classid } },
    { new: true }, (err, book) => {
      res.status(err ? 400 : 200).send(err || book);
    });
});

router.delete('/:bookid/:imageid', Image.RemoveMiddleware, (req, res) => {
  Image.findOneById({ _id: req.params.imageid })
    .exec((err, image) => {
      Image.deleteLink(image.url, (err) => {
        Book.findOneAndUpdate(
          { _id: req.params.bookid },
          { $pull: { pictures: req.params.imageid } },
          { new: true },
          (err, removedFromBook) => {
            if (err) res.status(400).send(err);
            res.status(200).send();
          }
        );
      });
    });
});

module.exports = router;
