const TaskControlador = require('../controllers/task-controller');
const taskController = new TaskControlador();
var fs = require('fs');
const TaskValidation = require('../models/task-validation');
//multer configuration
const multer = require('multer');
const storageConfig = multer.diskStorage({
    destination: function (req, file, cb) {
        if (!fs.existsSync('./public/task-images/'+req.body.cliente)){
            fs.mkdirSync('./public/task-images/'+req.body.cliente);
        }
        if(!fs.existsSync('./public/task-images/'+req.body.cliente+'/'+req.body.titulo)){
            fs.mkdirSync('./public/task-images/'+req.body.cliente+'/'+req.body.titulo);
        }
        cb(null, './public/task-images/'+req.body.cliente+'/'+req.body.titulo);
    },
    filename(req, file = {}, cb) {
        const { originalname } = file;
        const fileExtension = (originalname.match(/\.+[\S]+$/) || [])[0];
        cb(null, `${file.originalname}${fileExtension}`);
    }
});
const upload = multer({ storage: storageConfig });
module.exports = (app) => {
    const taskRotas = TaskControlador.rotas();


    app.route(taskRotas.lista).get(taskController.lista());


    app.route(taskRotas.cadastro)
        .get(taskController.formularioCadastro())
        .post(TaskValidation.validacoes(), taskController.cadastra())
        .put(taskController.edita());

    app.get(taskRotas.adicionarArquivos, taskController.formularioArquivos());


    app.post(taskRotas.armazenar, upload.single('file'), function (req, resp) {
        console.log('rotas:');
        console.log(req.body);
        resp.redirect(TaskControlador.rotas().lista);
    });


    app.get(taskRotas.edicao, taskController.formularioEdicao());

    app.delete(taskRotas.delecao, taskController.remove());
};