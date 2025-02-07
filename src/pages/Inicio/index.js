import styles from './Inicio.module.css'
import BackgroundVideo from 'components/BackgroundVideo';

function Inicio(){
    return (
        <section className={styles.inicio}>
            <BackgroundVideo/>
        </section>
    )
}

export default Inicio;