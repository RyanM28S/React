import styles from "./Acesso.module.scss"
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const FormularioLogin = () => {


  const ip = "172.30.2.178"

  async function handleLogin(event) {
    event.preventDefault()
    const dados = Object.fromEntries(
      new FormData(event.target)
    )

    if(!dados.email || !dados.senha) {
      alert("Falta informações!")
      return
    }
    console.log("Dados validos", dados)
    try {
      
    } catch (error) {
        
    const res = await fetch(`http://${ip}:3001/login`, {
      
    })
    }


  }



  return (
     <motion.div
  initial={{ opacity: 0 }}
  animate={{ opacity: 1 }}
  exit={{ opacity: 0 }}
  transition={{ duration: 0.4 }}
>
<h1 className={styles.stitulo} >Salotti <span>Opina</span></h1>
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
    </motion.div>
  );
};

export default FormularioLogin;
