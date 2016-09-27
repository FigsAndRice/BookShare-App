const express = require('express');
const router = express.Router();
const passport = require('passport');

const User = require('../models/user');

router.route('/')
  .get((req,res) => {
    User.find({},(err, users) => {
      res.status(err ? 400 : 200).send(err || users);
    })
  })
  .post((req,res) => {
    User.create(req.body,(err, user) => {
      res.status(err ? 400 : 200).send(err || user);
    })
  })

router.route('/:id')
  .get((req,res) => {
    User.find(req.params.id,(err, user) => {
      res.status(err ? 400 : 200).send(err || user);
    })
  })
  .put((req,res) => {
    User.findByIdAndUpdate(req.params.id, {$set : req.body}, {new : true}, (err, user) => {
     if (err) {
       res.status(400).send(err);
     }else {
       res.status(err ? 400 : 200).send( err || user);
     }
   })
  })
  .delete((req,res) => {
    User.findByIdAndRemove(req.params.id, (err, user) => {
      res.status(err ? 400 : 200).send(err || user.username + " deleted");
    })
  })

router.route('/register')
  .get((req, res) => {
    res.redirect('/');
  })
  .post((req, res) => {
    User.register(new User({username: req.body.username}), req.body.password, (err, user) => {
      if (err) {
        console.error(err);
        res.redirect('/');
      } else {
        passport.authenticate('local')(req, res, () => {
          req.session.save((err) => {
            if (err) {
              return next(err);
            }
            res.redirect('/');
          })
        })
      }
    })
  })

router.route('/login')
  .get((req, res) => {
    console.log ('res:', res.data);
  })
  .post(passport.authenticate('local'), (req, res) => {
    // console.log ('req:', req.body);
    // console.log ('res:', res.req.user._id);
    //console.log ('res:', res);
    res.redirect(`/users/${res.req.user._id}`);
  })

router.route('/logout')
  .get((req, res) => {
    req.logout();
    res.redirect('/');
  })

module.exports = router;
