import styles from './Banner.module.css';

export default function Banner() {
    return(
        <div className={styles.banner}>
                <div className={styles.presentacion}>
                    <h1 className={styles.titulo}>Desarrollador de Software</h1>
                    <p className={styles.parrafo}>Bienvenido a mi espacio digital. Aquí comparto un poco de mi historia como desarrollador y artículos sobre tecnología, programación y curiosidades del mundo tech que podrían interesarte.</p>
                </div>
                <div className={styles.imagenes}>
                    <img className={styles.circuloColorido} src="/assets/circulo_colorido.png" aria-hidden={true}/>
                    <img className={styles.miFoto} src="/assets/mi_foto.jpeg" alt="Foto de perfil" />
                </div>
        </div>
    )
}
