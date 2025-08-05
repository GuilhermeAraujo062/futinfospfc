import styles from './MenuMobile.module.css';
import MenuLink from '../HeaderLink';
import { IoClose } from "react-icons/io5";
import { IoIosMenu } from "react-icons/io";
import { useState } from 'react';

function MenuMobile() {
    const [menuAberto, setMenuAberto] = useState(false);

    const toggleMenu = () => {
        setMenuAberto(!menuAberto);
    };

    return (
        <section className={styles.container}>
            {menuAberto ? (
                <IoClose size={50} className={styles.icon} onClick={toggleMenu} />
            ) : (
                <IoIosMenu size={50} className={styles.icon} onClick={toggleMenu} />
            )}

            <nav className={`${styles.menu_mobile} ${menuAberto ? styles.aberto : ''}`}>
                <MenuLink to='/' onClick={toggleMenu}>Início</MenuLink>
                <MenuLink to='/sobre' onClick={toggleMenu}>Sobre</MenuLink>
                <MenuLink to='/elenco' onClick={toggleMenu}>Elenco</MenuLink>
                <MenuLink to='/jogos' onClick={toggleMenu}>Jogos</MenuLink>
            </nav>
        </section>
    );
}

export default MenuMobile;
