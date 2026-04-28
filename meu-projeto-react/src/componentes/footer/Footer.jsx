import React from 'react'
import style from './Footer.module.css'
import ImgLogo from  '../../assets/icone_inicial_header1.svg'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    
    <footer className={style.footer}>
      <div className={style.mae}>
        <div className={style['footer-topico1']}>
          <div className={style['footer-flex']}>
            <div>
              <img src={ImgLogo} className={style.inicial1} alt="logo-do-site"/>
            </div>
            <div>
                <h1>Salotti <span>Opina</span> </h1></div>
            </div> 
            <p className={style['text-footer']}>Uma plataforma moderna e sofisticada <br/> para feedback escolar. Transformando a <br/> comunicação entre alunos, professores e <br/> instituições.</p>
        </div>
        <div className={style['links-rapidos']}>
          <h2>Links Rápidos</h2>
          <Link to='/' >Não se trata de uma questão de...</Link>
          <br/>
          <Link to='/professores' >Professores</Link>
          <br/>
          <Link to='/categorias' >Categorias</Link>
          <br/>
          <Link to='/interface' >Painel</Link>
        </div>
        <div className={style['links-rapidos']}>
          <h2>Recursos</h2>
          <Link to='/areaAluno' >Área do Aluno</Link>
          <br/>
          <Link to='/painelProfessores' >Painel do Professor</Link>
          <br/>
          <Link to='/meuPerfil' >Meu perfil</Link>
        </div>
        <div className={style['links-rapidos']}>
          <h2>Contato</h2>
          <Link to='/emial' >contato@salottiopina.edu.br</Link>
          <br/>
          <Link to='/numero' >(11) 9999-9999</Link>
          <br/>
          <Link to='/cidade' >São Paulo, SP - Brasil</Link>
          <br/>
        </div>
      </div>
      <p className={style.direitos}>© 2026 Salotti Opina. Todos os direitos reservados.</p>  
    </footer>

  )
}

export default Footer