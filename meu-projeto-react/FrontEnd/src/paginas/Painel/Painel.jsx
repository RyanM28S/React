import livro from "../../assets/icone-livro.png"
import styles from "./Painel.module.scss";
import lapis from "../../assets/lapis.png"
import lixo from "../../assets/lixo.svg"
import pessoas from "../../assets/icone-pessoas-roxo.png";

const Painel = () => {
  return (
    <div className={styles.Painel}>
      <div className={styles.cont1}>
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
          <button>+ Novo Registro</button>
        </div>
      </div>
      <h1 className={styles.reg}>Registros de Alunos</h1>
      <div className={styles.cont2}>
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
          <div>
            <button className={styles.btn1}>
              <img src={lixo} alt="" />
            </button>
            <button className={styles.btn2}>
              <img src={lapis} alt="" />
            </button>
          </div>
        </div>
        <h2 className={styles.descricao}>?</h2>
      </div>
    </div>
  );
}

export default Painel