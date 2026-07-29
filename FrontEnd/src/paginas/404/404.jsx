import { Link } from "react-router-dom";
import styles from "./404.module.scss";
import { motion } from "framer-motion";

const Pagina404 = () => {
  return (
    <section className={styles.erro}>
      <div className={styles.bg}></div>

      <div className={styles.estrelas}></div>

      

      <div className={styles.particula}></div>
      <div className={styles.particula}></div>
      <div className={styles.particula}></div>
      <div className={styles.particula}></div>

      <div className={styles.container}>
        <h1>404</h1>

        <h2>Página não encontrada</h2>

        <p>Parece que essa página foi removida ou o endereço está incorreto.</p>

        <Link to="/" className={styles.botao}>
          Voltar para o início
        </Link>
      </div>
    </section>
  );
};

export default Pagina404;
