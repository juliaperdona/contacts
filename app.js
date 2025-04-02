const express = require('express');
const cors = require('cors');
const contatoRoutes = require('./routes/contatoRoutes');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

// Rotas
app.use('/', contatoRoutes);

app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});