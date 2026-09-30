import express from 'express'
import db from "./db.js";
import verificaToken from "../middleware/verificaToken.js";

const router = express.Router();

async function Interface(req, res) {
  try {
    const [buscar] = await db.query(
      `SELECT nome, email
        FROM usuarios
        WHERE id = ?`,
      [req.usuario.id],
    );
    if (buscar.length === 0) {
      return res.status(400).json({ message: "Erro" });
    }
    return res.status(200).json(buscar[0])
  } catch (error) {
    console.error(error)
    return res.status(500).json({ message: "Erro interno"})
  }
}

router.get("/interface", verificaToken, Interface);

export default router;
