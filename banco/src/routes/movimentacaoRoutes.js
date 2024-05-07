const express = require('express');
const movimentacaoApi = require('../api/movimentacao');
const app = express()

const router = express.Router();

app.get('/movimentacao', movimentacaoApi.listarMovimentacoes);
app.put('/movimentacao/:id', movimentacaoApi.alterarMovimentacao);
app.delete('/movimentacao/:id', movimentacaoApi.deletarMovimentacao);
app.post('/movimentacao', movimentacaoApi.criarMovimentacao);
app.get('/movimentacao', movimentacaoApi.buscarPorId)

module.exports = router;
