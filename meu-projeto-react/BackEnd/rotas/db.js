import mysql from 'mysql2/promise'

const db = mysql.createPool({
    host: '10.158.64.76',
    user: 'user',
    password: 'usersenha',
    database: 'opina'
})

export default db