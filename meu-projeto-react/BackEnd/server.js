import express from 'express'
import cors from 'cors'
import roteador from './rotas/acesso.js'


const app = express()

app.use(express.json())
app.use(cors())
app.use(roteador)

app.listen(3001, ()=> {
    console.log("servidor rodando em http://localhost:3001");
})