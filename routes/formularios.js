const express = require('express');
const router = express.Router();
const Formulario = require('../models/Formulario');
const Answare = require('../models/Answare');

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

router.get('/:id', async (req, res) => {
  try {
    const formulario = await Formulario.findById(req.params.id);
    res.json(formulario);
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

router.post('/answare', async (req, res) => {
  try{
    const answare = new Answare(req.body)
    await answare.save()
    console.log(req.body)

    res.status(200).json(answare)
  } catch(err) {
    console.log(req.body)
    console.error(err.message)
    res.status(500).json({erro: err.message})
  }
})

module.exports = router;