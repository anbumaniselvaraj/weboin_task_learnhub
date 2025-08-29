const mongoose = require('mongoose');

const formSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  role: { type: String, required: true },
  phone: { type: String, required: true },
  course: { type: String, required: true },
  status: { type: String, default: 'Unplaced' },
}, { timestamps: true });

module.exports = mongoose.model('userForm', formSchema);