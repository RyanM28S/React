import mariadb from 'mariadb'

const db = mariadb.createPool({
    host:'10.162.186.76',
    user: 'user',
    database: 'opina',
    password: 'usersenha',
    port: "3306"
})

export default db