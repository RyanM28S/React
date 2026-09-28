import mariadb from 'mariadb'

const db = mariadb.createPool({
    host:'localhost',
    user: 'ryanUser',
    database: 'opinadb',
    password: 'ryanSenha',
    port: "3306"
})

export default db   