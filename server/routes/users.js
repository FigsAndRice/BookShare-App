const express = require('express');

const router = express.Router();
const passport = require('passport');

const User = require('../models/user');

const dotenv = require('dotenv');
dotenv.load();

const helper = require('sendgrid').mail;

const sg = require('sendgrid')(process.env.SENDGRID_API_KEY);

router.route('/')
  .get((req,res) => {
    User.find({},(err, users) => {
      res.status(err ? 400 : 200).send(err || users);
    }).populate('favorites cart')
  })
  .post((req,res) => {
    User.create(req.body,(err, user) => {
      res.status(err ? 400 : 200).send(err || user);
    })
  });

router.route('/register')
  .get((req, res) => {
    res.redirect('/');
  })
  .post((req, res) => {
    User.register(new User({
      username: req.body.username,
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      email: req.body.email,
      phone: req.body.phone,
      picture: req.body.picture
    }), req.body.password, (err, user) => {
      if (err) {
        console.error(err);
        res.redirect('/');
      } else {
        passport.authenticate('local')(req, res, () => {
          req.session.save((err) => {
            if (err) {
              return next(err);
            }

            let from_email = new helper.Email('admin@bookshare.tk');
            const to_email = new helper.Email(req.body.email);
            const subject = `Thank you for registering`;
            let content = new helper.Content('text/plain',
              `Hello ${req.body.firstName},

              Thank you for registering with BookShare! Now you can buy and sell books with other students.

              Please keep the following information for your records:
              - username: ${req.body.username}
              - email: ${req.body.email}

              If you forget your username or password, you can use the email you registered with above to generate a new password.

              Enjoy!

              - The BookShare Team
              `
            );
            let mail = new helper.Mail(from_email, subject, to_email, content);

            let request = sg.emptyRequest({
              method: 'POST',
              path: '/v3/mail/send',
              body: mail.toJSON(),
            });

            sg.API (request, function(error, response) {
              console.log(response.statusCode);
              console.log(response.body);
              console.log(response.headers);
            });
          });
        });
      }
    })
  });

router.post('/login', passport.authenticate('local'), ((req, res) => {
  User.findOne({username: req.body.username}, (err, user) => {
    res.status(err ? 400 : 200).send(err || user);
  }).populate('favorites cart');
}));

router.post('/logout', ((req,res) => {
  req.session.destroy((err) => {
    res.clearCookie('connect.sid', { path: '/' });
    res.redirect('/');
  });
}));


router.route('/:id')
  .get((req, res) => {
    User.find(req.params.id,(err, user) => {
      res.status(err ? 400 : 200).send(err || user);
    }).populate('favorites cart');
  })
  .put((req, res) => {
    User.findByIdAndUpdate(req.params.id, {$set : req.body}, {new : true}, (err, user) => {
      if (err) res.status(400).send(err);
      User.findById(req.params.id, (err, user) => {
        res.status(err ? 400 : 200).send(err || user)
      }).populate('favorites cart');
   });
  })
  .delete((req,res) => {
    User.findByIdAndRemove(req.params.id, (err, user) => {
      res.status(err ? 400 : 200).send(err || user.username + " deleted");
    });
  });

router.put('/:userId/addFavorite/:bookId', (req, res) => {
  User.findByIdAndUpdate(req.params.userId, { $addToSet: { "favorites": req.params.bookId}}, { new: true }, (err, user) => {
    if (err) res.status(400).send(err);
    User.findById(req.params.userId, (err, user) => {
      res.status(err ? 400 : 200).send(err || user)
    }).populate('favorites cart');
  });
});

router.put('/:userId/removeFavorite/:bookId', (req, res) => {
  User.findByIdAndUpdate(req.params.userId, { $pull: { "favorites": req.params.bookId } }, { new: true }, (err, user) => {
    User.findById(req.params.userId, (err, user) => {
      res.status(err ? 400 : 200).send(err || user)
    }).populate('favorites cart');
  })
});

router.put('/:userId/addToCart/:bookId', (req, res) => {
  User.findByIdAndUpdate(req.params.userId, { $addToSet: {"cart": req.params.bookId}}, { new: true }, (err, user) => {
    if (err) res.status(400).send(err);
    User.findById(req.params.userId, (err, user) => {
      res.status(err ? 400 : 200).send(err || user)
    }).populate('favorites cart');
  });
});

router.put('/:userId/removeFromCart/:bookId', (req, res) => {
  User.findByIdAndUpdate(req.params.userId, { $pull: { 'cart': req.params.bookId } }, { new: true }, (err, user) => {
    if (err) res.status(400).send(err);
    User.findById(req.params.userId, (err, user) => {
      res.status(err ? 400 : 200).send(err || user)
    }).populate('favorites cart');
  });
});

module.exports = router;
