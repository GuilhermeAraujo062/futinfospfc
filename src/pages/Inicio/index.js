import styles from './Inicio.module.css'
import BackgroundVideo from 'components/BackgroundVideo';

function Inicio(){
    return (
        <section className={styles.inicio}>
            <BackgroundVideo/>
            <div className={styles.titulo}>
                <img src='/images/logotipo-spfc.png' alt='Logo'></img>
                <h1>São Paulo</h1>
                <h2>Futebol Clube</h2>
                <a href="/sobre" className={styles.button}>Entrar</a>
            </div>
        </section>
    )
}

export default Inicio;