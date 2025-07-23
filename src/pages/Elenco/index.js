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
                    <img src='https://i.pinimg.com/736x/f8/6d/bc/f86dbc6179f41ca07be28bea859d15f3.jpg' alt='Campo de Futebol'></img>
                    <div className={styles.titulares}>

                        <div className={`${styles.jogador} ${styles.posicao_gl}`}>
                            <img src="https://i.pinimg.com/736x/64/59/d0/6459d032fbc23a77eb7e7a35d52d8d4c.jpg" alt="foto do jogador" className={styles.img_jogador}></img>
                            <h3 className={styles.nome}>Rafael</h3>
                        </div>

                        <div className={`${styles.jogador} ${styles.posicao_zag1}`}>
                            <img src="https://i.pinimg.com/736x/5a/dc/41/5adc413851a45a60c47f30c3ce53b48e.jpg" alt="foto do jogador" className={styles.img_jogador}></img>
                            <h3 className={styles.nome}>Enzo Diaz</h3>
                        </div>

                        <div className={`${styles.jogador} ${styles.posicao_zag2}`}>
                            <img src="https://i.pinimg.com/736x/23/27/70/232770185e04dcd46a99496d1454ca23.jpg" alt="foto do jogador" className={styles.img_jogador}></img>
                            <h3 className={styles.nome}>Arboleda</h3>
                        </div>

                        <div className={`${styles.jogador} ${styles.posicao_zag3}`}>
                            <img src="https://i.pinimg.com/736x/8c/e8/f0/8ce8f09616d663bf670d890ab562741b.jpg" alt="foto do jogador" className={styles.img_jogador}></img>
                            <h3 className={styles.nome}>A.Franco</h3>
                        </div>

                        <div className={`${styles.jogador} ${styles.posicao_zag4}`}>
                            <img src="https://i.pinimg.com/736x/f1/39/45/f13945cf8c0f70decc257b498ec9f163.jpg" alt="foto do jogador" className={styles.img_jogador}></img>
                            <h3 className={styles.nome}>Cedric</h3>
                        </div>

                        {/* aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa */}

                        <div className={`${styles.jogador} ${styles.posicao_vol1}`}>
                            <img src="https://i.pinimg.com/736x/b7/5b/ef/b75beff0f456c0aa49d0707afa8a6ca9.jpg" alt="foto do jogador" className={styles.img_jogador}></img>
                            <h3 className={styles.nome}>Alisson</h3>
                        </div>

                        <div className={`${styles.jogador} ${styles.posicao_vol2}`}>
                            <img src="https://i.pinimg.com/736x/4e/f8/00/4ef800f4f669f77d4b225392e36da8b8.jpg" alt="foto do jogador" className={styles.img_jogador}></img>
                            <h3 className={styles.nome}>Pablo Maia</h3>
                        </div>

                        <div className={`${styles.jogador} ${styles.posicao_mei1}`}>
                            <img src="https://i.pinimg.com/736x/1f/67/20/1f6720a5c5e47f611feac2bc7d013db7.jpg" alt="foto do jogador" className={styles.img_jogador}></img>
                            <h3 className={styles.nome}>Lucas Moura</h3>
                        </div>

                        <div className={`${styles.jogador} ${styles.posicao_mei2}`}>
                            <img src="https://i.pinimg.com/736x/96/9f/f2/969ff24da233ea8ddd3a11fab434fd02.jpg" alt="foto do jogador" className={styles.img_jogador}></img>
                            <h3 className={styles.nome}>Oscar</h3>
                        </div>

                        <div className={`${styles.jogador} ${styles.posicao_atk1}`}>
                            <img src="https://i.pinimg.com/736x/5b/9a/0b/5b9a0b8614645fb92846d94eeb9b4640.jpg" alt="foto do jogador" className={styles.img_jogador}></img>
                            <h3 className={styles.nome}>Luciano</h3>
                        </div>

                        <div className={`${styles.jogador} ${styles.posicao_atk2}`}>
                            <img src="https://i.pinimg.com/736x/3c/bf/33/3cbf3371cadd1d07a4367bc7b2f9bec8.jpg" alt="foto do jogador" className={styles.img_jogador}></img>
                            <h3 className={styles.nome}>Calleri</h3>
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