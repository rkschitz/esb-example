const express = require('express');
const categoriaMovimentacaoApi = require('../api/categoriaMovimentacao');
const app = express()

const router = express.Router();

app.get('/categoria', categoriaMovimentacaoApi.listarCategoria);
app.put('/categoria/:id', categoriaMovimentacaoApi.alterarCategoria);
app.delete('/categoria/:id', categoriaMovimentacaoApi.deletarCategoria);
app.post('/categoria', categoriaMovimentacaoApi.criarCategoria);
app.get('/categoria/:id', categoriaMovimentacaoApi.buscarPorId);

module.exports = router;
