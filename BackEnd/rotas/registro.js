import express from "express"
import db from "./db.js"

const router = express.Router()

async function registrarAlunos(req, res) {
    const { nome, turma, data, descricao, notas } = req.body
    if (!nome || !turma || !data || !descricao || !notas) {
        res.status(400).json({ message: "Falta informações" })
        return
    }

    try {
        const registro = await db.query("INSERT INTO alunos(nome,turma,descricao,nota1,nota2,nota3,nota4,data) VALUES (?,?,?,?,?,?,?,?)",
            [nome, turma, descricao, notas.nota1, notas.nota2, notas.nota3, notas.nota4, data])

        if (registro.affectedRows <= 0) {
            res.status(500).json({ message: "Não foi possivel registrar o aluno" })
            return
        }
        
        return res.status(201).json({message: "Aluno registrado com sucesso"})
    } catch (error) {
        if (error.code === "ER_DUP_ENTRY") {
            res.status(409).json({message: "Aluno já cadastrado"})
            return
        }
        console.error(error)
        res.status(500).json({ message: "Erro interno!" })
    }


}

router.post("/registrar", registrarAlunos)

export default router