import mysql from 'mysql2/promise'

const db = mysql.createPool({
    host: 'localhost',
    user: 'user',
    password: 'exemplo',
    database: 'db_exemplo'
})

export default db