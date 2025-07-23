const mongoose = require('mongoose');

const FormularioSchema = new mongoose.Schema({
  nome: String,
  email: String,
  respostas: Object,
  criadoEm: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Formulario', FormularioSchema);