const express = require('express');
const userApi = require('./api/user');

const postApi = require('./api/post')
const database = require('./config/database');

const userRoutes = require('./routes/userRoutes');
const categoriaMovimentacaoRoutes = require('./routes/categoriaMovimentacaoRoutes');
const movimentacaoRoutes = require('./routes/movimentacaoRoutes')
const subCategoriaMovimentacaoRoutes = require('./routes/subCategoriaMovimentacaoRoutes')

console.log('Starting server....')
const app = express()
app.use(express.json())

app.get('/', (req, res) => {
    res.send({ response: 'Hello World!' });
})
app.post('/login', userApi.login);
app.post('/users', userApi.criarUsuario);

// Aplica a validação do token para as rotas abaixo
app.use(userApi.validarToken);
app.use(userRoutes);
app.use(movimentacaoRoutes)
app.use(categoriaMovimentacaoRoutes)
app.use(subCategoriaMovimentacaoRoutes)


database.db.sync({ force: true })
    .then(() => {
        app.listen(3000, () => {
            console.log('Server is running on port 3000')
        })
    })
    .catch((error) => {
        console.error('Error connecting to the database', error);
    });

