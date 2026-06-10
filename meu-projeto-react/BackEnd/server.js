import express from 'express'
import cors from 'cors'
import roteador from './rotas/acesso'


const app = express()

app.use(express.json())
app.use(cors())
app.use(roteador)

app.listen(3001, ()=> {
    console.log("servidor rodadndo em http://localhost:3001");
})