import styles from './Banner.module.css';

export default function Banner() {
    return(
        <div className={styles.banner}>
                <div className={styles.presentacion}>
                    <h1 className={styles.titulo}>Desarrollador Frontend </h1>
                    <p className={styles.parrafo}>Hola, soy un desarrollador frontend con experiencia en React y JavaScript. Me apasiona crear aplicaciones web interactivas y atractivas.</p>
                </div>
                <div className={styles.imagenes}>
                    <img className={styles.circuloColorido} src="/assets/circulo_colorido.png" aria-hidden={true}/>
                    <img className={styles.miFoto} src="/assets/mi_foto.jpeg" alt="Foto de perfil" />
                </div>
        </div>
    )
}
