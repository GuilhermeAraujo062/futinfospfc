import { Link } from 'react-router-dom';
import styles from './Header.module.css';
function Header() {
    return (
        <header>
            <div>
                <p>SÃO PAULO FC</p>
                <img src='/images/logotipo-spfc.png' alt='Logo'></img>
            </div>

            <nav>
                <Link className={styles.link} href='/'>Inicio</Link>
                <Link className={styles.link} href='/'>Sobre</Link>
                <Link className={styles.link} href='/'>Elenco</Link>
                <Link className={styles.link} href='/'>Jogos</Link>
            </nav>
        </header>
    )
}

export default Header;