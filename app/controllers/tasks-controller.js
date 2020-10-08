//const { validationResult } = require('express-validator/check');

const taskDao = require('../models/task-dao');
const db = require('../../config/database');

const templates = require('../views/templates');

class taskControlador {

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

            const taskDao = new taskDao(db);
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
        return function(req, resp) {
            resp.marko(templates.tasks.form, { task: {} });
        };
    }

    formularioEdicao() {
        return function(req, resp) {
            const id = req.params.id;
            const taskDao = new taskDao(db);
    
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
            console.log(req.body);
            const taskDao = new taskDao(db);
            
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
                    .then(resp.redirect(taskControlador.rotas().lista))
                    .catch(erro => console.log(erro));
        };
    }

    edita() {
        return function(req, resp) {
            console.log(req.body);
            const taskDao = new taskDao(db);
            
            taskDao.atualiza(req.body)
                    .then(resp.redirect(taskControlador.rotas().lista))
                    .catch(erro => console.log(erro));
        };
    }

    remove() {
        return function(req, resp) {
            const id = req.params.id;
    
            const taskDao = new taskDao(db);
            taskDao.remove(id)
                    .then(() => resp.status(200).end())
                    .catch(erro => console.log(erro));
        };
    }
}

module.exports = taskControlador;