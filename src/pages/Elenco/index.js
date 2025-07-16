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
                <div>
                    <img src='/images/campo.jpg' alt='Campo de Futebol'></img>
                </div>
            </section>
        </section>
    )
}

export default Elenco;