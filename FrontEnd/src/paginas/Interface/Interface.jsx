import { useState, useEffect } from "react";
import style from "./Interface.module.scss";
import Collage from "../../assets/iconcollage.svg";
import Star from "../../assets/iconStar.svg";
import Mensagem from "../../assets/iconBalaodemensagem.svg";
import Grafico from "../../assets/iconLinhagrafico.svg";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { jwtDecode } from "jwt-decode";

const cardVariants = {
  hidden: {
    opacity: 0,
    y: 40,
  },

  visible: {
    opacity: 1,
    y: 0,
  },
};

const Interface = () => {
  const [avaliacoes, setAvaliacoes] = useState([]);
  const [usuario, setUsuario] = useState(null);
  async function Buscar() {
    try {
      const res = await fetch("http://localhost:3001/interface", {
        method: "GET",
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      });
      const data = await res.json();
      if (!res.ok) {
        throw new Error(data.message);
      }
      setUsuario(data);
    } catch (error) {
      console.error(error.message);
    }
  }
  async function BuscarAvaliacoes() {
    try {
      const res = await fetch("http://localhost:3001/minha-lista", {
        method: "GET",
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.message);
      }

      setAvaliacoes(data);
    } catch (error) {
      console.error(error.message);
    }
  }

  const [pagina, setPagina] = useState(1);

  const porPagina = 2;

  const inicio = (pagina - 1) * porPagina;

  const avaliacoesPagina = avaliacoes.slice(inicio, inicio + porPagina);

  const totalPaginas = Math.max(1, Math.ceil(avaliacoes.length / porPagina));
  useEffect(() => {
    Buscar();
    BuscarAvaliacoes();
  }, []);
  useEffect(() => {
  if (pagina > totalPaginas) {
    setPagina(totalPaginas);
  }
}, [pagina, totalPaginas]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.4 }}
    >
      <section className={style.main}>
        <div className={style.comeco_conteiner}>
          <div className={style.comeco_bemvindo}>
            <div className={style.bemvindo_imagem}>
              <img src={Collage} alt="" />
            </div>
            <div className={style.bemvindo_texto}>
              <motion.h2
                initial={{
                  opacity: 0,
                  y: 20,
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                }}
                transition={{
                  duration: 0.6,
                }}
              >
                Bem-vindo, <span id="nome">{usuario?.nome}</span>!
              </motion.h2>{" "}
              <p>
                Este é seu painel de controle. Aqui você pode acessar todas as
                funcionalidades plataforma.
              </p>
            </div>
          </div>
        </div>
        <motion.div
          className={style.titulos}
          initial={{
            opacity: 0,
            x: -30,
          }}
          whileInView={{
            opacity: 1,
            x: 0,
          }}
          transition={{
            duration: 0.5,
          }}
          viewport={{ once: true }}
        >
          <h3>Suas Estatísticas</h3>
        </motion.div>

        <motion.div
          className={style.container_estatisticas}
          variants={{
            hidden: {},

            visible: {
              transition: {
                staggerChildren: 0.15,
              },
            },
          }}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <motion.div
            className={style.destatistica}
            variants={cardVariants}
            transition={{ duration: 0.5 }}
            whileHover={{
              y: -10,
              scale: 1.03,
              boxShadow: "0 0 25px rgba(140,0,255,0.4)",
            }}
          >
            <div className={style.destatistica1}>
              <motion.img
                src={Star}
                alt=""
                animate={{
                  y: [0, -6, 0],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
              <h4>12</h4>
            </div>
            <div className={style.destatistica2}>
              <p>Avaliações Realizadas</p>
            </div>
          </motion.div>

          <motion.div
            className={style.destatistica}
            variants={cardVariants}
            transition={{ duration: 0.5 }}
            whileHover={{
              y: -10,
              scale: 1.03,
              boxShadow: "0 0 25px rgba(140,0,255,0.4)",
            }}
          >
            <div className={style.destatistica1}>
              <motion.img
                src={Mensagem}
                alt=""
                animate={{
                  y: [0, -6, 0],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
              <h4>8</h4>
            </div>
            <div className={style.destatistica2}>
              <p>Comentários</p>
            </div>
          </motion.div>
          <motion.div
            className={style.destatistica}
            variants={cardVariants}
            transition={{ duration: 0.5 }}
            whileHover={{
              y: -10,
              scale: 1.03,
              boxShadow: "0 0 25px rgba(140,0,255,0.4)",
            }}
          >
            <div className={style.destatistica1}>
              <motion.img
                src={Grafico}
                alt=""
                animate={{
                  y: [0, -6, 0],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
              <h4>20</h4>
            </div>
            <div className={style.destatistica2}>
              <p>Contribuições</p>
            </div>
          </motion.div>
        </motion.div>

        <div className={style.titulos}>
          <h3>Ações Rápidas</h3>
        </div>
        <motion.div
          className={style.container_acoes}
          variants={{
            hidden: {},

            visible: {
              transition: {
                staggerChildren: 0.2,
              },
            },
          }}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <motion.div
            className={style.dacoes}
            variants={cardVariants}
            transition={{ duration: 0.5 }}
            whileHover={{
              scale: 1.03,
              y: -8,
              borderColor: "#a100ff",
            }}
          >
            <img alt="" />
            <h4>Avaliar Professores</h4>
            <p>Compartilhe suas experiências com os professores.</p>
            <Link to="/professores">
              <h5>Acessar</h5>
            </Link>
          </motion.div>
          <div className={style.dacoes}>
            <img alt="" />
            <h4>Avaliar Setores</h4>
            <p>Avalie diferentes setores da escola.</p>
            <Link to="/categorias">
              <h5>Acessar</h5>
            </Link>
          </div>
          {
            <div className={style.dacoes}>
              <img alt="" />
              <h4>Painel de Professores</h4>
              <p>Veja a categoria de professores.</p>
              <Link to="/painel">
                <h5>Acessar</h5>
              </Link>
            </div>
          }
        </motion.div>
        <div className={style.titulos}>
          <h3>Atividades Recente</h3>
        </div>

        <motion.div
          className={style.datividade}
          initial={{
            opacity: 0,
            scale: 0.9,
          }}
          whileInView={{
            opacity: 1,
            scale: 1,
          }}
          transition={{
            duration: 0.5,
          }}
          whileHover={{
            scale: 1.02,
          }}
          viewport={{ once: true }}
        >
          <section className={style.scomentarios}>
            {avaliacoesPagina.map((avaliacao) => (
              <div className={style.dcomentarios} key={avaliacao.id}>
                <h1>{avaliacao.professor || avaliacao.categoria}</h1>

                <p>{avaliacao.comentario}</p>

                <div>{"★".repeat(avaliacao.estrelas)}</div>
              </div>
            ))}
          </section>{" "}
          <div className={style.paginacao}>
            <button
              className={style.botaop} onClick={() => setPagina(pagina - 1)}
              disabled={pagina === 1}
            >
              ←
            </button>

            <span>
              Página {pagina} de {totalPaginas}
            </span>

            <button
              className={style.botaop} onClick={() => setPagina(pagina + 1)}
              disabled={pagina === totalPaginas}
            >
              →
            </button>
          </div>
        </motion.div>
      </section>
    </motion.div>
  );
};

export default Interface;
