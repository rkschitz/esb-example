const express = require('express');
const userApi = require('../api/user');
const app = express()

const router = express.Router();

app.get('/users', userApi.listarUsuario);
app.put('/users/:id', userApi.alterarUsuario);
app.delete('/users/:id', userApi.deletarUsuario);

module.exports = router;
