const express = require('express');

const router = express.Router();

router.use('/users', require('./users'));
router.use('/books', require('./books'));
router.use('/classes', require('./classes'));
router.use('/images', require('./images'));
router.use('/payments', require('./payments'));


module.exports = router;
