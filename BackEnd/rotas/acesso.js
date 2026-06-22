import express from "express";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import db from "./db.js";

const roteador = express.Router();

async function Login(req, res) {

  const { email, senha } = req.body;
  if (!email || !senha) {
    return res.status(400).json({ message: "Falta informações" });
  }
  try {
    const [buscar] = await db.query("SELECT * FROM usuarios WHERE email = ?", [
      email,
    ]);
    if (buscar.length === 0) {
      return res.status(400).json({ message: "email ou senha inválidos" });
    }
    const senhaIgual = await bcrypt.compare(senha, buscar.senha);

    if (!senhaIgual) {
      return res.status(400).json({ message: "email ou senha inválidos" });
    }
    const token = jwt.sign(
      {
        id: buscar.id,
        email: buscar.email,
      },
      "process.env.JWT_SECRET",
      {
        expiresIn: "1h",
      }
    );
    return res.status(200).json({ message: "Logado", token: token });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: "Erro interno" });
  }
}

async function Cadastro(req, res) {
  const { nome, senha, email } = req.body;
  if (!nome || !senha || !email) {
    return res.status(400).json({ message: "Falta informações" });
  }
  try {
    const [buscar] = await db.query("SELECT * FROM usuarios WHERE email = ?",
      [email]);
    if (buscar.length > 0) {
      return res.status(409).json({ message: "Usuario ja existente" });
    }

    const senhaCripto = await bcrypt.hash(senha, 10);
    const criar = await db.query(
      "INSERT INTO usuarios(nome,senha,email) VALUES(?,?,?)",
      [nome, senhaCripto, email],
    );
    if (criar.affectedRows > 0) {
      return res.status(201).json({ message: "Usuario criado com sucesso" });
    }
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: "Erro interno!" });
  }
}

roteador.post("/login", Login);
roteador.post("/cadastro", Cadastro);


export default roteador;
