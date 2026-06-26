import mariadb from 'mariadb'

const db = mariadb.createPool({
    host:'10.50.120.76',
    user: 'user',
    database: 'opina',
    password: 'usersenha',
    port: "3306"
})

export default db