const mainRotas = require('./main-rotas');
const taskRotas = require('./task-rotas');
module.exports = (app) => {
    mainRotas(app),
    taskRotas(app)
};