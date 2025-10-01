const mongoose = require('mongoose');

const AnswareItem = new mongoose.Schema({
  question_id: {type: String, required: true},
  answare_text: { type: String },
  answare_checkboxes: [{type: String}],
}, { _id: false });

const AnswareSchema = new mongoose.Schema({
  form_id: { type: String, required: true },
  user_id: { type: String, required: true},
  answares: [AnswareItem],
  created_at: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Answare', AnswareSchema);