import express from 'express'
import cors from 'cors'
import roteadorAcesso from './rotas/acesso.js'
import roteadorRegistro from './rotas/registro.js'
import roteadorAvaliacao from "./rotas/avaliacao.js"
import rotaAvalicacao from "./rotas/avaliacao.js"

const app = express()

app.use(express.json())
app.use(cors())
app.use(roteadorAcesso)
app.use(roteadorRegistro)
app.use(roteadorAvaliacao)
app.use(rotaAvalicacao)

app.listen(3001, ()=> {
    console.log("servidor rodando em http://localhost:3001");
})