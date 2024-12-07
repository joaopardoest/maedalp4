const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

// Importando a rota de veículos
const veiculoRotas = require('./src/routes/veiculo');

const app = express();
const hostname = '127.0.0.1';
const port = 8080;

// Configurando o body-parser para ler o corpo da requisição
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// Configurando o diretório para servir arquivos estáticos
app.use(express.static(path.join(__dirname, 'src/pages')));

// Página inicial
app.get('/', (req, res) => {
    res.status(200).sendFile(path.join(__dirname, 'src/pages/index.html'));
});

// Usando a rota '/veiculo'
app.use('/veiculo', veiculoRotas);

// Iniciar o servidor
app.listen(port, hostname, () => {
    console.log(`Servidor rodando em http://${hostname}:${port}/`);
});
