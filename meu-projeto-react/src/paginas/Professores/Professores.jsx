import React from 'react'
import style from './Professores.module.css'
import ImgPessoa from '../../assets/icone-pessoa.png'
import {Link} from 'react-router-dom'

const Professores = () => {
  return (
      <>
           <img src={ImgPessoa} alt="icone-inicial-da-aba-professores" className={style.logo}/>
        <h1 className={style.titulo}>Nossos <span>professores</span> </h1>
        <p className={style["titulo-p"]}>Conheça os professores da instituição e compartilhe sua experiência</p>
        <div className={style.professores}>
            <div className={style.prof}>
              <h1 className={style["prof-inicial"]}>R</h1>
              <h2>Romario</h2>
              <p className={style.p2}>Matematica Avançada</p>
              <p className={style.p2}>Ciências Exatas</p>
              <p className={style.p2}>romario.matematica@salotti.com</p>
              <p className={style.pd}>O professor Romário é um professor de matemática dedicado e claro na explicação dos conteúdos. Ele busca ajudar os alunos a compreenderem a matéria de forma prática, incentivando o raciocínio lógico e a participação em sala.</p>
              <div><Link to="/home">sabe mais ➜</Link></div>
              
            </div>
              <div className={style.prof}>
              <h1 className={style["prof-inicial"]}>E</h1>
              <h2>Elen</h2>
              <p className={style.p2}>Linguagens Avançadas</p>
              <p className={style.p2}>Ciências Humanas</p>
              <p className={style.p2}>elen.portugues@salotti.com</p>
              <p className={style.pd}>A professora Elen é dedicada ao ensino da língua portuguesa, com foco em interpretação de textos, gramática e produção escrita. Busca desenvolver nos alunos o pensamento crítico, a comunicação clara e a capacidade de argumentação.</p>
              <div><Link to="/home">sabe mais ➜</Link></div>
            </div>
            <div className={style.prof}>
              <h1 className={style["prof-inicial"]}>K</h1>
              <h2>Karen</h2>
              <p className={style.p2}>Educação Fisica</p>
              <p className={style.p2}>Desenvolvimento Pessoal</p>
              <p className={style.p2}>keren.educacao@salotti.com</p>
              <p className={style.pd}>A professora Keren é muito gente boa e tem uma energia diferente em sala. Participa bastante da resenha e deixa o ambiente mais leve, sem deixar de ensinar. Já virou até brincadeira entre os alunos: se ela não estiver com alguma coisa rosa, é melhor ficar esperto porque o dia pode não estar dos melhores.</p>
              <div><Link>sabe mais ➜</Link></div>
            </div>
        </div>
         <div className={style.professores}>
            <div className={style.prof}>
              <h1 className={style["prof-inicial"]}>J</h1>
              <h2>João Gabriel de Lucca</h2>
              <p className={style.p2}>Técnico em Banco de Dados</p>
              <p className={style.p2}>Tecnologia da Informação</p>
              <p className={style.p2}>joao.lucca@salotti.com</p>
              <p className={style.pd}>O professor João Gabriel de Lucca é especialista em banco de dados, sempre explicando com clareza e exemplos práticos. Conhecido pelo bom humor em sala, consegue transformar até SQL em algo interessante (o que já é um feito). Sempre disposto a ajudar, mas também cobra atenção — principalmente quando alguém esquece o ponto e vírgula.</p>
               <div><Link to="/home">sabe mais ➜</Link></div>
            </div>
              <div className={style.prof}>
              <h1 className={style["prof-inicial"]}>S</h1>
              <h2>Sidney</h2>
              <p className={style.p2}>Técnico Back-End e Mobile</p>
              <p className={style.p2}>Desenvolvimento de Sistemas</p>
              <p className={style.p2}>sidney.dev@salotti.com</p>
              <p className={style.pd}>O professor Sidney ensina desenvolvimento back-end e mobile, abordando lógica de programação, APIs e criação de aplicações. Incentiva os alunos a desenvolverem soluções práticas e modernas para o mercado de tecnologia.</p>
               <div><Link to="/home">sabe mais ➜</Link></div>
            </div>
            <div className={style.prof}>
              <h1 className={style["prof-inicial"]}>G</h1>
              <h2>Gabriel Silva</h2>
              <p className={style.p2}>Versionamento de Código / Projetos</p>
              <p className={style.p2}>Engenharia de Software</p>
              <p className={style.p2}>gabriel.silva@salotti.com</p>
              <p className={style.pd}>O professor Gabriel Silva trabalha com versionamento de código e gestão de projetos, ensinando ferramentas como Git e boas práticas de desenvolvimento. Seu objetivo é preparar os alunos para o trabalho em equipe e organização de projetos reais.</p>
               <div><Link to="/home">sabe mais ➜</Link></div>
            </div>
        </div></>
  )
}

export default Professores

