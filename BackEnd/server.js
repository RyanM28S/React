import express from 'express'
import cors from 'cors'
import roteadorAcesso from './rotas/acesso.js'
import roteadorRegistro from './rotas/registro.js'
import roteadorAvaliacao from "./rotas/avaliacao.js"
import rotaAvalicacao from "./rotas/avaliacao.js"
import rotaPefil from "./rotas/perfil.js"

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

// No final do seu arquivo server.js, mude o app.listen para rodar apenas localmente:

if (process.env.NODE_ENV !== 'production') {
    const PORT = process.env.PORT || 3000;
    app.listen(PORT, () => {
        console.log(`Servidor rodando localmente na porta ${PORT}`);
    });
}

// IMPORTANTE: Exportar o app para a Vercel usar
export default app;
