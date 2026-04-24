import React from 'react'
import { Link } from 'react-router-dom'
import style from './Header.module.css'
import ImgInicial from '../../assets/icone_inicial_header.png'
import ImgPessoas from '../../assets/icone_pessoas_header.png'
import ImgPessoa from '../../assets/icone-pessoa.png'
import ImgPredio from '../../assets/icone-predio.png'
import ImgIncocolage from '../../assets/iconcollage.png'
import ImgEntrar from '../../assets/icone-entrar.png'



const Header = () => {




  return (
    
    <header className={style.header}>
    <div className={style.começo}>
      <img src={ImgInicial} alt="logo-da-inicial-do-header" className={style.inicial} />
      <h1 className={style.h1}>Salotti <span className={style['span-titulo']}>Opina</span></h1>
    </div>
    <div className={style.meio}>
      <Link to="/interface" className={style.btn1} id="naoh">
        <img src={ImgInicial} alt="icone-para-ir-para-tela-inicial" />
        Não se trata de uma questão de...
      </Link>
      <Link to="/professores" className={style.btn2} id="professoresh">
        <img src={ImgPessoas} alt="icone-para-ir-para-tela-professores" />
        Professores
      </Link>
      <Link to="" className={style.btn3} id="categoriash">
        <img src={ImgPredio} alt="icone-para-ir-para-tela-setores" />
        Categorias
      </Link>
       <Link to="" className={style.btn5} id="entradah">
          <img
            src={ImgIncocolage}
            alt="icone-para-ir-para-tela-de-painel"
          />
          Painel
        </Link>
    </div>
    <div className={style.fim}>
       <Link to="" className={style['btn-perfil']}>
          <img src={ImgPessoa} alt="icone-para-representa-pessoa-para-acessa-o-perfil"/>
          Gui_tzn
        </Link>

      <Link to="" className={style.btn6}>
        <img src={ImgEntrar} alt="icone-para-ir-para-tela-cadastro" />
        Sair
      </Link>
     
    </div>
    <hr/>
    </header>


    
  )
}

export default Header