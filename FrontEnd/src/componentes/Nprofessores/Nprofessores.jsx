import style from "../../paginas/Professores/Professores.module.scss";

const Nprofessores = () => {
  return (
    <div>
      <h1 className={style["prof-inicial"]}>N</h1>
      <h2>Nome</h2>
      <p className={style.p2}>Matematica Avançada</p>
      <p className={style.p2}>Ciências Exatas</p>
      <p className={style.p2}>romario.matematica@salotti.com</p>
      <p className={style.pd}>
        O professor Romário é um professor de matemática dedicado e claro na
        explicação dos conteúdos. Ele busca ajudar os alunos a compreenderem a
        matéria de forma prática, incentivando o raciocínio lógico e a
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
    </div>
  );
};
export default Nprofessores;
