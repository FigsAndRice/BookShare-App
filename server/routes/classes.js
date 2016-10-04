const express = require('express');

const router = express.Router();

const Class = require('../models/class');

router.route('/')
      .get((req, res) => {
        Class.find({}, (err, courses) => {
          res.status(err ? 400 : 200).send(err || courses);
        });
      })
      .post((req, res) => {
        Class.create(req.body, (err, course) => {
          res.status(err ? 400 : 200).send(err || course);
        });
      });

router.route('/:id')
      .get((req, res) => {
        Class.find(req.params.id, (err, course) => {
          res.status(err ? 400 : 200).send(err || course);
        });
      })
      .put((req, res) => {
        Class.findByIdAndUpdate(req.params.id,
          { $set: req.body },
          { new: true },
          (err, course) => {
            if (err) {
              res.status(400).send(err);
            } else {
              res.status(err ? 400 : 200).send(err || course);
            }
          });
      })
      .delete((req, res) => {
        Class.findByIdAndRemove(req.params.id, (err, course) => {
          res.status(err ? 400 : 200).send(err || `${course.class_name} deleted`);
        });
      });


module.exports = router;
