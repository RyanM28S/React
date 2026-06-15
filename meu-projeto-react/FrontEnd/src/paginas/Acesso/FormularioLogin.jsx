import styles from "./Acesso.module.scss"
import { Link } from "react-router-dom";

const FormularioLogin = () => {


  function handleLogin(event) {
    event.preventDefault()
    const dados = Object.fromEntries(
      new FormData(event.target)
    )

    if(!dados.Email || !dados.Senha) {
      alert("Falta informações!")
      return
    }
    console.log("Dados validos", dados)
  }



  return (
    <>
      <div id="conteudo">
        <div className={styles.conteiner}>
          <h1>Bem-vindo de volta</h1>
          <p>login para continuar</p>

          <form onSubmit={handleLogin} id="formLogin">
            <label htmlFor="Email">Usuário</label>
            <br />

            <input
              id="Email"
              name="Email"
              type="email"
              placeholder="Digite seu email de usuário"
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

            <button type="submit" className={styles["button-entrar"]}>
              Entrar na Plataforma
            </button>

            <br />
          </form>

          <p id="p"></p>

          <Link to='/cadastro' id="cadastro" className={styles.buttonnao}>
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
    </>
  );
};

export default FormularioLogin;
