import express from 'express'
import cors from 'cors'
import roteadorAcesso from './rotas/acesso.js'
import roteadorRegistro from './rotas/registro.js'

const app = express()

app.use(express.json())
app.use(cors())
app.use(roteadorAcesso)
app.use(roteadorRegistro)

app.listen(3001, ()=> {
    console.log("servidor rodando em http://localhost:3001");
})