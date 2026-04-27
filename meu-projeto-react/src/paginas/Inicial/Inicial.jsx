import React from 'react'
import ImgPessoasRoxo from '../../assets/icone-pessoas-roxo.png'
import imgGrafico from '../../assets/icone-grafico.png'
import imgEscudo from '../../assets/icone-esculdo.png'
import iconeInicialHeader from '../../assets/icone_inicial_header.png'
import iconePredio from '../../assets/icone-predio.png'
import iconeLivro from '../../assets/icone-livro.png'
import iconeEstrela from '../../assets/icone-estrela.png'
import iconeMensagem from '../../assets/icone-mensagem.svg'
import iconeSetaParaCima from '../../assets/icone-seta-para-cima.png'
import style from './Inicial.module.css'
const Inicial = () => {
  return (

    <>
    <section className={style.inicio}>
      <div className={style['parte-de-cima']}>
        <div className={style.parte1}>
          <div className={style.circulo}></div>
          <h2>O NOVO PADRÃO EM FEEDBACK ESCOLAR</h2>
        </div>
        <h1 className={style['titulo-parte-cima']}>
          A Voz da Escola,<span className={style['span-parte-cima']}>
            <br />
            Elevada.</span>
        </h1>
        <h3 className={style['h3-parte-cima}']}>
          Salotti Opina é uma plataforma definitiva para avaliações <br />
          institucionais. Uma interface premium projetada para conectar <br />
          alunos, professores e administração com clareza e sofisticação.
        </h3>
        <div className={style['butoes-cima']}>
          <button className={style['button1-cima']}>
            Painel de Controle de Acesso <span className={style.seta}>⇨</span>
          </button>
          <button className={style['button2-cima']}>Explorar</button>
        </div>
      </div>
    </section>
    <hr className={style.divisa} />
    <section className={style.section2}>
      <div className={style.parte2}>
        <div className={style.esquerda}>
          <h1 className={style['titulo1-parte2']}>Inteligência</h1>
          <h1 className={style['titulo2-parte2']}>Institucional</h1>
          <p className={style.subtitulo}>
            Transformamos opiniões dispersas em dados estruturados. <br />
            Uma arquitetura de informação projetada para fornecer insights
            <br />
            acionáveis ​​sobre o ecossistema escolar.
          </p>
          <div>
            <div className={style.topico2}>
              <div>
                <img src={imgGrafico} alt="icone-de-grafico-demonstrativo" />
              </div>
              <div>
                <h2>Métricas Precisas</h2>
                <p className={style['p-topico']}>
                  Dashboards analíticos para professores e dinamicamente.
                </p>
              </div>
            </div>
            <div className={style.topico1}>
              <div>
                <img src={imgEscudo} alt="icone-de-esculdo-demonstrativo" />
              </div>
              <div>
                <h2>Ambiente Seguro</h2>
                <p className={style['p-topico']}>
                  Avaliações anônimas e moderadas para garantir feedback
                  construtivo.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className={style.direita}>
          <div className={style.elemento1}>
            <div className={style.conteudo1}>
              <div className={style.elemento1flex}>
                <div className={style.circulo1}></div>
                <div>
                  <div className={style.barrinha1}></div>
                  <div className={style.barrinha2}></div>
                </div>
              </div>
              <div className={style.barrinha3}></div>
            </div>
            <div className={style.conteudo1}>
              <div className={style.elemento1flex}>
                <div className={style.circulo1}></div>
                <div>
                  <div className={style.barrinha1}></div>
                  <div className={style.barrinha2}></div>
                </div>
              </div>
              <div className={style.barrinha3}></div>
            </div>
            <div className={style.conteudo1}>
              <div className={style.elemento1flex}>
                <div className={style.circulo1}></div>
                <div>
                  <div className={style.barrinha1}></div>
                  <div className={style.barrinha2}></div>
                </div>
              </div>
              <div className={style.barrinha3}></div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <hr className={style.divisa} />
    <section className={style.parte3}>
      <div className={style['esquerda-parte2']}>
        <h1 className={style['parte3-titulo1']}>Massa da</h1>
        <h1 className={style['parte3-titulo2']}>plataforma</h1>
        <p className={style['p-parte3']}>
          Explore as ferramentas desenvolvidas para <br />melhorar a
          comunicação e o acompanhamento <br />
          dentro do ambiente escolar.
        </p>
        <a href="" className={style['a-parte3']}>Acessa Visão Geral </a>
      </div>

      <div className={style['direita-parte3']}>
        <div className={style['caixas-parte3']}>
          <div className={style['caixa1-parte3']}>
            <img src={iconeInicialHeader} alt="icone-ilustrativo-para-aba-professores" />
            <h2>Avalie Professores</h2>
            <p>
              Compatilhe sua experiência e ajude os outros alunos a conhecerem
              os melhores professores.
            </p>
          </div>
          <div className={style['caixa2-parte3']}>
            <img src={iconePredio} alt="icone-ilustrativo-para-aba-setores" />
            <h2>Setores da Escola</h2>
            <p>
              Avalie Cantina, Secretaria e outros setores fundamentais para
              essa Escola.
            </p>
          </div>
        </div>
        <div className={style['caixas-parte3']}>
          <div className={style['caixa1-parte3']}>
            <img src={iconeLivro} alt="icone-ilustrativo-para-aba-professores" />
            <h2>Painel do Professor</h2>
            <p>
              Área exclusiva par professores registrarem observações e acompanharem alunos.
            </p>
          </div>
          <div className={style['caixa2-parte3']}>
            <img src={iconeEstrela} alt="icone-ilustrativo-para-aba-setores" />
            <h2>Sistema de hid</h2>
            <p>
              Avaliações elaboradas com notas, comentários e feedback construtivo.
            </p>
          </div>
        </div>
        <div className={style['caixas-parte3']}>
          <div className={style['caixa1-parte3']}>
            <img src={iconeMensagem} alt="icone-ilustrativo-para-aba-professores" />
            <h2>(i)</h2>
            <p>
              Deixe sua opinião de forma anônima e contribua para melhorias.
            </p>
          </div>
          <div className={style['caixa2-parte3']}>
            <img src={iconeSetaParaCima} alt="icone-ilustrativo-para-aba-setores" />
            <h2>Painel de controle Moderno</h2>
            <p>
              interface intuitiva e sofisticada para uma experiência premiun.
            </p>
          </div>
        </div>
      </div>
     
    </section>
    <section className={style.parte4}>
      <div className={style['caixa1-parte4']}>
        <img src={ImgPessoasRoxo} alt="icone-para-ilustrar-comunidade"/>
        <h1>Pronto para <span> evoluir? </span></h1>
        <p>Junte-se à plataforma e faça parte da construção de um ambiente escolar <br/> mais transparente, organizado e
          eficiente.</p>
        <button>Inicia Sessão</button>
      </div>
    </section>
    </>
  )
}

export default Inicial
