import livro from "../../assets/icone-livro.png"
import styles from "./Painel.module.scss";
import lapis from "../../assets/lapis.png"
import lixo from "../../assets/lixo.svg"
import { motion } from "framer-motion";
import pessoas from "../../assets/icone-pessoas-roxo.png";

const Painel = () => {
  return (
    <div className={styles.Painel}>
      <motion.div
        className={styles.cont1}
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
      >
        <div className={styles.flex2}>
          <div className={styles.flex}>
            <div>
              <img src={livro} alt="" />
            </div>
            <div>
              <h1>
                Painel do <span>Professor</span>
              </h1>
              <p>
                Olá, Prof. Vinicius Santos Camelo! Gerencie seus registros de
                alunos.
              </p>
            </div>
          </div>
          <button>
            <span>+</span> Novo Registro
          </button>
        </div>
      </motion.div>
      <motion.h1
        className={styles.reg}
        initial={{ opacity: 0, x: -30 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        Registros de Alunos
      </motion.h1>
      <motion.div
        className={styles.cont2}
        initial={{
          opacity: 0,
          scale: 0.9,
          y: 40,
        }}
        animate={{
          opacity: 1,
          scale: 1,
          y: 0,
        }}
        transition={{
          duration: 0.6,
          delay: 0.2,
        }}
        whileHover={{
          y: -5,
          boxShadow: "0 0 25px rgba(195,0,255,0.35)",
        }}
      >
        <div className={styles.flex5}>
          <div className={styles.flex4}>
            <div>
              <img src={pessoas} alt="" />
            </div>
            <div>
              <h1>?</h1>
              <div className={styles.flex3}>
                <p>
                  {" "}
                  <span>Turma:</span> ?
                </p>
                <br />
                <p>
                  <span>Nota:</span>?
                </p>
                <p>
                  <span>Data:</span>?
                </p>
              </div>
            </div>
          </div>
          <div class={styles.botoes}>
            <button className={styles.btn1}>
              <img src={lixo} alt="" />
            </button>
            <button className={styles.btn2}>
              <img src={lapis} alt="" />
            </button>
          </div>
        </div>
        <h2 className={styles.descricao}>?</h2>
      </motion.div>
    </div>
  );
}

export default Painel