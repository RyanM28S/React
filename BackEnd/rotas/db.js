import mariadb from 'mariadb'

const db = mariadb.createPool({
    host:'localhost',
    user: 'user',
    database: 'opina',
    password: 'usersenha',
    port: "3306"
})

export default db