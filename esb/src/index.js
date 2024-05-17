const express = require('express');
const fetch = require('node-fetch');

const app = express()
app.use(express.json())

app.get('/movimentacoes', (req, res) => {
    fetch('http://localhost:3000/movimentacao')
    .then(response => response.json()) // Converte a resposta para JSON
    .then(data => {
        res.send(data);
    })
    .catch(error => {
        console.error('Error:', error);
    });
});

app.get('/categoria/:id', (req, res) => {
    fetch(`http://localhost:3000/categoria/${Number(req.params.id)}`)
    .then(response => response.json()) // Converte a resposta para JSON
    .then(data => {
        res.send(data);
    })
    .catch(error => {
        console.error('Error:', error);
    });
});

app.get('/subcategoria/:id', (req, res) => {
    fetch(`http://localhost:3000/subCategoria/${Number(req.params.id)}`)
    .then(response => response.json()) // Converte a resposta para JSON
    .then(data => {
        res.send(data);
    })
    .catch(error => {
        console.error('Error:', error);
    });
});

app.get('/tipoMovimentacao/:id', (req, res) => {
    fetch(`http://localhost:3000/tipoMovimentacao/${Number(req.params.id)}`)
    .then(response => response.json()) // Converte a resposta para JSON
    .then(data => {
        res.send(data);
    })
    .catch(error => {
        console.error('Error:', error);
    });
});






app.listen(3001, () => {
    console.log('Server is running on port 3001')
})

