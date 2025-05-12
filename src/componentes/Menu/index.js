import styles from './Menu.module.css';
import MenuLink from '../MenuLink';


export default function Menu() {
    return (
        <header>
            <nav className={styles.navegacion}>
                <MenuLink to="/">Inicio</MenuLink>
                <MenuLink to="/sobre">Sobre mi</MenuLink>
            </nav>
        </header>
    )


}
