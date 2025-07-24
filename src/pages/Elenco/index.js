import Header from "components/Header";
import styles from "./Elenco.module.css"
import { useEffect } from "react";
import { getFutInfo } from "FutService";
import JogadoresTitulares from "components/JogadoresTitulares";
import JogadoresReservas from "components/JogadoresReservas";

function Elenco() {

    useEffect(() => {
        getFutInfo()
            .then(data => console.log(data));
    }
    )

    return (
        <section>
            <Header />
            <section className={styles.elenco}>

                <JogadoresTitulares/>
                
                <JogadoresReservas/>

            </section>
        </section>
    )
}

export default Elenco;