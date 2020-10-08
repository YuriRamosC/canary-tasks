const { check } = require('express-validator/check');

class TaskValidation {
    static validacoes() {
        return [
            check('titulo').isLength({ min: 1 }).withMessage('O serviço precisa de um título!'),
            check('cliente').isLength({ min: 1 }).withMessage('Precisa atribuir um nome ao cliente!')
        ];
    }
}

module.exports = TaskValidation;