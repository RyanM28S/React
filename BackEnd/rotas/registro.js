import express from "express"
import db from "./db.js"

const router = express.Router()

async function registrarAlunos(req, res) {
    const { nome, turma, ra, descricao, nota1, nota2, nota3, nota4 } = req.body
    if (!nome || !turma || !ra || !descricao) {
        return res.status(400).json({ message: "Falta informações" })

    }

    try {
        const registro = await db.query("INSERT INTO alunos(nome,turma,descricao,ra) VALUES (?,?,?,?)",
            [nome, turma, descricao, ra])

        if (registro.affectedRows < 1) {
            return res.status(500).json({ message: "Não foi possivel registrar o aluno" })
        }
        const pegar = await db.query("SELECT id FROM alunos WHERE ra = ?", [ra])

        if (pegar.length < 1) {
            return res.status(400).json({ message: "Erro no banco de dados" })
        }

        const registroNotas = await db.query("INSERT INTO notasAlunos(id_aluno, nota_1,nota_2,nota_3,nota_4) VALUES (?,?,?,?,?)", [pegar[0].id, nota1, nota2, nota3, nota4])

        if (registroNotas.affectedRows < 1) {
            return res.status(500).json({ message: "Não foi possivel regsitrar as notas" })
        }

        return res.status(201).json({ message: "Aluno registrado com sucesso" })
    } catch (error) {
        if (error.code === "ER_DUP_ENTRY") {
            return res.status(409).json({ message: "Aluno já cadastrado" })
        }
        console.error(error)
        return res.status(500).json({ message: "Erro interno!" })
    }


}

router.post("/registrar", registrarAlunos)

export default router