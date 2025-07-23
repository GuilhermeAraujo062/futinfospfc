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
                        <div>Rafael</div>
                        <div>Rafael</div>
                        <div>Rafael</div>
                        <div>Rafael</div>
                        <div>Rafael</div>
                        <div>Rafael</div>
                        <div>Rafael</div>
                        <div>Rafael</div>
                        <div>Rafael</div>
                        <div>Rafael</div>
                        <div>Rafael</div>
                    </div>
                </div>


                <div className={styles.reservas}>

                </div>
            </section>
        </section>
    )
}

export default Elenco;