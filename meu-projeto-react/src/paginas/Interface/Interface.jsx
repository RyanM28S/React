import React from 'react'
import style from './Interface.module.css'
import Collage from '../../assets/iconcollage.svg'
import Star from '../../assets/iconStar.svg'
import Mensagem from '../../assets/iconBalaodemensagem.svg'
import Grafico from '../../assets/iconLinhagrafico.svg'
import { Link } from 'react-router-dom'

const Interface = () => {
  return (
    <>
        <section className={style.main}>
            <div className={style.comeco_conteiner}>
                <div className={style.comeco_bemvindo}>
                    <div className={style.bemvindo_imagem}>
                    <img src={Collage} alt="" />
                    </div>
                    <div className={style.bemvindo_texto}>
                    <h2>Bem-vindo, <span id="nome">jurandirbueno02010</span>!</h2> <p>Este é seu painel de controle. Aqui você pode acessar todas as funcionalidades plataforma.</p>
                    </div>
                </div>
            </div>
            <div className={style.titulos}>
            <h3>Suas Estatísticas</h3>
            </div>
            
            <div className={style.container_estatisticas}>
            <div className={style.destatistica}>
                <div className={style.destatistica1}>
                <img src={Star} alt="" />
                <h4>12</h4>
                </div>
                <div className={style.destatistica2}>
                <p>Avaliações Realizadas</p>
                </div>
            </div> 
            
            <div className={style.destatistica}>
                <div className={style.destatistica1}>
                <img src={Mensagem} alt="" />
                <h4>8</h4>
                </div>
                <div className={style.destatistica2}>
                <p>Comentários</p>
                </div>
            </div>
            <div className={style.destatistica}>
                <div className={style.destatistica1}>
                <img src={Grafico} alt="" />
                <h4>20</h4>
                </div>
                <div className={style.destatistica2}>
                <p>Contribuições</p>
                </div>
            </div>
            </div>
            
            <div className={style.titulos}>
            <h3>Ações Rápidas</h3>
            </div>
            <div className={style.container_acoes}>
            <div className={style.dacoes}>
                <img  alt="" />
                <h4>Avaliar Professores</h4>
                <p>Compartilhe suas experiências com os professores.</p>
                <Link to="/home">
                <h5>Acessar</h5>
                </Link>
            </div>
            <div className={style.dacoes}>
                <img  alt="" />
                <h4>Avaliar Setores</h4>
                <p>Avalie diferentes setores da escola.</p>
                <Link to="/home">
                <h5>Acessar</h5>
                </Link>
            </div>
            <div className={style.dacoes}>
                <img  alt="" />
                <h4>Painel de Professores</h4>
                <p>Veja a categoria de professores.</p>
                <Link to="/home">
                <h5>Acessar</h5>
                </Link>
            </div>
            </div>
            <div className={style.titulos}>
            <h3>Atividades Recente</h3>
            </div>
            
            <div className={style.datividade}>
            <img src={Collage} alt="" />
            <p>Nenhuma atividade recentes para exibir</p>
            </div>
        </section>
    </>
  )
}

export default Interface