const mongoose = require('mongoose');

const passportLocalMongoose = require('passport-local-mongoose');

const Schema = mongoose.Schema;

const validateEmail = (email) => {
  const re = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  return re.test(email);
};

const User = new Schema({
  username: { type: String, required: true },
  password: { type: String },
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  email: {
    type: String,
    trim: true,
    lowercase: true,
    unique: true,
    required: 'Email address is required',
    validate: [validateEmail, 'Please fill a valid email address'],
    match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'Please fill a valid email address']
  },
  phone: { type: Number, required: true },
  favorites: [{ type: Schema.Types.ObjectId, ref: 'Book' }],
  cart: [{ type: Schema.Types.ObjectId, ref: 'Book' }],
  picture: { type: String, default: 'http://www.biglunchextras.com/sites/default/files/user-default.png' }
});

User.plugin(passportLocalMongoose);

module.exports = mongoose.model('User', User);
