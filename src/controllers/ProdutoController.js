const Produto = require('../models/Produto');

module.exports = {

  async index(req, res) {
    const produtos = await Produto.findAll({});

    res.json(produtos);
  },

  async store(req, res) {
    const { descricao, unidade, valor, fornecedor_id } = req.body

    const produto = await Produto.create({ descricao, unidade, valor, fornecedor_id });

    res.json(produto);

  }

}