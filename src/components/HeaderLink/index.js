import { Link, useLocation } from 'react-router-dom';
import styles from './HeaderLink.module.css';

function MenuLink({children, to}) {

    const localizacao = useLocation();

    return (
        <Link className={`
            ${styles.link}
            ${localizacao.pathname === to ? styles.linkDestacado : ""}    
        `} to={to}>
            {children}
        </Link>
    )
}

export default MenuLink;