import express from "express";
import db from "./db.js";
import verificaToken from "../middleware/verificaToken.js";

const router = express.Router();

async function perfil(req, res) {
  try {
    console.log("ID DO TOKEN:", req.usuario.id);

    const [buscar] = await db.query(
      `SELECT nome, email, data_criacao
       FROM usuarios
       WHERE id = ?`,
      [req.usuario.id],
    );

    console.log("DADOS DO BANCO:", buscar);

    if (buscar.length === 0) {
      return res.status(404).json({
        message: "Usuário não encontrado"
      });
    }

    return res.status(200).json(buscar[0]);

  } catch (error) {
    console.error("ERRO:", error);

    return res.status(500).json({
      message: "Erro interno"
    });
  }
}

router.get("/perfil", verificaToken, perfil);

export default router;
