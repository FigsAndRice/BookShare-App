const express = require('express');
const multer = require('multer');

const Image = require('../models/image');
const upload = multer({ storage: multer.memoryStorage() });
const router = express.Router();

router.post('/',upload.single('img'),(req,res)=>{
  Image.upload(req.file,(err,image)=>{
    res.status(err?400:200).send(console.log(err)||image);
  });
});

router.delete('/:id',(req,res)=>{
  Image.deleteAWS(req.params.id,(err,data)=>{
    res.status(err?400:200).send(err||data);
  });
});

module.exports = router;
