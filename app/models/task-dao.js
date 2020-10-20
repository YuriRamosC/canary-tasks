class TaskDao {

    constructor(db) {
        this._db = db;
    }

    adiciona(task) {
        return new Promise((resolve, reject) => {
            this._db.run(`
                INSERT INTO tasks (
                    titulo, 
                    cliente,
                    tipo,
                    altura,
                    largura,
                    unid,
                    descricao
                ) values (?,?,?,?,?)
                `,
                [
                    task.titulo,
                    task.cliente,
                    task.tipo,
                    task.altura,
                    task.largura,
                    task.unid,
                    task.descricao
                ],
                function (err) {
                    if (err) {
                        console.log(err);
                        return reject('Não foi possível adicionar o Serviço!');
                    }

                    resolve();
                }
            )
        });
    }

    lista() {
        return new Promise((resolve, reject) => {
            this._db.all(
                'SELECT * FROM tasks',
                (erro, resultados) => {
                    if (erro) return reject('Não foi possível listar os serviços!');

                    return resolve(resultados);
                }
            )
        });
    }

    buscaPorId(id) {

        return new Promise((resolve, reject) => {
            this._db.get(
                `
                    SELECT *
                    FROM tasks
                    WHERE id = ?
                `,
                [id],
                (erro, task) => {
                    if (erro) {
                        return reject('Não foi possível encontrar o serviço!');
                    }
                    return resolve(task);
                }
            );
        });
    }

    atualiza(task) {
        return new Promise((resolve, reject) => {
            this._db.run(`
                UPDATE tasks SET
                titulo = ?,
                cliente = ?,
                tipo = ?,
                altura = ?,
                largura = ?,
                unid = ?,
                descricao =?
                WHERE id = ?
            `,
            [
                task.titulo,
                task.cliente,
                task.tipo,
                task.altura,
                task.largura,
                task.unid,
                task.descricao,
                task.id
            ],
            erro => {
                if (erro) {
                    return reject(erro);
                }

                resolve();
            });
        });
    }

    remove(id) {
        console.log('DELETAR');
        return new Promise((resolve, reject) => {
            this._db.get(
                `
                    DELETE 
                    FROM tasks
                    WHERE id = ?
                `,
                [id],
                (erro) => {
                    if (erro) {
                        
                        return reject(erro);
                    }
                    return resolve();
                }
            );
        });
    }
}

module.exports = TaskDao;