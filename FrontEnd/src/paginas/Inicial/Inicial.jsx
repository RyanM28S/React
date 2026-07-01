import ImgPessoasRoxo from '../../assets/icone-pessoas-roxo.png'
import imgGrafico from '../../assets/icone-grafico.png'
import imgEscudo from '../../assets/icone-esculdo.png'
import iconeInicialHeader from '../../assets/icone_inicial_header1.svg'
import iconePredio from '../../assets/icone-predio.png'
import iconeLivro from '../../assets/icone-livro.png'
import iconeEstrela from '../../assets/icone-estrela.png'
import iconeMensagem from '../../assets/icone-mensagem.svg'
import iconeSetaParaCima from '../../assets/icone-seta-para-cima.png'
import style from './Inicial.module.scss'
import { Link } from 'react-router-dom'
import { motion } from "framer-motion";

const cardVariants = {
  hidden: {
    opacity: 0,
    y: 50,
  },

  visible: {
    opacity: 1,
    y: 0,
  },
};
const Inicial = () => {
  return (
    <>
      <motion.section
        className={style.inicio}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <div className={style["parte-de-cima"]}>
          <div className={style.parte1}>
            <div className={style.circulo}></div>
            <h2>O NOVO PADRÃO EM FEEDBACK ESCOLAR</h2>
          </div>
          <motion.h1
            className={style["titulo-parte-cima"]}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.8,
              delay: 0.2,
            }}
          >
            A Voz da Escola,
            <span className={style["span-parte-cima"]}>
              <br />
              Elevada.
            </span>
          </motion.h1>
          <motion.h3
            className={style["h3-parte-cima"]}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.7,
              delay: 0.4,
            }}
          >
            Salotti Opina é uma plataforma definitiva para avaliações
            institucionais. Uma interface premium projetada para conectar <br />
            alunos, professores e administração com clareza e sofisticação.
          </motion.h3>
          <div className={style["butoes-cima"]}>
            <Link to="login">
              <motion.button
                className={style["button1-cima"]}
                whileHover={{
                  scale: 1.05,
                  boxShadow: "0 0 25px rgba(192,0,255,.7)",
                }}
                whileTap={{
                  scale: 0.96,
                }}
              >
                Painel de Controle de Acesso{" "}
                <span className={style.seta}></span>
              </motion.button>
            </Link>

            <a href='#explorer'>
              <button className={style["button2-cima"]}>Explorar</button>
            </a>
          </div>
        </div>
      </motion.section>
      <hr className={style.divisa} />
      <section className={style.section2}>
        <div className={style.parte2}>
          <div className={style.esquerda}>
            <h1 className={style["titulo1-parte2"]}>Inteligência</h1>
            <h1 className={style["titulo2-parte2"]}>Institucional</h1>
            <p className={style.subtitulo}>
              Transformamos opiniões dispersas em dados estruturados. <br />
              Uma arquitetura de informação projetada para fornecer insights
              <br />
              acionáveis ​​sobre o ecossistema escolar.
            </p>
            <div>
              <div className={style.topico2}>
                <div>
                  <img src={imgGrafico} alt="icone-de-grafico-demonstrativo" />
                </div>
                <div>
                  <h2>Métricas Precisas</h2>
                  <p className={style["p-topico"]}>
                    Dashboards analíticos para professores e dinamicamente.
                  </p>
                </div>
              </div>
              <div className={style.topico1}>
                <div>
                  <img src={imgEscudo} alt="icone-de-esculdo-demonstrativo" />
                </div>
                <div>
                  <h2>Ambiente Seguro</h2>
                  <p className={style["p-topico"]}>
                    Avaliações anônimas e moderadas para garantir feedback
                    construtivo.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className={style.direita}>
            <div className={style.elemento1}>
              <div className={style.conteudo1}>
                <div className={style.elemento1flex}>
                  <div className={style.circulo1}></div>
                  <div>
                    <div className={style.barrinha1}></div>
                    <div className={style.barrinha2}></div>
                  </div>
                </div>
                <div className={style.barrinha3}></div>
              </div>
              <div className={style.conteudo1}>
                <div className={style.elemento1flex}>
                  <div className={style.circulo1}></div>
                  <div>
                    <div className={style.barrinha1}></div>
                    <div className={style.barrinha2}></div>
                  </div>
                </div>
                <div className={style.barrinha3}></div>
              </div>
              <div className={style.conteudo1}>
                <div className={style.elemento1flex}>
                  <div className={style.circulo1}></div>
                  <div>
                    <div className={style.barrinha1}></div>
                    <div className={style.barrinha2}></div>
                  </div>
                </div>
                <div className={style.barrinha3}></div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <hr className={style.divisa} />
      <section id="explorer" className={style.parte3}>
        <div className={style["esquerda-parte2"]}>
          <h1 className={style["parte3-titulo1"]}>Massa da</h1>
          <h1 className={style["parte3-titulo2"]}>plataforma</h1>
          <p className={style["p-parte3"]}>
            Explore as ferramentas desenvolvidas para <br />
            melhorar a comunicação e o acompanhamento <br />
            dentro do ambiente escolar.
          </p>
          <Link to="/home" className={style["a-parte3"]}>
            Acessa Visão Geral{" "}
          </Link>
        </div>

        <motion.div
          className={style["direita-parte3"]}
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
          <div className={style["caixas-parte3"]}>
            <motion.div
              className={style["caixa1-parte3"]}
              variants={cardVariants}
              transition={{
                duration: 0.5,
              }}
              whileHover={{
                y: -10,
                scale: 1.02,
              }}
            >
              <img
                src={iconeInicialHeader}
                alt="icone-ilustrativo-para-aba-professores"
              />
              <h2>Avalie Professores</h2>
              <p>
                Compatilhe sua experiência e ajude os outros alunos a conhecerem
                os melhores professores.
              </p>
            </motion.div>
            <motion.div
              className={style["caixa2-parte3"]}
              variants={cardVariants}
              transition={{
                duration: 0.5,
              }}
              whileHover={{
                y: -10,
                scale: 1.02,
              }}
            >
              <img src={iconePredio} alt="icone-ilustrativo-para-aba-setores" />
              <h2>Setores da Escola</h2>
              <p>
                Avalie Cantina, Secretaria e outros setores fundamentais para
                essa Escola.
              </p>
            </motion.div>
          </div>
          <div className={style["caixas-parte3"]}>
            <motion.div
              className={style["caixa1-parte3"]}
              variants={cardVariants}
              transition={{
                duration: 0.5,
              }}
              whileHover={{
                y: -10,
                scale: 1.02,
              }}
            >
              <img
                src={iconeLivro}
                alt="icone-ilustrativo-para-aba-professores"
              />
              <h2>Painel do Professor</h2>
              <p>
                Área exclusiva par professores registrarem observações e
                acompanharem alunos.
              </p>
            </motion.div>
            <motion.div
              className={style["caixa2-parte3"]}
              variants={cardVariants}
              transition={{
                duration: 0.5,
              }}
              whileHover={{
                y: -10,
                scale: 1.02,
              }}
            >
              <img
                src={iconeEstrela}
                alt="icone-ilustrativo-para-aba-setores"
              />
              <h2>Sistema de hid</h2>
              <p>
                Avaliações elaboradas com notas, comentários e feedback
                construtivo.
              </p>
            </motion.div>
          </div>
          <div className={style["caixas-parte3"]}>
            <motion.div
              className={style["caixa1-parte3"]}
              variants={cardVariants}
              transition={{
                duration: 0.5,
              }}
              whileHover={{
                y: -10,
                scale: 1.02,
              }}
            >
              <img
                src={iconeMensagem}
                alt="icone-ilustrativo-para-aba-professores"
              />
              <h2>Opinião pública</h2>
              <p>
                Deixe sua opinião de forma anônima e contribua para melhorias.
              </p>
            </motion.div>
            <motion.div
              className={style["caixa2-parte3"]}
              variants={cardVariants}
              transition={{
                duration: 0.5,
              }}
              whileHover={{
                y: -10,
                scale: 1.02,
              }}
            >
              <img
                src={iconeSetaParaCima}
                alt="icone-ilustrativo-para-aba-setores"
              />
              <h2>Painel de controle</h2>
              <p>
                interface intuitiva e sofisticada para uma experiência premiun.
              </p>
            </motion.div>
          </div>
        </motion.div>
      </section>
      <section className={style.parte4}>
        <motion.div
          className={style["caixa1-parte4"]}
          initial={{
            opacity: 0,
            scale: 0.9,
          }}
          whileInView={{
            opacity: 1,
            scale: 1,
          }}
          transition={{
            duration: 0.7,
          }}
          viewport={{
            once: true,
          }}
        >
          <img src={ImgPessoasRoxo} alt="icone-para-ilustrar-comunidade" />
          <h1>
            Pronto para <span> evoluir? </span>
          </h1>
          <p>
            Junte-se à plataforma e faça parte da construção de um ambiente
            escolar <br /> mais transparente, organizado e eficiente.
          </p>
          <Link to="login" className={style.buttonL}>
            Inicia Sessão
          </Link>
        </motion.div>
      </section>
    </>
  );
}

export default Inicial
