import express from "express";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import db from "./db.js";

const roteador = express.Router();

async function Login(req, res) {
  const { Email, Senha } = req.body;
  const [buscar] = await db.query("SELECT * FROM usuarios WHERE email = ?", [
    Email,
  ]);
  if (buscar.length === 0) {
    return res.status(400).json({ message: "Usuario não encontrado" });
  }
  const usuario = buscar;
  const token = jwt.sign(
    {
      id: usuario.id,
      emial: usuario.email,
    },
    process.env.JWT_SECRET,
    {
      expiresIn: "1h",
    },
  );
}

async function Cadastro(req, res) {
  const { Nome, Senha, Email } = req.body;
  if (!Nome || !Senha || !Email) {
    return res.status(400).json({ message: "Falta informações" });
  }
  try {
    const [buscar] = await db.query("SELECT * FROM usuarios WHERE email = ?", [
      Email,
    ]);
    if (buscar.length > 0) {
      return res.status(409).json({ message: "Usuario ja existente" });
    }

    const SenhaCripto = await bcrypt.hash(Senha, 10);
    const [criar] = await db.query(
      "INSERT INTO usuarios(nome,senha,email) VALUES(?,?,?)",
      [Nome, SenhaCripto, Email],
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
roteador.post("cadastro", Cadastro);

export default roteador;