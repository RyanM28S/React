import React from 'react'
import styles from './Categorias.module.css'

const CategoriasP1 = () => {
  return (
    <section>
        <div className={styles.dtexto_setores}>
            <div>
                <img src={Predio} alt="" />
            </div>
            <h2>Setores da <span>Escola</span></h2>
            <p>Avalie os diferentes setores da instituição e contribua para melhorias</p>
        </div>
    </section>
  )
}

export default CategoriasP1