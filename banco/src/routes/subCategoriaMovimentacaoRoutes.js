const express = require('express');
const subCategoriaMovimentacaoApi = require('../api/subCategoriaMovimentacao');
const app = express()

const router = express.Router();

app.get('/subCategoriaMovimentacao', subCategoriaMovimentacaoApi.listarSubCategoria);
app.put('/subCategoriaMovimentacao/:id', subCategoriaMovimentacaoApi.alterarSubCategoria);
app.delete('/subCategoriaMovimentacao/:id', subCategoriaMovimentacaoApi.deletarSubCategoria);
app.post('/subCategoriaMovimentacao', subCategoriaMovimentacaoApi.criarSubCategoria);
app.get('/subCategoriaMovimentacao', subCategoriaMovimentacaoApi.buscarPorId)

module.exports = router;
