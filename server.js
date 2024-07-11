const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors()); // Permite todas as origens. Para uma origem específica, use: cors({ origin: 'http://seu-dominio.com' })
app.use(express.json());

let produtos = [];

// Rota para listar produtos
app.get('/produtos', (req, res) => {
    res.json(produtos);
});

// Rota para criar produto
app.post('/produtos', (req, res) => {
    const produto = req.body;
    produtos.push(produto);
    res.status(201).json(produto);
});

// Rota para eliminar produto
app.delete('/produtos/:id', (req, res) => {
    const { id } = req.params;
    produtos = produtos.filter(prod => prod.id !== id);
    res.status(200).json({ message: 'Produto eliminado' });
});

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});
