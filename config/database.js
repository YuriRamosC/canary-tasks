const sqlite3 = require('sqlite3').verbose();
const bd = new sqlite3.Database('data.db');

const USUARIOS_SCHEMA = `
CREATE TABLE IF NOT EXISTS usuarios (
    id INTEGER PRIMARY KEY AUTOINCREMENT, 
    nome_completo VARCHAR(40) NOT NULL UNIQUE, 
    email VARCHAR(255) NOT NULL, 
    senha VARCHAR(255) NOT NULL
)
`;

const INSERIR_USUARIO_1 = 
`
INSERT INTO usuarios (
    nome_completo, 
    email,
    senha
) SELECT 'Yuri Ramos', 'yuriramoscc@gmail.com', '123' WHERE NOT EXISTS (SELECT * FROM usuarios WHERE email = 'yuriramoscc@gmail.com')
`;

const TASKS_SCHEMA = 
`
CREATE TABLE IF NOT EXISTS tasks (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    titulo TEXT NOT NULL,
    cliente TEXT NOT NULL,
    tipo TEXT NOT NULL,
    descricao TEXT DEFAULT ('')
)
`;

const INSERIR_TASK_1 = 
`
INSERT INTO tasks (
    titulo,
    cliente,
    tipo,
    descricao
) SELECT 'Cartão Master', 'Master Óleo', 'Cartão 4x1', 'UV total frente 4x1 1000' WHERE NOT EXISTS (SELECT * FROM tasks WHERE titulo = 'Cartão Master')
`;

bd.serialize(() => {
    bd.run("PRAGMA foreign_keys=ON");
    bd.run(USUARIOS_SCHEMA);
    bd.run(TASKS_SCHEMA);
    bd.run(INSERIR_TASK_1);

    bd.each("SELECT * FROM usuarios", (err, usuario) => {
        console.log('Usuario: ');
        console.log(usuario);
    });
});

process.on('SIGINT', () =>
    bd.close(() => {
        console.log('BD encerrado!');
        process.exit(0);
    })
);

module.exports = bd;