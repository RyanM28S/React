import express from "express"
import db from "./db.js"

const router = express.Router()

async function perfil(req,res){
    const {id} = req.params
    const query = await db.query("SELECT * FROM usuarios WHERE id = ?", [id])
    if (query.length < 1){
        return res.status(404).json({message: "Usúario não encontrado"})
    }
    return res.status(200).json({info: query})
}

router.get("/perfil/:id",perfil)

export default router