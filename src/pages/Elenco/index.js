import Header from "components/Header";
import styles from "./Elenco.module.css"
import { useEffect } from "react";
import { getFutInfo } from "FutService";

function Elenco () {

    useEffect(() => {
        getFutInfo()
            .then(data => console.log(data));
    }
)

    return (
        <section>
            <Header/>
            <section className={styles.elenco}>

                <div className={styles.campo}>
                    <img src='/images/campo.jpg' alt='Campo de Futebol'></img>
                    <div className={styles.titulares}>

                        <div className={`${styles.jogador} ${styles.posicao_gl}`}>
                            <img src="https://i.pinimg.com/736x/64/59/d0/6459d032fbc23a77eb7e7a35d52d8d4c.jpg" className={styles.img_jogador}></img>
                            <h3 className={styles.nome}>Rafael</h3>
                        </div>
                        
                    </div>
                </div>


                <div className={styles.reservas}>

                </div>
            </section>
        </section>
    )
}

export default Elenco;