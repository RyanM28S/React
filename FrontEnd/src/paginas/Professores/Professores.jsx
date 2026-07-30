import style from "./Professores.module.scss";
import ImgPessoa from "../../assets/icone-pessoa.png";
import { Link } from "react-router-dom";
import romario from "../../assets/romario.png";
import karen from "../../assets/karen.png";
import joao from "../../assets/joao.jpg";
import sidney from "../../assets/sidney.png";
import gabriel from "../../assets/gabriel.jpg";
import Professores2 from "../../componentes/Professores/Professores2";
import { motion } from "framer-motion";
import { useState } from "react";

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
const Professores = () => {
  const [professorSelecionado, setProfessor] = useState(null);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.4 }}
    >
      <motion.img
        animate={{
          y: [0, -10, 0],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        src={ImgPessoa}
        alt="icone-inicial-da-aba-professores"
        className={style.logo}
      />
      <motion.h1
        className={style.titulo}
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
        Nossos <span>professores</span>{" "}
      </motion.h1>
      <motion.p
        className={style["titulo-p"]}
        initial={{
          opacity: 0,
        }}
        animate={{
          opacity: 1,
        }}
        transition={{
          delay: 0.2,
          duration: 0.5,
        }}
      >
        Conheça os professores da instituição e compartilhe sua experiência
      </motion.p>
      <motion.div
        className={style.professores}
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
          className={style.prof}
          variants={cardVariants}
          transition={{
            duration: 0.5,
          }}
          whileHover={{
            y: -10,
            scale: 1.02,
          }}
        >
          <Professores2
            foto={romario}
            nome="Romário"
            area="Exatas"
            materia="Matemática"
            email="romario@escola.com"
            descricao="Especialista em transformar conteúdos complexos de exatas em aulas dinâmicas e fáceis de entender. Sempre aberto a tirar dúvidas e a criar um ambiente leve e participativo em sala de aula."
            setProfessor={setProfessor}
          />
        </motion.div>
        <motion.div
          className={style.prof}
          variants={cardVariants}
          transition={{
            duration: 0.5,
          }}
          whileHover={{
            y: -10,
            scale: 1.02,
          }}
        >
          <Professores2
            foto={romario}
            nome="Elen"
            area="Ciências Humanas"
            materia="Linguagens Avançadas"
            email="elen.portugues@salotti.com"
            descricao="A professora Elen é dedicada ao ensino da língua portuguesa, com
            foco em interpretação de textos, gramática e produção escrita. Busca
            desenvolver nos alunos o pensamento crítico, a comunicação clara e a
            capacidade de argumentação."
            setProfessor={setProfessor}
          />
        </motion.div>
        <motion.div
          className={style.prof}
          variants={cardVariants}
          transition={{
            duration: 0.5,
          }}
          whileHover={{
            y: -10,
            scale: 1.02,
          }}
        >
          <Professores2
            foto={romario}
            nome="Karen"
            area="Desenvolvimento Pessoal"
            materia="Educação Fisica"
            email="keren.educacao@salotti.com"
            descricao="A professora Keren é muito gente boa e tem uma energia diferente em
            sala. Participa bastante da resenha e deixa o ambiente mais leve,
            sem deixar de ensinar. Já virou até brincadeira entre os alunos: se
            ela não estiver com alguma coisa rosa, é melhor ficar esperto porque
            o dia pode não estar dos melhores."
            setProfessor={setProfessor}
          />
        </motion.div>
      </motion.div>
      <motion.div
        className={style.professores}
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
          className={style.prof}
          variants={cardVariants}
          transition={{
            duration: 0.5,
          }}
          whileHover={{
            y: -10,
            scale: 1.02,
          }}
        >
          <Professores2
            foto={romario}
            nome="João Gabriel"
            area="Tecnologia da Informação"
            materia="Técnico em Banco de Dados"
            email="joao.lucca@salotti.com"
            descricao="O professor João Gabriel de Lucca é especialista em banco de dados,
            sempre explicando com clareza e exemplos práticos. Conhecido pelo
            bom humor em sala, consegue transformar até SQL em algo interessante
            (o que já é um feito). Sempre disposto a ajudar, mas também cobra
            atenção — principalmente quando alguém esquece o ponto e vírgula."
            setProfessor={setProfessor}
          />
        </motion.div>
        <motion.div
          className={style.prof}
          variants={cardVariants}
          transition={{
            duration: 0.5,
          }}
          whileHover={{
            y: -10,
            scale: 1.02,
          }}
        >
          <Professores2
            foto={romario}
            nome="Sidney"
            area="Desenvolvimento de Sistemas"
            materia="Técnico Back-End e Mobile"
            email="sidney.dev@salotti.com"
            descricao="O professor Sidney ensina desenvolvimento back-end e mobile,
            abordando lógica de programação, APIs e criação de aplicações.
            Incentiva os alunos a desenvolverem soluções práticas e modernas
            para o mercado de tecnologia."
            setProfessor={setProfessor}
          />
        </motion.div>

        <motion.div
          className={style.prof}
          variants={cardVariants}
          transition={{
            duration: 0.5,
          }}
          whileHover={{
            y: -10,
            scale: 1.02,
          }}
        >
          <Professores2
            foto={romario}
            nome="Gabriel Silva"
            area="Engenharia de Software"
            materia="Versionamento de Código e Projetos"
            email="gabriel.silva@salotti.com"
            descricao="O professor Gabriel Silva trabalha com versionamento de código e
            gestão de projetos, ensinando ferramentas como Git e boas práticas
            de desenvolvimento. Seu objetivo é preparar os alunos para o
            trabalho em equipe e organização de projetos reais."
            setProfessor={setProfessor}
          />
        </motion.div>
      </motion.div>

      {professorSelecionado && (
        <motion.div
          className={style.overlay}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <motion.div
            className={style.modal}
            initial={{
              opacity: 0,
              scale: 0.95,
              y: 20,
            }}
            animate={{
              opacity: 1,
              scale: 1,
              y: 0,
            }}
            exit={{
              opacity: 0,
              scale: 0.95,
              y: 20,
            }}
            transition={{
              duration: 0.35,
            }}
          >
            <button className={style.voltar} onClick={() => setProfessor(null)}>
              ← Voltar para professores
            </button>

            <div className={style.topo}>
              <div className={style.foto}>
                <img
                  src={professorSelecionado.foto}
                  alt={professorSelecionado.nome}
                />
              </div>

              <div className={style.info}>
                <h1>{professorSelecionado.nome}</h1>

                <p className={style.materia}>{professorSelecionado.materia}</p>

                <p className={style.area}>{professorSelecionado.area}</p>

                <p className={style.email}>{professorSelecionado.email}</p>

                <p className={style.descricao}>
                  {professorSelecionado.descricao}
                </p>
              </div>
            </div>

            <div className={style.avaliacao}>
              <h2>Avaliar Professor</h2>

              <p className={style.subtitulo}>Sua avaliação</p>

              <div className={style.estrelas}>☆ ☆ ☆ ☆ ☆</div>

              <label>Seu comentário</label>

              <textarea placeholder="Compartilhe sua experiência com este professor..."></textarea>

              <button className={style.enviar}>Enviar Avaliação</button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </motion.div>
  );
};

export default Professores;
