require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
app.use(cors());
app.use(bodyParser.json());

// Conexão com MongoDB Atlas
mongoose.connect(process.env.MONGO_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log('✅ Conectado ao MongoDB com sucesso!'))
.catch(err => {
  console.error('❌ Erro ao conectar ao MongoDB:', err.message);
  process.exit(1);
});

// Rotas
app.use('/api/formularios', require('./routes/formularios'));
app.use('/api/users', require('./routes/user'));

// Inicialização do servidor
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`🚀 Servidor rodando na porta ${PORT}`));
