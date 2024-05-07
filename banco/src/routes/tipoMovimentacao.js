const express = require('express');
const tipoMovimentacao = require('../api/tipoMovimentacao');
const app = express()

const router = express.Router();

app.get('/tipoMovimentacao', tipoMovimentacao.listarTipoMovimentacoes);
app.put('/tipoMovimentacao/:id', tipoMovimentacao.alterarTipoMovimentacao);
app.delete('/tipoMovimentacao/:id', tipoMovimentacao.deletarTipoMovimentacao);
app.post('/tipoMovimentacao', tipoMovimentacao.criarTipoMovimentacao);
app.get('/tipoMovimentacao', tipoMovimentacao.buscarPorId)

module.exports = router;
