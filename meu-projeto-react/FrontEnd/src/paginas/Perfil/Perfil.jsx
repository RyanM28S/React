import styles from './Perfil.module.scss'
import { Link } from 'react-router-dom'
import Sair from '../../assets/iconSair.png'
import Carta from '../../assets/iconcarta.png'
import Escudo from '../../assets/iconEscudo.png'
import { motion } from "framer-motion";
import Calendario from '../../assets/iconCalendario.png'

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

const Perfil = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.4 }}
    >
      <section className={styles.main}>
        <section className={styles.conteiner_perfil}>
          <motion.div
            className={styles.dperfil1}
            initial={{
              opacity: 0,
              x: -40,
            }}
            animate={{
              opacity: 1,
              x: 0,
            }}
            transition={{
              duration: 0.6,
            }}
            whileHover={{
              scale: 1.01,
            }}
          >
            <div className={styles.ddivs_perfil1}>
              <div className={styles.dimagem_perfil}>
                <h1>G</h1>
              </div>

              <div className={styles.dtexto_perfil}>
                <h3>Gui_tzn 1</h3>
                <p>guitzn9@gmail.com</p>
              </div>
              <div>
                <button type="submit">
                  <img src={Sair} alt="" />
                  Sair
                </button>
              </div>
            </div>
          </motion.div>

          <div className={styles.dperfil2}>
            <motion.div
              className={styles.d1divs_perfil2}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              transition={{
                duration: 0.5,
              }}
              whileHover={{
                y: -6,
                boxShadow: "0 0 20px rgba(140,0,255,0.3)",
              }}
              viewport={{ once: true }}
            >
              <div className={styles.d1texto_perfil2}>
                <div className={styles.d2informacoes_perfil2}>
                  <img src={Carta} alt="" />
                  <h3>Informações de Contato</h3>
                </div>
                <h4>Email</h4>
                <p>guitzn9@gmail.com</p>
                <h4>Nome</h4>
                <p>Gui_tzn1</p>
                <h4>Celular</h4>
                <p>+55 11 998867112</p>
              </div>
            </motion.div>
            <motion.div
              className={styles.d1divs_perfil2}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              transition={{
                duration: 0.5,
              }}
              whileHover={{
                y: -6,
                boxShadow: "0 0 20px rgba(140,0,255,0.3)",
              }}
              viewport={{ once: true }}
            >
              <div className={styles.d2texto_perfil2}>
                <div className={styles.d2informacoes_perfil2}>
                  <img src={Escudo} alt="" />
                  <h3>Informações da Conta</h3>
                </div>
                <h4>Status</h4>
                <div className="">
                  <p>Aprovado</p>
                </div>
                <h4>Membro desde</h4>
                <div className={styles.d2data_perfil2}>
                  <img src={Calendario} alt="" />
                  <p className={styles.d2data}>21/03/2026</p>
                </div>
                <h4>Último acesso</h4>
                <div className={styles.d2data_perfil2}>
                  <img src={Calendario} alt="" />
                  <p className={styles.d2data}>17/04/2026</p>
                </div>
              </div>
            </motion.div>
          </div>

          <motion.div
            className={styles.d3atividade_perfil3}
            initial={{
              opacity: 0,
              y: 40,
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
            <div className={styles.d3resumo_perfil}>
              <h3>Resumo de Atividades</h3>
            </div>
            <div className={styles.d3conteiner_perfil3}>
              <div className={styles.d3divs_perfil3}>
                <p>Avaliações</p>
                <h3>12</h3>
              </div>
              <div className={styles.d3divs_perfil3}>
                <p>Avaliações</p>
                <h4>8</h4>
              </div>
              <div className={styles.d3divs_perfil3}>
                <p>Contribuições</p>
                <h5>20</h5>
              </div>
            </div>
          </motion.div>
          <details>
            <summary>
              {" "}
              <span>💜</span> Nossa Equipe
            </summary>
            <div className={styles.equipeConteudo}>
              <div>
                <h3>Vinicius Santos</h3>
                <p>Front-End Desenvolvedor</p>
                <Link
                  className={styles.link}
                  to="https://github.com/ViniSantosC"
                >
                  Github
                </Link>
              </div>

              <div>
                <h3>Ryan Matos</h3>
                <p>Back-End Desenvolvedor</p>
                <Link className={styles.link} to="https://github.com/RyanM28S">
                  Github
                </Link>
              </div>

              <div>
                <h3>Lucas Lopes</h3>
                <p>Back-End Desenvolvedor</p>
                <Link
                  className={styles.link}
                  to="https://github.com/Lucas-Lopes-Alves"
                >
                  Github
                </Link>
              </div>

              <div>
                <h3>Guilherme Bueno</h3>
                <p>Front-End Desenvolvedor</p>
                <Link
                  className={styles.link}
                  to="https://github.com/GuilhermeBuenoDA"
                >
                  Github
                </Link>
              </div>

              <p className={styles.frase}>
                ✨ Obrigado por fazerem parte do Salotti Opina.
              </p>
            </div>
          </details>
        </section>
      </section>
    </motion.div>
  );
}

export default Perfil