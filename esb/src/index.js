const express = require('express');

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


app.listen(3001, () => {
    console.log('Server is running on port 3001')
})

