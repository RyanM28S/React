import React from 'react'
import styles from './Perfil.module.css'
import { Link } from 'react-router-dom'
import Sair from '../../assets/iconSair.png'
import Carta from '../../assets/iconcarta.png'
import Escudo from '../../assets/iconSair.png'
import Calendario from '../../assets/iconSair.png'

const Perfil = () => {
  return (
    <>
        <section className={styles.main}>
            <section className={styles.conteiner_perfil}>
                <div className={styles.dperfil1}>
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
                        Sair</button>
                    </div>
                    </div>
                </div>
                <div className={styles.dperfil2}>
                    <div className={styles.d1divs_perfil2}>
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
                    </div>
                    <div className={styles.d1divs_perfil2}>
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
                    </div>
                </div>
                <div className={styles.d3atividade_perfil3}>
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
                </div>
            </section>
        </section>
    </>
  )
}

export default Perfil