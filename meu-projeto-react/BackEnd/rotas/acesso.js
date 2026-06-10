import express from 'express'
import db from './db.js'

const roteador = express.Router()

async function Login( req , res ) {
    const { email, senha } = req.body
    const [buscar] = await db.query(
        "SELECT * usuarios WHERE email = ?",
        [email]
    )

}

async function Cadastro(req, res) {
    
}

roteador.post('/login', Login)
roteador.post('cadastro', Cadastro)

export default roteador