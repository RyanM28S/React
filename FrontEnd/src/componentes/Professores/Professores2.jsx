
import style from "../../paginas/Professores/Professores.module.scss";


const Professores2 = ({
  foto,
  nome,
  area,
  materia,
  email,
  descricao,
  setProfessor,
}) => {
  return (
    <div>
      <h1 className={style["prof-inicial"]}>{nome?.charAt(0).toUpperCase()}</h1>
      <h2>{nome}</h2>
      <p className={style.p2}>{area}</p>
      <p className={style.p2}>{materia}</p>
      <p className={style.p2}>{email}</p>
      <p className={style.pd}>{descricao}</p>
      <div>
        <button
          onClick={() =>
            setProfessor({
              foto,
              nome,
              materia,
              area,
              email,
              descricao
            })
          }
        >
          sabe mais ➜
        </button>
      </div>
    </div>
  );
};
export default Professores2;
