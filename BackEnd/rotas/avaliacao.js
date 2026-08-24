import express from "express"
import db from "./db.js"

const router = express.Router()

async function avaliar(req,res) {
    const {id_usuario,avaliacao,id_professor} = req.body
    try{
        const query = await db.query("INSERT INTO avaliacoes(id_professor,id_usuario,avaliacao) VALUES(?,?,?)", [id_professor,id_usuario,avaliacao])
        if (query.affectedRows < 1){
            return res.status(500).json({message: "Não foi possivel enviar a avaliação"})
        }

        return res.status(200).json({message: "Avaliacao registrada com sucesso"})
    } catch (error) {
        console.log(error)
        return res.status(500).json({message: "Errot interno!"})
    }
} 

router.post("/avaliar", avaliar)

export default router