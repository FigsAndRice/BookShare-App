<<<<<<< HEAD
=======
const express = require('express');
const router = express.Router();

router.use('/users', require('./users'));
router.use('/books', require('./books'));
router.use('/classes', require('./classes'));

module.exports = router;
>>>>>>> a2eee0b52a366c17f8d04f82219ed0eb19531ad4
