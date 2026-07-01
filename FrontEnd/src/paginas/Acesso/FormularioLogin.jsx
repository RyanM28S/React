import styles from "./Acesso.module.scss";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import toast from "react-hot-toast";
import { useState } from "react";

const FormularioLogin = () => {
  const [loading, setLoading] = useState(false);

  async function handleLogin(event) {
    event.preventDefault();
    const dados = Object.fromEntries(new FormData(event.target));

    if (!dados.email || !dados.senha) {
      toast.error("Preencha todos os campos!");
      return;
    }
    console.log("Dados validos", dados);
    try {
      const res = await fetch(`http://localhost:3001/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(dados),
      });
      if (!res.ok) {
        throw new Error("Servidor fail", res.message);
      }
      const data = await res.json();
      toast.success("Login realizado com sucesso!");
      console.log("Login realizado:", data);
      localStorage.setItem("token", data.token);
      setTimeout(() => {
        window.location.href = "/";
      }, 3000);
    } catch (error) {
      toast.error("Erro ao fazer login!");
      console.error("falha ao login", error.message);
    }
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.4 }}
    >
      <h1 className={styles.stitulo}>
        Salotti <span>Opina</span>
      </h1>
      <div id="conteudo">
        <div className={styles.conteiner}>
          <h1>Bem-vindo de volta</h1>
          <p className={styles.plogin}>login para continuar</p>

          <form onSubmit={handleLogin} id="formLogin">
            <label htmlFor="Email">Usuário</label>
            <br />

            <input
              id="Email"
              name="email"
              type="email"
              placeholder="Digite seu email de usuário"
            />

            <br />

            <label htmlFor="Senha">Senha</label>

            <input
              id="Senha"
              name="senha"
              type="password"
              placeholder="Digite sua senha"
            />

            <br />

            <motion.button
              whileHover={{
                scale: 1.03,
                boxShadow: "0 0 25px rgba(192,0,255,.6)",
              }}
              whileTap={{
                scale: 0.97,
              }}
              disabled={loading}
              type="submit"
              className={styles["button-entrar"]}
            >
              {loading ? "Entrando..." : "Entrar na Plataforma"}
            </motion.button>

            <br />
          </form>

          <p id="p"></p>

          <Link to="/cadastro" id="cadastro" className={styles.buttonnao}>
            Não tem cadastro?
          </Link>
        </div>
      </div>

      <div>
        <p className={styles["p-footer"]}>
          Ao fazer login, você concorda com nossos{" "}
          <Link to="" className={styles["a-footer"]}>
            Termos de Uso
          </Link>
        </p>
      </div>
    </motion.div>
  );
};

export default FormularioLogin;
