import styles from "./login.module.css";
import image1 from "../../assets/icone_inicial_header1.svg";
import image2 from "../../assets/icone_pessoas_header.svg";
import { Link } from "react-router-dom";

const Cadastro = () => {
  return (
    <>
      <div id="conteudo">
        <div className={styles.conteiner}>
          <h1>Bem-vindo de volta</h1>
          <p>login para continuar</p>
          <div>
            <button className={styles["button-prof"]} id="professor">
              <img src={image1} alt="icone-para-login-professor" />
              <p>Professor</p>
            </button>
            <button className={styles["button-aluno"]} id="aluno">
              <img src={image2} alt="icone-para-login-Alunos" />
              <p>Alunos</p>
            </button>
          </div>

          <form id="formCadastro">
            <label htmlFor="Nome">Usuário</label>
            <br />
            <input
              name="Nome"
              id="Nome"
              type="text"
              placeholder="Digite seu usuário"
            />
            <br />

            <label htmlFor="Senha">Senha</label>
            <br />
            <input
              id="Senha"
              name="Senha"
              type="password"
              placeholder="Digite sua senha"
            />
            <br />

            <label htmlFor="Email">Email</label>
            <br />
            <input
              id="Email"
              name="Email"
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
          <button id="login" className={styles.buttonnao}>
            Já tem cadastro?
          </button>
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
    </>
  );
};

export default Cadastro;
