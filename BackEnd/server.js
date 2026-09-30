import "dotenv/config"

import express from 'express'
import cors from 'cors'

import roteadorAcesso from './rotas/acesso.js'
import roteadorRegistro from './rotas/registro.js'
import roteadorAvaliacao from "./rotas/avaliacao.js"
import roteadorInterface from "./rotas/interface.js"
import rotaPefil from "./rotas/perfil.js"


const app = express()

app.use(express.json())
app.use(cors())
app.use(roteadorAcesso)
app.use(roteadorRegistro)
app.use(roteadorAvaliacao)
app.use(rotaPefil)
app.use(roteadorInterface)

    
app.listen(3001, ()=> {
    console.log("servidor rodando em http://localhost:3001");
})

export default app;