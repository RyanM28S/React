import { Link } from "react-router-dom";
import styles from "./404.module.scss";
import { motion } from "framer-motion";
import cactus from "../../assets/cactu.webp";
import { useEffect, useRef, useState } from "react";

const Pagina404 = () => {
  const [jogando, setJogando] = useState(false);
  const [gameOver, setGameOver] = useState(false);
  const [score, setScore] = useState(0);

  // Pontuação (Apenas contador de tempo agora que o dino foi removido)
  useEffect(() => {
    if (!jogando || gameOver) return;

    const intervalo = setInterval(() => {
      setScore((valor) => valor + 1);
    }, 100);

    return () => clearInterval(intervalo);
  }, [jogando, gameOver]);

  // Reiniciar
  const reiniciar = () => {
    setScore(0);
    setGameOver(false);
    setJogando(true);
  };

  return (
    <section className={styles.erro}>
      <div className={styles.bg}></div>

      <div className={styles.estrelas}></div>

      <div className={styles.particula}></div>
      <div className={styles.particula}></div>
      <div className={styles.particula}></div>
      <div className={styles.particula}></div>

      <motion.div
        className={styles.container}
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <motion.h1
          animate={{ y: [0, -15, 0] }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          404
        </motion.h1>

        <h2>Página não encontrada</h2>

        <p>Parece que essa página foi removida ou o endereço está incorreto.</p>

        <Link
          to="/"
          className={styles.botao}
          onClick={(event) => event.stopPropagation()}
        >
          Voltar para o início
        </Link>
      </motion.div>
    </section>
  );
};

export default Pagina404;
