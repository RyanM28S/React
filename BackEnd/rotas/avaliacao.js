import express from "express";
import db from "./db.js";
import jwt from "jsonwebtoken";
import verificaToken from "../middleware/verificaToken.js";

const router = express.Router();

async function avaliar(req, res) {
    const id_usuario = req.usuario.id;
  const { id_professor, id_categoria, tipo, estrelas, comentario } = req.body;
  try {
    const [query] = await db.query(
      "INSERT INTO avaliacoes(id_professor, id_categoria, tipo, id_usuario,estrelas,comentario) VALUES(?,?,?,?,?,?)",
      [id_professor || null , id_categoria || null, tipo, id_usuario, estrelas, comentario],
    );
    if (query.affectedRows < 1) {
      return res
        .status(500)
        .json({ message: "Não foi possivel enviar a avaliação" });
    }

    return res
      .status(200)
      .json({ message: "Avaliacao registrada com sucesso" });
  } catch (error) {
    console.error("Erro ao salvar", error);
    return res.status(500).json({ message: error.message });
  }
}
async function buscarAvaliacoes(req, res) {
  const id_usuario = req.usuario.id
  try {
    const [avaliacoes] = await db.query(
 `SELECT
          a.id,
          a.estrelas,
          a.comentario,
          a.data_criacao,
          p.nome AS professor,
          c.nome AS categoria
       FROM avaliacoes a
       LEFT JOIN professores p
          ON a.id_professor = p.id_professor
       LEFT JOIN categorias c
          ON a.id_categoria = c.id_categoria
       WHERE a.id_usuario = ?
       ORDER BY a.data_criacao DESC`,
      [id_usuario]
    );
    return res.status(200).json(avaliacoes)
  } catch (error) {
    console.error( "Erro ao buscar avaliacoes", error)
    return res.status(500).json({ message: "Erro interno"})
  }
}
router.post("/avaliar", verificaToken, avaliar);
router.get("/minha-lista", verificaToken, buscarAvaliacoes)

export default router;
