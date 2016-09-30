const BUCKET_NAME = 'bookshare456';
const AWS_URL_BASE = 'https://s3-us-west-2.amazonaws.com/';
const mongoose = require('mongoose');
const uuid = require('uuid');
const path = require('path');
require('dotenv').config();
const AWS = require('aws-sdk');
const async = require('async');

const ImageSchema = new mongoose.Schema({
  url: {type: String, required: true},
  Key: {type:String,required:true},
  date: {type: Date, default: Date.now}
});

const AWS_ACCESS_KEY_ID = process.env.AWS_ACCESS_KEY_ID;
const AWS_SECRET_KEY = process.env.AWS_SECRET_KEY;

AWS.config = {
  "accessKeyId": AWS_ACCESS_KEY_ID,
  "secretAccessKey": AWS_SECRET_KEY
}

const s3 = new AWS.S3();
s3.config.credentials.filename = '';

ImageSchema.statics.upload = function(fileObj, cb) {

  let { originalname, buffer } = fileObj;


  let Key = uuid() + path.extname(originalname);

  let params = {
    Bucket: BUCKET_NAME,
    Key,
    ACL: 'public-read',
    Body: buffer
  };

  s3.putObject(params,(err,result)=>{
    if (err) return cb(err);

      let url = `https://s3.amazonaws.com/${BUCKET_NAME}/${Key}`;
      this.create({name: originalname,url,Key},cb);
  });
};

ImageSchema.statics.deleteLink = function(url, cb) {
  let Key = url.split('/')[5];
  let params = {
    Bucket: BUCKET_NAME,
    Key
  }

  s3.deleteObject(params, (err, data) => {
    if (err) cb(err)  // error
    else  cb(null, data)// deleted
  });
}

ImageSchema.statics.RemoveMiddleware = function(req , res, next) {
  let id = req.params.id
  mongoose.model('Book').find({}, (err, books) => {
    if(err) return res.status(400).send('Error finding books')

    async.each(books, (book, asyncCb) => {

      book.pictures = book.pictures.filter(picture => picture != id)

      book.save(err => {
      if (err) return res.status(400).send(err)
        asyncCb();
      });

    }, err => {
      if (err) res.status(400).send(err);
      next();
    });
  });
};

const Image = mongoose.model('Image', ImageSchema);

module.exports = Image;
