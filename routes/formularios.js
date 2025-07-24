const express = require('express');
const router = express.Router();
const Formulario = require('../models/Formulario');

router.post('/', async (req, res) => {
  try {
    console.log('test access')
    const novo = new Formulario(req.body);
    await novo.save();
    res.status(201).json(novo);
  } catch (err) {
    res.status(500).json({ erro: err.message });
  }
});

router.get('/', async (req, res) => {
  try {
    const formularios = await Formulario.find();
    res.json(formularios);
  } catch (err) {
    res.status(500).json({ erro: err.message });
  }
});

router.put('/:id', async (req, res) => {
  try {
    const atualizado = await Formulario.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(atualizado);
  } catch (err) {
    res.status(500).json({ erro: err.message });
  }
});

router.delete('/:id', async (req, res) => {
  try {
    await Formulario.findByIdAndDelete(req.params.id);
    res.json({ mensagem: 'Deletado com sucesso' });
  } catch (err) {
    res.status(500).json({ erro: err.message });
  }
});

module.exports = router;