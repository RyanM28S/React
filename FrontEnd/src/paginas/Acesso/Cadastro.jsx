import styles from "./Acesso.module.scss";
import image1 from "../../assets/icone_inicial_header1.svg";
import image2 from "../../assets/icone_pessoas_header.svg";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";


const Cadastro = () => {
  async function Cadastrar(event) {
    event.preventDefault();

    const form = event.currentTarget;
    const dados = Object.fromEntries(new FormData(form));

    if (!dados.nome || !dados.senha || !dados.email) {
      return alert("Falta informações!");
    }
    try {
      const res = await fetch(`http://localhost:3001/cadastro`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(dados),
      });
      if (!res.ok) {
        throw new Error(`Server error: ${res.status}`);
      }
      const data = await res.json();
      console.log("Login realizado:", data)
    } catch (error) {
      console.log("Falha no login:", error.message)
    }
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.4 }}
    >
      <div id="conteudo">
        <div className={styles.conteiner}>
          <h1>Bem-vindo de volta</h1>
          <p className={styles.plogin}>login para continuar</p>
          <div>
            <button className={styles["button-prof"]} id="professor">
              <img src={image1} alt="icone-para-login-professor" />
              <p className={styles.descri}>Professor</p>
            </button>
            <button className={styles["button-aluno"]} id="aluno">
              <img src={image2} alt="icone-para-login-Alunos" />
              <p className={styles.descri}>Alunos</p>
            </button>
          </div>

          <form onSubmit={Cadastrar} id="formCadastro">
            <label htmlFor="Nome">Usuário</label>
            <br />
            <input
              name="nome"
              id="Nome"
              type="text"
              placeholder="Digite seu usuário"
            />
            <br />

            <label htmlFor="Senha">Senha</label>
            <br />
            <input
              id="Senha"
              name="senha"
              type="password"
              placeholder="Digite sua senha"
            />
            <br />

            <label htmlFor="Email">Email</label>
            <br />
            <input
              id="Email"
              name="email"
              type="email"
              placeholder="Digite sua email"
            />
            <br />

            {/* Adicionado o styles['button-entrar'] caso esteja usando CSS Modules */}
            <button type="submit" className={styles["button-entrar"]}>
              Entrar na Plataforma
            </button>
            <br />
          </form>

          <p id="p"></p>
          <Link to="/login" id="login" className={styles.buttonnao}>
            Já tem cadastro?
          </Link>
        </div>
      </div>

      <div>
        <p className={styles["p-footer"]}>
          Ao fazer login, você concorda com nossos{" "}
          <Link to="" className={styles["a-footer"]}>
            Termos de Uso{" "}
          </Link>
        </p>
      </div>
    </motion.div>
  );
};

export default Cadastro;
