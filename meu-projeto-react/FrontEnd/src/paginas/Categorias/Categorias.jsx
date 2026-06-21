import { useState } from "react";
import styles from "./Categorias.module.scss";
import Predio from "../../assets/icone-predio.png";
import Secretaria from "../../assets/iconsecretaria.png";
import Localizacao from "../../assets/iconlocalizacao.png";
import Carta from "../../assets/iconcarta.png";
import { motion } from "framer-motion";
import Cantina from "../../assets/iconcantina.png";
import Biblioteca from "../../assets/iconbiblioteca.png";
import Orientacao from "../../assets/iconorientacaoeducacional.png";
import Manutencao from "../../assets/iconmanutencao.png";
import Cordenacao from "../../assets/iconcordenacao.png";

import { Link } from "react-router-dom";

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

const Categorias = () => {
  const [categoriaSelecionada, setCategoria] = useState(null);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.4 }}
    >
      <section className={styles.main}>
        <section>
          <motion.div
            className={styles.dtexto_setores}
            initial={{
              opacity: 0,
              y: 30,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.6,
            }}
            viewport={{ once: true }}
          >
            <div>
              <motion.img
                animate={{
                  y: [0, -10, 0],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                src={Predio}
                alt=""
              />
            </div>
            <h2>
              Setores da <span>Escola</span>
            </h2>
            <p>
              Avalie os diferentes setores da instituição e contribua para
              melhorias
            </p>
          </motion.div>
        </section>
        <section>
          <motion.div
            className={styles.conteiner_setores}
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
            <div className={styles.dsetores_linha1}>
              <motion.div
                onClick={() =>
                  setCategoria({
                    foto: Secretaria,
                    nome: "Secretaria",
                    setor: "Adiministração",
                    localizacao: "1° Anda",
                    descricao:
                      "Responsável pelo atendimento aos alunos, organização de documentos, matrículas e informações acadêmicas da escola.",
                  })
                }
                className={styles.dsetores1}
                variants={cardVariants}
                transition={{ duration: 0.5 }}
                whileHover={{
                  y: -8,
                  scale: 1.02,
                }}
              >
                <div className={styles.imagem_maiorsetor1}>
                  <img src={Secretaria} alt="" />
                  <div className={styles.pdaimagemmaior}>
                    <p>Ativo</p>
                  </div>
                </div>
                <div className={styles.dtexto_setores1}>
                  <h3>Secretaria</h3>
                  <p className={styles.setorestexto}>
                    Responsavél pela administração
                    <br />
                    de matrículas, Documentos...
                  </p>
                  <div className={styles.dados_setores}>
                    <img src={Localizacao} alt="" />
                    <p>Bloco A, Sala 101</p>
                  </div>
                  <div className={styles.dados_setores}>
                    <img src={Carta} alt="" />
                    <p>secretaria@escolaexemplo.com</p>
                  </div>
                  <Link to="" className={styles.verdetalhes}>
                    Ver detalhes e avaliar →
                  </Link>
                </div>
              </motion.div>

              <motion.div
                onClick={() =>
                  setCategoria({
                    foto: Cantina,
                    nome: "Cantina",
                    setor: "Cozinha",
                    localizacao: "1° Anda",
                    descricao:
                      "Espaço destinado à venda de alimentos e bebidas, oferecendo suporte à alimentação dos alunos e funcionários.",
                  })
                }
                className={styles.dsetores2}
                variants={cardVariants}
                transition={{ duration: 0.5 }}
                whileHover={{
                  y: -8,
                  scale: 1.02,
                }}
              >
                <div className={styles.imagem_maiorsetor1}>
                  <img src={Cantina} alt="" />
                </div>
                <div className={styles.dtexto_setores2}>
                  <h3>Cantina</h3>
                  <p className={styles.setorestexto}>
                    Oferece serviços de alimentação e bebidas para alunos
                  </p>
                  <div className={styles.dados_setores}>
                    <img src={Localizacao} alt="" />
                    <p>Pátio principal</p>
                  </div>
                  <div className={styles.dados_setores}>
                    <img src={Carta} alt="" />
                    <p>biblioteca@escolaexemplo.com</p>
                  </div>
                  <Link to="">Ver detalhes e avaliar →</Link>
                </div>
              </motion.div>
            </div>
            <div className={styles.dsetores_linha1}>
              <motion.div
                onClick={() =>
                  setCategoria({
                    foto: Cordenacao,
                    nome: "Cordenação",
                    setor: "Adiministração",
                    localizacao: "1° Anda",
                    descricao:
                      "Setor que acompanha o desempenho escolar, auxilia professores e organiza atividades pedagógicas da instituição.",
                  })
                }
                className={styles.dsetores3}
                variants={cardVariants}
                transition={{ duration: 0.5 }}
                whileHover={{
                  y: -8,
                  scale: 1.02,
                }}
              >
                <div className={styles.imagem_maiorsetor1}>
                  <img src={Cordenacao} alt="" />
                </div>
                <div className={styles.dtexto_setores3}>
                  <h3>Coordenação Pedagógica</h3>
                  <p className={styles.setorestexto1}>
                    Gerencia o currículo, o desempenho dos professores e ...
                  </p>
                  <div className={styles.dados_setores}>
                    <img src={Localizacao} alt="" />
                    <p>Bloco B, Sala 205</p>
                  </div>
                  <div className={styles.dados_setores}>
                    <img src={Carta} alt="" />
                    <p>coordenacao@escolaexemplo.c...</p>
                  </div>
                  <Link to="">Ver detalhes e avaliar →</Link>
                </div>
              </motion.div>

              <motion.div
                onClick={() =>
                  setCategoria({
                    foto: Biblioteca,
                    nome: "Biblioteca",
                    setor: "Cultura",
                    localizacao: "1° Andar",
                    descricao:
                      "Ambiente voltado ao estudo e pesquisa, com livros, materiais educativos e apoio ao aprendizado dos alunos.",
                  })
                }
                className={styles.dsetores4}
                variants={cardVariants}
                transition={{ duration: 0.5 }}
                whileHover={{
                  y: -8,
                  scale: 1.02,
                }}
              >
                <div className={styles.imagem_maiorsetor1}>
                  <img src={Biblioteca} alt="" />
                </div>
                <div className={styles.dtexto_setores4}>
                  <h3>Biblioteca</h3>
                  <p className={styles.setorestexto1}>
                    Disponibiliza livros, materiais de pesquisa e recursos
                    digitais para...
                  </p>
                  <div className={styles.dados_setores}>
                    <img src={Localizacao} alt="" />
                    <p>Bloco C, Térreo</p>
                  </div>
                  <div className={styles.dados_setores}>
                    <img src={Carta} alt="" />
                    <p>biblioteca@escolaexemplo.com</p>
                  </div>
                  <Link to="">Ver detalhes e avaliar →</Link>
                </div>
              </motion.div>
            </div>
            <div className={styles.dsetores_linha1}>
              <motion.div
                onClick={() =>
                  setCategoria({
                    foto: Orientacao,
                    nome: "Orientação",
                    setor: "Adiministração",
                    localizacao: "1° andar",
                    descricao:
                      "Oferece apoio aos estudantes em questões escolares, pessoais e de convivência, ajudando no desenvolvimento educacional.",
                  })
                }
                className={styles.dsetores3}
                variants={cardVariants}
                transition={{ duration: 0.5 }}
                whileHover={{
                  y: -8,
                  scale: 1.02,
                }}
              >
                <div className={styles.imagem_maiorsetor1}>
                  <img src={Orientacao} alt="" />
                </div>
                <div className={styles.dtexto_setores3}>
                  <h3>Orientação Educacional</h3>
                  <p className={styles.setorestexto1}>
                    Oferece suporte psicopedagógico e orientação para o...
                  </p>
                  <div className={styles.dados_setores}>
                    <img src={Localizacao} alt="" />
                    <p>Bloco A, Sala 103</p>
                  </div>
                  <div className={styles.dados_setores}>
                    <img src={Carta} alt="" />
                    <p>orientacao@escolaexemplo.com</p>
                  </div>
                  <Link to="">Ver detalhes e avaliar →</Link>
                </div>
              </motion.div>

              <motion.div
                onClick={() =>
                  setCategoria({
                    foto: Manutencao,
                    nome: "Limpeza",
                    setor: "Adiministração",
                    localizacao: "1° Andar",
                    descricao:
                      "Responsável pela conservação, limpeza e bom funcionamento dos espaços da escola, garantindo um ambiente organizado e seguro.",
                  })
                }
                className={styles.dsetores3}
                variants={cardVariants}
                transition={{ duration: 0.5 }}
                whileHover={{
                  y: -8,
                  scale: 1.02,
                }}
              >
                <div className={styles.imagem_maiorsetor1}>
                  <img src={Manutencao} alt="" />
                </div>
                <div className={styles.dtexto_setores3}>
                  <h3>Manutenção e Limpeza</h3>
                  <p className={styles.setorestexto1}>
                    Responsável pela conservação, limpeza e bom funcionamento...
                  </p>
                  <div className={styles.dados_setores}>
                    <img src={Localizacao} alt="" />
                    <p>Anexo de Serviços</p>
                  </div>
                  <div className={styles.dados_setores}>
                    <img src={Carta} alt="" />
                    <p>manutencao@escolaexemplo.com</p>
                  </div>
                  <Link to="">Ver detalhes e avaliar →</Link>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </section>
      </section>
      {categoriaSelecionada && (
        <motion.div
          className={styles.overlay}
          initial={{
            opacity: 0,
          }}
          animate={{
            opacity: 1,
          }}
          exit={{
            opacity: 0,
          }}
        >
          <motion.div
            className={styles.modal}
            initial={{
              opacity: 0,
              scale: 0.7,
              y: 80,
            }}
            animate={{
              opacity: 1,
              scale: 1,
              y: 0,
            }}
            exit={{
              opacity: 0,
              scale: 0.7,
              y: 80,
            }}
            transition={{
              duration: 0.5,
              type: "spring",
            }}
          >
            <img src={categoriaSelecionada.foto} alt="" />
            <div className={styles.info}>
              <h2>{categoriaSelecionada.nome}</h2>

              <p>{categoriaSelecionada.setor}</p>
              <p>{categoriaSelecionada.localizacao}</p>
              <p>{categoriaSelecionada.email}</p>

              <p>{categoriaSelecionada.descricao}</p>
              <textarea placeholder="Digite sua Avaliação"></textarea>

              <button onClick={() => setCategoria(null)}>Fechar</button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </motion.div>
  );
};

export default Categorias;
