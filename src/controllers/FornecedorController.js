const Fornecedor = require('../models/Fornecedor');

module.exports = {

  async index(req, res) {
    const fornecedores = await Fornecedor.findAll({});
    
    res.json(fornecedores);
  },

  async store(req, res) {
    const { nome, cpf_cnpj } = req.body;

    const fornecedor = await Fornecedor.create({ nome, cpf_cnpj });

    res.json(fornecedor);
  }

}