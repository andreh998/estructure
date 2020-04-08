const express = require('express');

const routes = express.Router();

/** Controllers */
const ProdutoController = require('./controllers/ProdutoController');
const FornecedorController = require('./controllers/FornecedorController');

/** Produtos */
routes.get('/produtos', ProdutoController.index);
routes.post('/produtos', ProdutoController.store);

/** Fornecedor */
routes.get('/fornecedores', FornecedorController.index);
routes.post('/fornecedores', FornecedorController.store);

module.exports = routes;