import style from "./Professores.module.scss";
import ImgPessoa from "../../assets/icone-pessoa.png";
import { Link } from "react-router-dom";
import karen from "../../assets/karen.png";
import romario from "../../assets/romario.png";
import joao from "../../assets/joao.jpg";
import sidney from "../../assets/sidney.png";
import gabriel from "../../assets/gabriel.jpg";
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
          <h1 className={style["prof-inicial"]}>R</h1>
          <h2>Romario</h2>
          <p className={style.p2}>Matematica Avançada</p>
          <p className={style.p2}>Ciências Exatas</p>
          <p className={style.p2}>romario.matematica@salotti.com</p>
          <p className={style.pd}>
            O professor Romário é um professor de matemática dedicado e claro na
            explicação dos conteúdos. Ele busca ajudar os alunos a compreenderem
            a matéria de forma prática, incentivando o raciocínio lógico e a
            participação em sala.
          </p>
          <div>
            <button
              onClick={() =>
                setProfessor({
                  foto: romario,
                  nome: "Romario",
                  materia: "Matematica",
                  area: "Exatas",
                  email: "Romario.educacao.prof@gmail.com",
                  descricao:
                    "Especialista em transformar conteúdos complexos de exatas em aulas dinâmicas e fáceis de entender. Sempre aberto a tirar dúvidas e a criar um ambiente leve e participativo em sala de aula.",
                })
              }
            >
              sabe mais ➜
            </button>
          </div>
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
          <h1 className={style["prof-inicial"]}>E</h1>
          <h2>Elen</h2>
          <p className={style.p2}>Linguagens Avançadas</p>
          <p className={style.p2}>Ciências Humanas</p>
          <p className={style.p2}>elen.portugues@salotti.com</p>
          <p className={style.pd}>
            A professora Elen é dedicada ao ensino da língua portuguesa, com
            foco em interpretação de textos, gramática e produção escrita. Busca
            desenvolver nos alunos o pensamento crítico, a comunicação clara e a
            capacidade de argumentação.
          </p>
          <div>
            <button
              onClick={() =>
                setProfessor({
                  nome: "Elen",
                  materia: "Portugues",
                  area: "Humanas",
                  email: "elen.prof@gmail.com",
                  descricao:
                    "Especialista em língua portuguesa, com aulas focadas em interpretação de textos, gramática e produção escrita. Incentiva o pensamento crítico e a comunicação clara, tornando as aulas dinâmicas e envolventes.",
                })
              }
            >
              sabe mais ➜
            </button>{" "}
          </div>
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
          <h1 className={style["prof-inicial"]}>K</h1>
          <h2>Karen</h2>
          <p className={style.p2}>Educação Fisica</p>
          <p className={style.p2}>Desenvolvimento Pessoal</p>
          <p className={style.p2}>keren.educacao@salotti.com</p>
          <p className={style.pd}>
            A professora Keren é muito gente boa e tem uma energia diferente em
            sala. Participa bastante da resenha e deixa o ambiente mais leve,
            sem deixar de ensinar. Já virou até brincadeira entre os alunos: se
            ela não estiver com alguma coisa rosa, é melhor ficar esperto porque
            o dia pode não estar dos melhores.
          </p>
          <div>
            <button
              onClick={() =>
                setProfessor({
                  foto: karen,
                  nome: "Karen",
                  materia: "Educação Física",
                  area: "Desenvolvimento Pessoal",
                  email: "karen.prof@gmail.com",
                  descricao:
                    "A professora Karen é conhecida por sua energia contagiante e abordagem leve em sala de aula. Ela participa ativamente das discussões, tornando o ambiente mais descontraído, mas sem perder o foco no ensino.",
                })
              }
            >
              sabe mais ➜
            </button>
          </div>
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
          <h1 className={style["prof-inicial"]}>J</h1>
          <h2>João Gabriel de Lucca</h2>
          <p className={style.p2}>Técnico em Banco de Dados</p>
          <p className={style.p2}>Tecnologia da Informação</p>
          <p className={style.p2}>joao.lucca@salotti.com</p>
          <p className={style.pd}>
            O professor João Gabriel de Lucca é especialista em banco de dados,
            sempre explicando com clareza e exemplos práticos. Conhecido pelo
            bom humor em sala, consegue transformar até SQL em algo interessante
            (o que já é um feito). Sempre disposto a ajudar, mas também cobra
            atenção — principalmente quando alguém esquece o ponto e vírgula.
          </p>
          <div>
            <button
              onClick={() =>
                setProfessor({
                  foto: joao,
                  nome: "João Gabriel de Lucca",
                  materia: "Banco de Dados",
                  area: "Tecnologia da Informação",
                  email: "João.Prof@gmail.com",
                  descricao:
                    "Especialista em banco de dados, conhecido por sua clareza e bom humor em sala de aula.Ele não é apenas um professor mas sim um amigo.",
                })
              }
            >
              sabe mais ➜
            </button>
          </div>
        </motion.div>
        <div className={style.prof}>
          <h1 className={style["prof-inicial"]}>S</h1>
          <h2>Sidney</h2>
          <p className={style.p2}>Técnico Back-End e Mobile</p>
          <p className={style.p2}>Desenvolvimento de Sistemas</p>
          <p className={style.p2}>sidney.dev@salotti.com</p>
          <p className={style.pd}>
            O professor Sidney ensina desenvolvimento back-end e mobile,
            abordando lógica de programação, APIs e criação de aplicações.
            Incentiva os alunos a desenvolverem soluções práticas e modernas
            para o mercado de tecnologia.
          </p>
          <div>
            <button
              onClick={() =>
                setProfessor({
                  foto: sidney,
                  nome: "Sidney",
                  materia: "Desenvolvimento Back-End e Mobile",
                  area: "Desenvolvimento de Sistemas",
                  email: "Sidney.geek@gmail.com",
                  descricao:
                    "O professor Sidney é especialista em desenvolvimento back-end e mobile, com aulas focadas em lógica de programação, APIs e criação de aplicações.",
                })
              }
            >
              sabe mais ➜
            </button>
          </div>
        </div>
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
          <h1 className={style["prof-inicial"]}>G</h1>
          <h2>Gabriel Silva</h2>
          <p className={style.p2}>Versionamento de Código / Projetos</p>
          <p className={style.p2}>Engenharia de Software</p>
          <p className={style.p2}>gabriel.silva@salotti.com</p>
          <p className={style.pd}>
            O professor Gabriel Silva trabalha com versionamento de código e
            gestão de projetos, ensinando ferramentas como Git e boas práticas
            de desenvolvimento. Seu objetivo é preparar os alunos para o
            trabalho em equipe e organização de projetos reais.
          </p>
          <div>
            <button
              onClick={() =>
                setProfessor({
                  foto:gabriel,
                  nome: "Gabriel",
                  materia: "Versionamento",
                  area: "Desenvolvimento de Sistemas",
                  email: "Gabriel.educacao.sp.gov",
                  descricao: "sempre preucupador em prepara as melhores aulas, e que seus alunos aprendam",
                })
              }
            >
              sabe mais ➜
            </button>
          </div>
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
              <button
                className={style.voltar}
                onClick={() => setProfessor(null)}
              >
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

                  <p className={style.materia}>
                    {professorSelecionado.materia}
                  </p>

                  <p className={style.area}>
                    {professorSelecionado.area}
                  </p>

                  <p className={style.email}>
                    {professorSelecionado.email}
                  </p>

                  <p className={style.descricao}>
                    {professorSelecionado.descricao}
                  </p>
                </div>
              </div>

              <div className={style.avaliacao}>
                <h2>Avaliar Professor</h2>

                <p className={style.subtitulo}>
                  Sua avaliação
                </p>

                <div className={style.estrelas}>
                  ☆ ☆ ☆ ☆ ☆
                </div>

                <label>
                  Seu comentário
                </label>

                <textarea
                  placeholder="Compartilhe sua experiência com este professor..."
                ></textarea>

                <button className={style.enviar}>
                  Enviar Avaliação
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
    </motion.div>
  );
};

export default Professores;
