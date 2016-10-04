
const mongoose = require('mongoose');

const classSchema = new mongoose.Schema({
  class_name: { type: String, required: true },
  department: { type: String, required: true },
  section: { type: String, required: true }
});

const Class = mongoose.model('Class', classSchema);

module.exports = Class;
