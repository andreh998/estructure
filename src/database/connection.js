const Sequelize = require('sequelize');
const { readdirSync } = require('fs');
const path = require('path');

const connection = new Sequelize( 'produtosdb', 'root', 'andre@123', {
  host: '0.0.0.0',
  dialect: 'mysql'
});

/** Inicia os models e preenche a lista com os models */
const loadModels = () => {
  const dir = path.join(__dirname, '..','models');
  //console.log(dir);
  let models = [];
  readdirSync(dir).forEach(file => {
    const modelDir = path.join(dir, file),
    model = require(modelDir);
    model.init(connection);
    models[model.name] = model;
  });
  return models;
};

/** Faz as associações dos models que estão na lista */
listModels = {models: loadModels()};
Object.keys(listModels.models).forEach(key => {
  listModels.models[key].associate(listModels.models);
});

module.exports = connection;
