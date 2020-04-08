const { Model, DataTypes } = require('sequelize');

class Fornecedor extends Model {
  static init(sequelize) {
    super.init({
      nome: DataTypes.STRING,
      cpf_cnpj: DataTypes.STRING,
    }, {
      sequelize,
      tableName: 'fornecedores',
      modelName: 'Fornecedor',
      timestamps: false
    })
  }

  static associate(models) {
    this.hasMany(models.Produto, {
      foreignKey: 'fornecedor_id',
      as: 'produto'
    })
  }
}

module.exports = Fornecedor;