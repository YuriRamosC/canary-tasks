const TaskController = require('../controllers/task-controller');
const taskController = new TaskController();

module.exports = (app) => {
    const taskRotas = TaskController.rotas();
    app.route(taskRotas.lista)
    .get(taskController.lista());

}