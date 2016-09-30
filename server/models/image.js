const BUCKET_NAME = 'bookshare456';
const AWS_URL_BASE = 'https://s3-us-west-2.amazonaws.com/';
const mongoose = require('mongoose');
const uuid = require('uuid');
const path = require('path');

const AWS = require('aws-sdk');
const s3 = new AWS.S3();
const async = require('async');

const ImageSchema = new mongoose.Schema({
  url: {type: String, required: true},
  Key:{type:String,required:true},
  date: {type: Date, default: Date.now}
});

AWS.config.loadFromPath(path.join(__dirname,'./credential.json'));

ImageSchema.statics.upload = function(fileObj, cb) {

  let { originalname, buffer } = fileObj;


  let Key = uuid() + path.extname(originalname);

  let params = {
    Bucket: BUCKET_NAME,
    Key,
    ACL: 'public-read',
    Body: buffer
  };

  console.log("params",params);

  s3.putObject(params,(err,result)=>{
    if (err) return cb(err);

      let url = `${AWS_URL_BASE}/${BUCKET_NAME}/${Key}`;

      this.create({name: originalname,url,Key},cb);
    //cb(err,result);
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
