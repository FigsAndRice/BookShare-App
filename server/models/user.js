const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const passportLocalMongoose = require('passport-local-mongoose');

var User = new Schema({
  username: {type: String, required: true},
  password: {type: String, required: true},
  firstName: {type: String, required: true},
  lastName: {type: String, required: true},
  email: {
        type: String,
        trim: true,
        lowercase: true,
        unique: true,
        required: 'Email address is required',
        validate: [validateEmail, 'Please fill a valid email address'],
        match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'Please fill a valid email address']
  },
  phone: {type: Number, required: true},
  books: {type: Schema.Types.ObjectId, ref: 'Book'},
  favorites: {type: Schema.Types.ObjectId, ref: 'Book'},
  cart: {type: Schema.Types.ObjectId, ref: 'Book'}
});

User.plugin(passportLocalMongoose);

module.exports = mongoose.model('User', User);
