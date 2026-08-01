import styles from "./termo.module.scss";
import ImgPessoa from "../../assets/icone-pessoa.png";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { useState } from "react";

const Termos = () => {
  return (
    <section className={styles.tudo}>
      <motion.section className={styles.termos}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1}}
      transition={{ duration: 0.5 }}
      >
        <img src={ImgPessoa} className={styles.pessoa} alt="Imagem de uma pessoa" />
        <motion.h1
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Termos de Uso
        </motion.h1>
        <h2>Última atualização: 31/07/2026</h2>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5 }}
        >
          <h2>1. Aceitação dos Termos</h2>
          <p>
            Ao acessar e utilizar a plataforma, o usuário declara que leu,
            compreendeu e concorda com estes Termos de Uso.
          </p>
          <hr />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5 }}
        >
          <h2>2. Objetivo da Plataforma</h2>
          <p>
            A plataforma tem como objetivo permitir que alunos compartilhem
            avaliações e opiniões sobre professores, disciplinas e outros
            serviços da instituição de forma respeitosa e responsável.
          </p>
          <hr />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5 }}
        >
          <h2>3. Cadastro</h2>
          <p>
            Para utilizar algumas funcionalidades, o usuário poderá precisar
            realizar um cadastro. É responsabilidade do usuário fornecer
            informações verdadeiras e manter seus dados atualizados.
          </p>
          <hr />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5 }}
        >
          <h2>4. Conduta do Usuário</h2>
          <p>O usuário concorda em não:</p>

          <ul>
            <li>Publicar conteúdos ofensivos ou discriminatórios;</li>
            <li>Divulgar informações falsas;</li>
            <li>Utilizar linguagem inadequada;</li>
            <li>Tentar invadir ou prejudicar o funcionamento da plataforma;</li>
            <li>Publicar dados pessoais de terceiros sem autorização.</li>
          </ul>
          <hr />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5 }}
        >
          <h2>5. Responsabilidade pelas Avaliações</h2>
          <p>
            Cada usuário é responsável pelo conteúdo publicado. As avaliações
            representam a opinião do autor e não refletem, necessariamente, a
            opinião da plataforma.
          </p>
          <hr />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5 }}
        >
          <h2>6. Privacidade</h2>
          <p>
            Os dados pessoais serão utilizados apenas para o funcionamento da
            plataforma e tratados conforme a Política de Privacidade.
          </p>
          <hr />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5 }}
        >
          <h2>7. Segurança</h2>
          <p>
            A plataforma utiliza medidas de segurança para proteger os dados dos
            usuários, porém nenhum sistema é totalmente imune a falhas ou
            ataques.
          </p>
          <hr />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5 }}
        >
          <h2>8. Suspensão de Contas</h2>
          <p>
            Contas que violarem estes termos poderão ser suspensas ou removidas
            sem aviso prévio.
          </p>
          <hr />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5 }}
        >
          <h2>9. Alterações dos Termos</h2>
          <p>
            Os Termos de Uso poderão ser atualizados a qualquer momento. A
            versão mais recente estará sempre disponível nesta página.
          </p>
          <hr />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5 }}
        >
          <h2>10. Contato</h2>
          <p>
            Caso tenha dúvidas sobre estes Termos de Uso, entre em contato com a
            equipe responsável pela plataforma.
          </p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5 }}
          className={styles.botoes}
        >
          <Link to="/" className={styles.aceito}>
            Aceito
          </Link>
          <Link to="/login" className={styles.recuso}>
            Recuso
          </Link>
        </motion.div>
      </motion.section>
    </section>
  );
};

export default Termos;
