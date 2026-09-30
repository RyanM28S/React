import express from "express";
import db from "./db.js";

const router = express.Router();

async function registrarAlunos(req, res) {
  let { nome, turma, ra, nota1, nota2, nota3, nota4 } = req.body;
  if (!nome || !turma || !ra) {
    return res.status(400).json({ message: "Falta informações" });
  }
  nota1 = nota1 === "" ? null : Number(nota1);
  nota2 = nota2 === "" ? null : Number(nota2);
  nota3 = nota3 === "" ? null : Number(nota3);
  nota4 = nota4 === "" ? null : Number(nota4);

  try {
    const [registro] = await db.query(
      "INSERT INTO alunos(nome,turma,ra) VALUES (?,?,?)",
      [nome, turma, ra],
    );

    if (registro.affectedRows < 1) {
      return res
        .status(500)
        .json({ message: "Não foi possivel registrar o aluno" });
    }
    const [pegar] = await db.query("SELECT id_aluno FROM alunos WHERE ra = ?", [
      ra,
    ]);

    if (pegar.length < 1) {
      return res.status(400).json({ message: "Erro no banco de dados" });
    }

    const [registroNotas] = await db.query(
      "INSERT INTO notasAlunos(id_aluno, nota_1,nota_2,nota_3,nota_4) VALUES (?,?,?,?,?)",
      [pegar[0].id_aluno, nota1, nota2, nota3, nota4],
    );

    return res.status(201).json({ message: "Aluno registrado com sucesso" });
  } catch (error) {
    if (error.code === "ER_DUP_ENTRY") {
      return res.status(409).json({ message: "Aluno já cadastrado" });
    }
    console.error(error);
    return res.status(500).json({ message: "Erro interno!" });
  }
}

async function atualizarAlunos(req, res) {
  let { nome, turma, ra, nota1, nota2, nota3, nota4 } = req.body;
  try {
    if (!ra) {
      return res.status(400).json({ message: "Falta informações!" });
    }
    nota1 = nota1 === "" ? null : Number(nota1);
    nota2 = nota2 === "" ? null : Number(nota2);
    nota3 = nota3 === "" ? null : Number(nota3);
    nota4 = nota4 === "" ? null : Number(nota4);
    const [buscar] = await db.query("SELECT * FROM alunos WHERE ra = ?", [ra]);
    if (buscar.length === 0) {
      return res.status(400).json({ message: "Aluno não registrado!" });
    }
    const id = buscar[0].id_aluno;

    const [atualizar] = await db.query(
      "UPDATE alunos SET nome = COALESCE(NULLIF(?, ''), nome), turma = COALESCE(NULLIF(?, ''), turma) WHERE id_aluno = ?",
      [nome, turma, id],
    );
    const [atualizarNotas] = await db.query(
      "UPDATE notasalunos SET nota_1 = COALESCE(?, nota_1), nota_2 = COALESCE(?, nota_2), nota_3 = COALESCE(?, nota_3), nota_4 = COALESCE(?, nota_4) WHERE id_aluno = ?",
      [nota1, nota2, nota3, nota4, id],
    );
    console.log(atualizarNotas);

    return res.status(200).json({ message: "Aluno atualizado com sucesso!" });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "Erro interno!" });
  }
}

router.post("/registrar", registrarAlunos);
router.post("/atualizar", atualizarAlunos);
router.get("/alunos", async (req, res) => {
  try {
    const [alunos] = await db.query(`
            SELECT
                a.id_aluno,
                a.nome,
                a.turma,
                a.ra,
                n.nota_1,
                n.nota_2,
                n.nota_3,
                n.nota_4,
                n.nota_final
            FROM alunos a
            LEFT JOIN notasAlunos n
                ON a.id_aluno = n.id_aluno
            ORDER BY a.nome ASC
        `);
    return res.status(200).json(alunos);
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: "Erro interno" });
  }
});
router.delete("/alunos/:id", async (req, res) => {
  const {id} = req.params;
  try {
    const [deletarNotas] = await db.query("DELETE FROM notasalunos WHERE id_aluno = ?", [
      id,
    ]);
    if (deletarNotas.affectedRows < 0) {
      return res.status(400).json({ message: "Erro aoexcluir"})
    }
    const [deletar] = await db.query("DELETE FROM alunos WHERE id_aluno = ?", [
      id,
    ]);
    if (deletar.affectedRows < 0) {
      return res.status(401).json({ message: "Não foi possivel exclui-lo" });
    }
    return res.status(200).json({ message: "aluno apagado com sucesso" });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "Erro interno" });
  }
});

export default router;
