const express = require('express');
const router = express.Router();

router.use('/users', require('./users'));
router.use('/books', require('./books'));
router.use('/classes', require('./classes'));

module.exports = router;
