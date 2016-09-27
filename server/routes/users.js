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

router.post('/login', passport.authenticate('local'), ((req, res) => {
  res.redirect(`/users/${res.req.user._id}`);
}));

router.post('/logout', ((req,res) => {
  req.logOut();
  req.session.destroy((err) => {
    res.redirect('/');
  });
}));

module.exports = router;
