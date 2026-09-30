import livro from "../../assets/icone-livro.png";
import styles from "./Painel.module.scss";
import lapis from "../../assets/lapis.png";
import lixo from "../../assets/lixo.svg";
import { useEffect, useState } from "react";
import { jwtDecode } from "jwt-decode";

import pessoas from "../../assets/icone-pessoas-roxo.png";
import { motion, AnimatePresence } from "framer-motion";

const Painel = () => {
  const token = jwtDecode(localStorage.getItem("token"));
  const nome = token.nome;
  const [visivel, setvisivel] = useState(false);
  const [alunos, setAlunos] = useState([]);
  const [pesquisa, setPesquisa] = useState("");

  const alunosFiltrados = alunos.filter((aluno) =>
    aluno.turma?.toLowerCase().includes(pesquisa.toLowerCase()),
  );

  async function buscarAlunos() {
    try {
      const res = await fetch("http://localhost:3001/alunos", {
        method: "GET",
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      });
      const data = await res.json();
      if (!res.ok) {
        throw new Error(data.message || "Erro ao buscar alunos");
      }
      setAlunos(data);
    } catch (error) {
      console.error(error.message);
    }
  }
  useEffect(() => {
    buscarAlunos();
  }, []);
  async function Excluir(id) {
    try {
      const res = await fetch(`http://localhost:3001/alunos/${id}`, {
        method: "DELETE",
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      });
      const data = await res.json();
      if (!res.ok) {
        throw new Error(data.message || "Erro ao excluir");
      }
      await buscarAlunos();
      setvisivel(false);
    } catch (error) {
      console.error(error.message);
    }
  }
  async function Registrar(event) {
    event.preventDefault();

    const form = event.currentTarget;
    const dados = Object.fromEntries(new FormData(form));

    if (!dados.nome || !dados.turma || !dados.ra) {
      return alert("Falta informações!");
    }
    try {
      const res = await fetch("http://localhost:3001/registrar", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
        body: JSON.stringify(dados),
      });
      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.message || "Erro ao registrar");
      }
      console.log(data);
      await buscarAlunos();
      setvisivel(false);
    } catch (error) {
      console.error(error.message);
    }
  }
  async function Atualizar(event) {
    event.preventDefault();
    const form = event.currentTarget.form;
    const dados = Object.fromEntries(new FormData(form));

    if (!dados.ra) {
      return alert("Falta informações!");
    }
    try {
      const res = await fetch("http://localhost:3001/atualizar", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
        body: JSON.stringify(dados),
      });
      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.message || "Erro ao registrar");
      }
      console.log(data);
      await buscarAlunos();
    } catch (error) {
      console.error(error.message);
    }
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
              <p>Olá, Prof. {nome}! Gerencie seus registros de alunos.</p>
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
      <input
        type="text"
        placeholder="Pesquisar turma..."
        value={pesquisa}
        onChange={(e) => setPesquisa(e.target.value)}
      />
      {alunosFiltrados.map((aluno) => (
        <motion.div
          key={aluno.id_aluno}
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
          }}
          whileHover={{
            y: -5,
            boxShadow: "0 0 25px rgba(195,0,255,0.35)",
          }}
        >
          <div className={styles.flex5}>
            <div className={styles.flex4}>
              <div className={styles.divh1}>
                <h2>{aluno.nome[0]}</h2>
              </div>

              <div>
                <h1>{aluno.nome}</h1>

                <div className={styles.flex3}>
                  <p>
                    <span>Turma:</span> {aluno.turma}
                  </p>

                  <p>
                    <span>Nota:</span> {aluno.nota_final ?? "Sem notas"}
                  </p>

                  <p>
                    <span>RA:</span> {aluno.ra}
                  </p>
                </div>
              </div>
            </div>

            <div className={styles.botoes}>
              <button
                onClick={() => Excluir(aluno.id_aluno)}
                className={styles.btn1}
              >
                <img src={lixo} alt="Excluir aluno" />
              </button>
            </div>
          </div>

          <h2 className={styles.descricao}>
            Notas: {aluno.nota_1 ?? "-"} | {aluno.nota_2 ?? "-"} |{" "}
            {aluno.nota_3 ?? "-"} | {aluno.nota_4 ?? "-"}
          </h2>
        </motion.div>
      ))}
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
                  <input id="nome" name="nome" type="text" required />
                  <label htmlFor="nome">Nome</label>
                </div>

                <div className={styles.inputGroup}>
                  <input id="turma" name="turma" type="text" required />
                  <label htmlFor="turma">turma</label>
                </div>
                <div className={styles.inputGroup}>
                  <input id="ra" name="ra" type="text" required />
                  <label htmlFor="ra">Ra</label>
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
                <div>
                  <button type="submit" className={styles.atual}>
                    Registrar
                  </button>
                  <button
                    type="button"
                    onClick={Atualizar}
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
