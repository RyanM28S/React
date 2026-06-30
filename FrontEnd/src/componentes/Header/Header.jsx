import { Link } from "react-router-dom";
import { useState } from "react";
import style from "./Header.module.scss";
import ImgInicial from "../../assets/icone_inicial_header1.svg";
import ImgPessoas from "../../assets/icone_pessoas_header.svg";
import ImgPessoa from "../../assets/icone-pessoa.png";
import ImgPredio from "../../assets/icone-predio.png";
import ImgIncocolage from "../../assets/iconcollage.svg";
import ImgEntrar from "../../assets/icone-entrar.png";

const Header = () => {
  const [visivel, setVisivel] = useState(false);

  return (
    <header className={style.header}>
      <Link to="/" className={style.começo}>
        <img
          src={ImgInicial}
          alt="logo-da-inicial-do-header"
          className={style.inicial}
        />
        <h1 className={style.h1}>
          Salotti <span className={style["span-titulo"]}>Opina</span>
        </h1>
      </Link>
      <div className={`${style.pro} ${visivel ? style.aberto : style.fechado}`}>
        <div className={`${style.meio} `}>
          <Link to="/interface" className={style.btn1} id="naoh">
            <img src={ImgInicial} alt="icone-para-ir-para-tela-inicial" />
            Inicial
          </Link>
          <Link to="/professores" className={style.btn2} id="professoresh">
            <img src={ImgPessoas} alt="icone-para-ir-para-tela-professores" />
            Professores
          </Link>
          <Link to="/categorias" className={style.btn3} id="categoriash">
            <img src={ImgPredio} alt="icone-para-ir-para-tela-setores" />
            Categorias
          </Link>
          <Link to="/painel" className={style.btn5} id="entradah">
            <img src={ImgIncocolage} alt="icone-para-ir-para-tela-de-painel" />
            Painel
          </Link>
        </div>

        <div className={style.fim}>
          <Link to="/perfil" className={style["btn-perfil"]}>
            <img
              src={ImgPessoa}
              alt="icone-para-representa-pessoa-para-acessa-o-perfil"
            />
            Gui_tzn
          </Link>

          <Link to="/login" className={style.btn6}>
            <img src={ImgEntrar} alt="icone-para-ir-para-tela-cadastro" />
            Sair
          </Link>
        </div>
      </div>

      <div>
        <svg
          onClick={() => setVisivel(!visivel)}
          className={style.hamburguer}
          xmlns="http://www.w3.org/2000/svg"
          width="40"
          height="40"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
          class="lucide lucide-menu-icon lucide-menu"
        >
          <path d="M4 5h16" />
          <path d="M4 12h16" />
          <path d="M4 19h16" />
        </svg>
      </div>
      <hr />
    </header>
  );
};

export default Header;
