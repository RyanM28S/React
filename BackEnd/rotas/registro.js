import express from "express"
import db from "./db.js"

const router = express.Router()

async function registrarAlunos(req,res) {
    const {nome,turma,data,descricao,notas} = req.body
    const resposta = await db.query("SELECT FROM alunos")
}