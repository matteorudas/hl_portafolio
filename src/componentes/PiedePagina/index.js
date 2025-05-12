import styles from './PiedePagina.module.css';

export default function PiedePagina(){
    return(
        <footer className={styles['piede-pagina']}>
            <img src="/assets/marca.svg" alt="Marca" />
                Desarrollado por Julian Bernal - Alura 
        </footer>
    )
}