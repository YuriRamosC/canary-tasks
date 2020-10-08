const templates = require('../views/templates');

class MainController {
    static rotas() {
        return {
            home: '/'
        };
    }

    home() {
        return function (req, resp) {
            resp.marko(templates.main.home);
        };
    }


}

module.exports = MainController;