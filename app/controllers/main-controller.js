const templates = require('../views/templates');

class MainController {
    static rotas() {
        return {
            home: '/'
        };
    }

    home() {
        return function (req, resp) {
            resp.marko(templates.main);
        };
    }

    listingTasks() {
        return function(req, resp) {
            resp.marko(templates.main);
        }
    }

}

module.exports = MainController;