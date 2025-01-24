import styles from './Header.module.css';
import MenuLink from '../HeaderLink';
function Header() {

    return (
        <header>
            <div className={styles.logo}>
                <p>SÃO PAULO FC</p>
                <img src='/images/logotipo-spfc.png' alt='Logo'></img>
            </div>

            <nav>
                <MenuLink to = '/'>
                    Início
                </MenuLink>
                <MenuLink to = '/sobre'>
                    Sobre
                </MenuLink>
                <MenuLink to = '/elenco'>
                    Elenco
                </MenuLink>
                <MenuLink to = '/jogos'>
                    Jogos
                </MenuLink>
            </nav>
        </header>
    )
}

export default Header;