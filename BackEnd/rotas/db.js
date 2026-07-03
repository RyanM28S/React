import mariadb from 'mariadb'

const db = mariadb.createPool({
    host:'172.30.1.52',
    user: 'user',
    database: 'opina',
    password: 'usersenha',
    port: "3306"
})

export default db