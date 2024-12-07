const express = require('express');
const router = express.Router();

// Exemplo de rota GET
router.get('/', (req, res) => {
    res.status(200).json([
        {
            id: 1,
            nome: "Fusca",
            fabricante: "Volkswagen",
            ano: 1976,
            combustivel: "Gasolina",
            cor: "Azul",
            preco: 15000
        },
        {
            id: 2,
            nome: "Civic",
            fabricante: "Honda",
            ano: 2020,
            combustivel: "Gasolina",
            cor: "Preto",
            preco: 90000
        },
        {
            id: 3,
            nome: "Gol",
            fabricante: "Volkswagen",
            ano: 2018,
            combustivel: "Álcool",
            cor: "Vermelho",
            preco: 30000
        },
        {
            id: 4,
            nome: "Onix",
            fabricante: "Chevrolet",
            ano: 2022,
            combustivel: "Gasolina",
            cor: "Branco",
            preco: 55000
        },
        {
            id: 5,
            nome: "Fusion",
            fabricante: "Ford",
            ano: 2021,
            combustivel: "Flex",
            cor: "Prata",
            preco: 120000
        }
    ]);
});

// POST para adicionar um novo veículo
router.post('/', (req, res) => {
    const novoVeiculo = req.body;
    if (!novoVeiculo.nome || !novoVeiculo.fabricante || !novoVeiculo.ano || !novoVeiculo.combustivel || !novoVeiculo.cor || !novoVeiculo.preco) {
        return res.status(400).json({ mensagem: "Todos os campos são obrigatórios!" });
    }

    res.status(201).json({
        mensagem: "Veículo adicionado com sucesso!",
        veiculo: novoVeiculo
    });
});

// PUT para atualizar um veículo
router.put('/:id', (req, res) => {
    const id = req.params.id;
    const novoPreco = req.body.preco;

    if (!id || !novoPreco) {
        return res.status(400).json({
            mensagem: 'ID e preço são obrigatórios para atualizar um veículo.',
        });
    }

    res.status(200).json({
        mensagem: `Preço do veículo de ID ${id} atualizado para ${novoPreco}`,
    });
});

// DELETE para excluir um veículo
router.delete('/:id', (req, res) => {
    const id = req.params.id;
    if (!id) {
        return res.status(400).json({
            mensagem: "ID é obrigatório para excluir o veículo."
        });
    }

    res.status(202).json({
        mensagem: `Veículo de ID ${id} excluído com sucesso`
    });
});

// Exportando o router para ser utilizado no servidor
module.exports = router;
