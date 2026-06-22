import mysql from 'mysql2/promise'

const db = mysql.createPool({
    host: '172.30.2.178',
    user: 'user',
    password: 'usersenha',
    database: 'opina'
})

export default db