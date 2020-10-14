const TaskControlador = require('../controllers/task-controller');
const taskController = new TaskControlador();

const TaskValidation = require('../models/task-validation');
const multer = require('multer');
const upload = multer({ dest: '/estatico/task-images' });
module.exports = (app) => {
    const taskRotas = TaskControlador.rotas();

    
    app.route(taskRotas.lista).get(taskController.lista());


    app.route(taskRotas.cadastro)
    .get(taskController.formularioCadastro())
    .post(TaskValidation.validacoes(),taskController.cadastra())
    .put(taskController.edita());

    app.get(taskRotas.adicionarArquivos, taskController.formularioArquivos());
    app.post(taskRotas.armazenar, upload.single('file'),taskController.adicionarArquivos());

    app.get(taskRotas.edicao, taskController.formularioEdicao());

    app.delete(taskRotas.delecao, taskController.remove());
};