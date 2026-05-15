const mongoose = require('mongoose')

const memberSchema = new mongoose.Schema({
  name:        { type: String, required: true },
  role:        { type: String, required: true },
  description: { type: String, default: '' },
  skills:      { type: [String], default: [] },
  imageUrl:    { type: String, default: null },
}, { timestamps: true })

module.exports = mongoose.model('Member', memberSchema)
