import express from "express";
import db from "./db.js";

const router = express.Router();

async function registrarAlunos(req, res) {
  let { nome, turma, ra, descricao, nota1, nota2, nota3, nota4 } = req.body;
  if (!nome || !turma || !ra) {
    return res.status(400).json({ message: "Falta informações" });
  }
  nota1 = Number(nota1);
  nota2 = Number(nota2);
  nota3 = Number(nota3);
  nota4 = Number(nota4);

  try {
    const registro = await db.query(
      "INSERT INTO alunos(nome,turma,descricao,ra) VALUES (?,?,?,?)",
      [nome, turma, descricao, ra],
    );

    if (registro.affectedRows < 1) {
      return res
        .status(500)
        .json({ message: "Não foi possivel registrar o aluno" });
    }
    const pegar = await db.query("SELECT id FROM alunos WHERE ra = ?", [ra]);

    if (pegar.length < 1) {
      return res.status(400).json({ message: "Erro no banco de dados" });
    }

    const registroNotas = await db.query(
      "INSERT INTO notasAlunos(id_aluno, nota_1,nota_2,nota_3,nota_4) VALUES (?,?,?,?,?)",
      [pegar[0].id, nota1, nota2, nota3, nota4],
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
  let { nome, turma, ra, descricao, nota1, nota2, nota3, nota4 } = req.body;
  try {
    if (!ra) {
      return res.status(400).json({ message: "Falta informações!" });
    }
    nota1 = nota1 === "" ? null : Number(nota1);
    nota2 = nota2 === "" ? null : Number(nota2);
    nota3 = nota3 === "" ? null : Number(nota3);
    nota4 = nota4 === "" ? null : Number(nota4);
    const buscar = await db.query("SELECT * FROM alunos WHERE ra = ?", [ra]);
    if (buscar.length === 0) {
      return res.status(400).json({ message: "Aluno não registrado!" });
    }
    const id = buscar[0].id;

    const atualizar = await db.query(
      "UPDATE alunos SET nome = COALESCE(NULLIF(?, ''), nome), turma = COALESCE(NULLIF(?, ''), turma), descricao = COALESCE(NULLIF(?, ''), descricao) WHERE id = ?",
      [nome, turma, descricao, id],
    );
    const atualizarNotas = await db.query(
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

export default router;
