const MainController = require('../main-controller/main-controller');
const mainController = new MainController();
module.exports = (app) => {
    const mainRotas = MainController.rotas();
    app.route(mainRotas.home)
    .get(mainController.home());

};