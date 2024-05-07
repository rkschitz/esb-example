const express = require('express');

const database = require('./config/database');

const userApi = require('./api/user');
const categoriaMovimentacaoApi = require('./api/categoriaMovimentacao');
const subCategoriaMovimentacaoApi = require('./api/subCategoriaMovimentacao');
const movimentacaoApi = require('./api/movimentacao');
const tipoMovimentacao = require('./api/tipoMovimentacao');

console.log('Starting server....')
const app = express()
app.use(express.json())

app.get('/', (req, res) => {
    res.send({ response: 'Hello World!' });
})
app.post('/login', userApi.login);
app.post('/users', userApi.criarUsuario);

// Aplica a validação do token para as rotas abaixo
// app.use(userApi.validarToken);

app.get('/users', userApi.listarUsuario);
app.put('/users/:id', userApi.alterarUsuario);
app.delete('/users/:id', userApi.deletarUsuario);

app.post('/categoria', categoriaMovimentacaoApi.criarCategoria);
app.get('/categoria', categoriaMovimentacaoApi.listarCategoria);
app.put('/categoria/:id', categoriaMovimentacaoApi.alterarCategoria);
app.delete('/categoria/:id', categoriaMovimentacaoApi.deletarCategoria);
app.get('/categoria/:id', categoriaMovimentacaoApi.buscarPorId);

app.get('/subCategoria', subCategoriaMovimentacaoApi.listarSubCategoria);
app.put('/subCategoria/:id', subCategoriaMovimentacaoApi.alterarSubCategoria);
app.delete('/subCategoria/:id', subCategoriaMovimentacaoApi.deletarSubCategoria);
app.post('/subCategoria', subCategoriaMovimentacaoApi.criarSubCategoria);
app.get('/subCategoria', subCategoriaMovimentacaoApi.buscarPorId)

app.get('/movimentacao', movimentacaoApi.listarMovimentacoes);
app.put('/movimentacao/:id', movimentacaoApi.alterarMovimentacao);
app.delete('/movimentacao/:id', movimentacaoApi.deletarMovimentacao);
app.post('/movimentacao', movimentacaoApi.criarMovimentacao);
app.get('/movimentacao', movimentacaoApi.buscarPorId)

app.get('/tipoMovimentacao', tipoMovimentacao.listarTipoMovimentacoes);
app.put('/tipoMovimentacao/:id', tipoMovimentacao.alterarTipoMovimentacao);
app.delete('/tipoMovimentacao/:id', tipoMovimentacao.deletarTipoMovimentacao);
app.post('/tipoMovimentacao', tipoMovimentacao.criarTipoMovimentacao);
app.get('/tipoMovimentacao', tipoMovimentacao.buscarPorId)

database.db.sync({ force: true })
    .then(() => {
        app.listen(3000, () => {
            console.log('Server is running on port 3000')
        })
    })
    .catch((error) => {
        console.error('Error connecting to the database', error);
    });

