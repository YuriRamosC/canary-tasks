const { validationResult } = require('express-validator/check');

const TaskDao = require('../models/task-dao');
const db = require('../../config/database');

const templates = require('../views/templates');

class TaskControlador {

    static rotas() {
        return {
            autenticadas: '/tasks*',
            lista: '/tasks',
            cadastro: '/tasks/form',
            edicao: '/tasks/form/:id',
            delecao: '/tasks/:id'
        };
    }

    lista() {
        return function(req, resp) {
            console.log('chegou aqui');
            const taskDao = new TaskDao(db);
            taskDao.lista()
                    .then(tasks => resp.marko(
                        templates.tasks.lista,
                        {
                            tasks: tasks
                        }
                    ))
                    .catch(erro => console.log(erro));
        };
    }

    formularioCadastro() {
        console.log('formulario cadastro');
        return function(req, resp) {
            console.log('body: ', req.body);
            resp.marko(templates.tasks.form, { task: {} });
        };
    }

    formularioEdicao() {
        return function(req, resp) {
            const id = req.params.id;
            const taskDao = new TaskDao(db);
    
            taskDao.buscaPorId(id)
                    .then(task => 
                        resp.marko(
                            templates.tasks.form, 
                            { task: task }
                        )
                    )
                    .catch(erro => console.log(erro));
        };
    }

    cadastra() {
        return function(req, resp) {
            console.log('AQUII');
            console.log(req.body);
            const taskDao = new TaskDao(db);
            
            const erros = validationResult(req);
    
            if (!erros.isEmpty()) {
                return resp.marko(
                    templates.tasks.form,
                    { 
                        task: {}, 
                        errosValidacao: erros.array()
                    }
                );
            }
    
            taskDao.adiciona(req.body)
                    .then(resp.redirect(TaskControlador.rotas().lista))
                    .catch(erro => console.log(erro));
        };
    }

    edita() {
        return function(req, resp) {
            console.log(req.body);
            const taskDao = new TaskDao(db);
            
            taskDao.atualiza(req.body)
                    .then(resp.redirect(TaskControlador.rotas().lista))
                    .catch(erro => console.log(erro));
        };
    }

    remove() {
        console.log('REMOVE()');
        return function(req, resp) {
            console.dir(req);
            console.log(req.body);
            const id = req.params.id;
    
            const taskDao = new TaskDao(db);
            taskDao.remove(id)
                    .then(() => resp.status(200).end())
                    .catch(erro => console.log(erro));
        };
    }
}

module.exports = TaskControlador;