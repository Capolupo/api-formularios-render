const mongoose = require('mongoose');

const FormItemCheckBoxesSchema = new mongoose.Schema({
  label: { type: String, required: true },
  value: { type: String, required: true },
  id: { type: String, required: true },
}, { _id: false });

const FormItemSchema = new mongoose.Schema({
  kind: { type: String, required: true },
  title: { type: String, required: true },
  options: [{ type: String }],
  check_boxes: [FormItemCheckBoxesSchema],
  value: { type: String }, // Armazenar o valor | Importante armazenar por conta de campos como date e time
}, { _id: false });

const FormularioSchema = new mongoose.Schema({
  title: { type: String, required: true },
  status: { type: String, required: true },
  questions: [FormItemSchema],
  created_at: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Formulario', FormularioSchema);