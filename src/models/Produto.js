const { Model, DataTypes } = require('sequelize');

class Produto extends Model {
  static init(sequelize) {
    super.init({
      descricao: DataTypes.STRING,
      unidade: DataTypes.STRING,
      valor: DataTypes.DECIMAL,
    }, {
      sequelize,
      tableName: 'produtos',
      modelName: 'Produto',
      timestamps: false
    })
  }

  static associate(models) {
    this.belongsTo(models.Fornecedor, {
      foreignKey: 'fornecedor_id',
      as: 'fornecedor'
    })
  }
}

module.exports = Produto;
