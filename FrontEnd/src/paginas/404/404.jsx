import { Link } from "react-router-dom";
import styles from "./404.module.scss";
import { motion } from "framer-motion";
import dino from "../../assets/dino.png";
import cactus from "../../assets/cactu.webp";
import dinoPular from "../../assets/dino.gif";
import { useEffect, useRef, useState } from "react";

const Pagina404 = () => {
  const [jogando, setJogando] = useState(false);
  const [gameOver, setGameOver] = useState(false);
  const [score, setScore] = useState(0);

  const dinoRef = useRef(null);
  const obstaculoRef = useRef(null);

  // Pular
  const pular = () => {
    if (!jogando) {
      setJogando(true);
      setGameOver(false);
    }

    const dino = dinoRef.current;

    if (!dino || dino.classList.contains(styles.pulando)) return;

    dino.classList.add(styles.pulando);

    setTimeout(() => {
      dino.classList.remove(styles.pulando);
    }, 600);
  };

  // Tecla espaço
  useEffect(() => {
    const tecla = (event) => {
      if (event.code === "Space") {
        event.preventDefault();
        pular();
      }
    };

    window.addEventListener("keydown", tecla);

    return () => {
      window.removeEventListener("keydown", tecla);
    };
  }, [jogando]);

  // Pontuação + colisão
  useEffect(() => {
    if (!jogando || gameOver) return;

    const intervalo = setInterval(() => {
      const dino = dinoRef.current;
      const obstaculo = obstaculoRef.current;

      if (!dino || !obstaculo) return;

      const dinoBox = dino.getBoundingClientRect();
      const obstaculoBox = obstaculo.getBoundingClientRect();

      const colidiu =
        dinoBox.right > obstaculoBox.left + 10 &&
        dinoBox.left < obstaculoBox.right - 10 &&
        dinoBox.bottom > obstaculoBox.top + 10;

      if (colidiu) {
        setGameOver(true);
        setJogando(false);
        return;
      }

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
    <section className={styles.erro} onClick={pular}>
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
        <h1>404</h1>

        <h2>Página não encontrada</h2>

        <p>Parece que essa página foi removida ou o endereço está incorreto.</p>

        {/* JOGO */}

        <div className={styles.jogo}>
          <div className={styles.score}>SCORE: {Math.floor(score / 10)}</div>

          <div className={styles.cenario}>
            <div ref={dinoRef} className={styles.dino}>
              <img src={dinoPular} alt="Dino" />
            </div>

            <div ref={obstaculoRef} className={styles.obstaculo}>
              <img src={cactus} alt="Cacto" />
            </div>

            <div className={styles.chao}></div>
          </div>

          {/* COMEÇAR */}

          {!jogando && !gameOver && (
            <button
              className={styles.iniciar}
              onClick={(event) => {
                event.stopPropagation();
                setJogando(true);
              }}
            >
              ▶ Começar
            </button>
          )}

          {/* GAME OVER */}

          {gameOver && (
            <div className={styles.gameOver}>
              <h3>GAME OVER</h3>

              <p>Você encontrou a página errada.</p>

              <strong>SCORE: {Math.floor(score / 10)}</strong>

              <button onClick={reiniciar}>↻ Tentar novamente</button>
            </div>
          )}
        </div>

        <Link
          to="/"
          className={styles.botao}
          onClick={(event) => event.stopPropagation()}
        >
          Voltar para o início
        </Link>

        <small>
          Pressione <strong>ESPAÇO</strong> ou clique para pular
        </small>
      </motion.div>
    </section>
  );
};

export default Pagina404;
