import style from './Footer.module.scss'
import ImgLogo from  '../../assets/icone_inicial_header1.svg'
// import imgwhat from '../../assets/whatssap.svg'
// import imgwhatsap from '../../assets/whatssap2.svg'
// import imggit from '../../assets/github.svg'
// import imggithub from '../../assets/github2.svg'
// import imgemail from '../../assets/gmail.svg'
// import imggmail2 from '../../assets/gmail2.svg'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <footer className={style.footer}>
      <div className={style.mae}>
        <div className={style["footer-topico1"]}>
          <div className={style["footer-flex"]}>
            <div>
              <img
                src={ImgLogo}
                className={style.inicial1}
                alt="logo-do-site"
              />
            </div>
            <div>
              <h1>
                Salotti <span>Opina</span>{" "}
              </h1>
            </div>
          </div>
          <p className={style["text-footer"]}>
            Transformando a comunicação entre alunos, professores e
            instituições.
          </p>
          <div className={style["redes-sociais"]}>
            <a
              href="https://wa.me/5511999999999"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div alt="WhatsApp" className={style["icone-redes2"]}></div>
            </a>

            <a
              href="https://github.com/ViniSantosC"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div alt="github" className={style["icone-redes"]}></div>
            </a>

            <a
              href="https://github.com/ViniSantosC"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div alt="github" className={style["icone-redes3"]}></div>
            </a>
          </div>
        </div>
        <div className={style["links-rapidos"]}>
          <h2>Links Rápidos</h2>
          <Link to="/">Interface</Link>
          <br />
          <Link to="/professores">Professores</Link>
          <br />
          <Link to="/categorias">Categorias</Link>
          <br />
          <Link to="/interface">Painel</Link>
        </div>
        <div className={style["links-rapidos"]}>
          <h2>Recursos</h2>
          <Link to="/areaAluno">Área do Aluno</Link>
          <br />
          <Link to="/painelProfessores">Painel do Professor</Link>
          <br />
          <Link to="/meuPerfil">Meu perfil</Link>
        </div>
        <div className={style["links-rapidos"]}>
          <h2>Contato</h2>
          <Link to="/emial">contato@salottiopina.edu.br</Link>
          <br />
          <Link to="/numero">(11) 9999-9999</Link>
          <br />
          <Link to="/cidade">São Paulo, SP - Brasil</Link>
          <br />
        </div>
      </div>
      <p className={style.direitos}>
        © 2026 Salotti Opina. Todos os direitos reservados.
      </p>
    </footer>
  );
}

export default Footer