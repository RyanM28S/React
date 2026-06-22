import express from 'express'
import cors from 'cors'
import roteadorAcesso from './rotas/acesso.js'


const app = express()

app.use(express.json())
app.use(cors())
app.use(roteadorAcesso)

app.listen(3001, ()=> {
    console.log("servidor rodadndo em http://localhost:3001");
})