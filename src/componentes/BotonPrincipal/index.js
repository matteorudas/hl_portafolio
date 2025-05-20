import styles from './BotonPrincipal.module.css';

export default function BotonPrincipal({children, tamano}) {
    return(
        <button className={`${styles.botonLeer} ${styles[tamano]}`}> {children} </button>
    )
}