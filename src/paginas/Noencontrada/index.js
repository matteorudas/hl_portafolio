import { useNavigate } from 'react-router-dom';
import BotonPrincipal from '../../componentes/BotonPrincipal';
import styles from './Noencontrada.module.css';

export default function NoEncontrada() {
    const navegar = useNavigate();
    return(
        <>
            <div className={styles.contenidoContainer}>
                <span className={styles.texto404}>404</span>
                <h1 className={styles.titulo}>La pagina no fue encontrada....</h1>
                <p className={styles.paragrafo}>Parece que la pagina que buscas no existe o ha sido eliminada</p>
                <p className={styles.paragrafo}>Vuelve a la pagina de inicio</p>
                <div className={styles.botonContainer} onClick={() => navegar(-1)}>
                    <BotonPrincipal tamano="lg"> Volver </BotonPrincipal>
                </div>
                <img className={styles.imagenPerro} src='/assets/erro_404.png' alt='Perro de la pagina no encontrada' />
            </div>
        <div className={styles.espacioEnblanco}/>
        </>
    )
}
