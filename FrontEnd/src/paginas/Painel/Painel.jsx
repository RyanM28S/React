import livro from "../../assets/icone-livro.png";
import styles from "./Painel.module.scss";
import lapis from "../../assets/lapis.png";
import lixo from "../../assets/lixo.svg";
import { useState } from "react";

import pessoas from "../../assets/icone-pessoas-roxo.png";
import { motion, AnimatePresence } from "framer-motion";

const Painel = () => {
  const [visivel, setvisivel] = useState(false);

  async function Registrar(event) {
    event.preventDefault();

    const form = event.currentTarget;
    // const notas = {
    //   nota1: form.nota1.value,
    //   nota2: form.nota2.value,
    //   nota3: form.nota3.value,
    //   nota4: form.nota4.value
    // }
    const dados = Object.fromEntries(new FormData(form));

    const botaoClicado = event.nativeEvent.submitter.value;

    if (botaoClicado === "atualizar") {
      if (!dados.ra) {
        return alert("Falta informações!");
      }
      try {
        const res = await fetch("http://localhost:3001/atualizar", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(dados),
        });
        if (!res.ok) {
          const data = await res.json();
          throw new Error(data.message || "Erro ao atualizar");
        }
        const data = await res.json();
        console.log(data);
      } catch (error) {
        console.error(error.message);
      }
    }
    if (botaoClicado === "criar") {
      if (!dados.nome || !dados.turma || !dados.ra) {
        return alert("Falta informações!");
      }
      try {
        const res = await fetch("http://localhost:3001/registrar", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(dados),
        });
        if (!res.ok) {
          const data = await res.json();
          throw new Error(data.message || "Erro ao registrar");
        }
        const data = await res.json();
        console.log(data);
      } catch (error) {
        console.error(error.message);
      }
    }

    // dados.notas = notas;
  }

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
          <button onClick={() => setvisivel(!visivel)}>
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
                  <span>Ra:</span>?
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
      <AnimatePresence>
        {visivel && (
          <motion.div
            className={styles.overlay}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className={styles.modal}
              initial={{
                opacity: 0,
                scale: 0.8,
                y: 50,
              }}
              animate={{
                opacity: 1,
                scale: 1,
                y: 0,
              }}
              exit={{
                opacity: 0,
                scale: 0.8,
                y: 50,
              }}
              transition={{
                duration: 0.4,
                type: "spring",
                stiffness: 120,
              }}
            >
              <form onSubmit={Registrar} className={styles.formulario}>
                <button
                  onClick={() => setvisivel(false)}
                  type="button"
                  className={styles.x}
                >
                  x
                </button>
                <div className={styles.inputGroup}>
                  <input id="nome" name="nome" type="text" />
                  <label htmlFor="nome">Nome</label>
                </div>

                <div className={styles.inputGroup}>
                  <input id="turma" name="turma" type="text" />
                  <label htmlFor="turma">turma</label>
                </div>
                <div className={styles.inputGroup}>
                  <input id="ra" name="ra" type="text" />
                  <label htmlFor="ra">Ra</label>
                </div>
                <div className={styles.inputGroup}>
                  <input id="descricao" name="descricao" type="text"  />
                  <label htmlFor="ra">Descrição</label>
                </div>
                <div className={styles.notas}>
                  <label htmlFor="notas">Notas</label>
                </div>

                <div className={styles.notas}>
                  <input type="number" name="nota1" placeholder="Nota 1°" />
                  <input type="number" name="nota2" placeholder="Nota 2°" />
                  <input type="number" name="nota3" placeholder="Nota 3°" />
                  <input type="number" name="nota4" placeholder="Nota 4°" />
                </div>
                <div className={styles.ali}>
                  <button
                    type="submit"
                    name="acao"
                    value="criar"
                    className={styles.criar}
                  >
                    Criar
                  </button>
                  <button
                    type="submit"
                    name="acao"
                    value="atualizar"
                    className={styles.atual}
                  >
                    Atualizar
                  </button>
                </div>
              </form>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Painel;
