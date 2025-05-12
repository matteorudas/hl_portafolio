import styles from './Posts.module.css';

export default function Posts({posts}) {
    return(
        <div className={styles.post}>
            <img className={styles.capa} src={`/assets/posts/${posts.id}/capa.png`} alt='Imagem de capa do post' />
            <h2 className={styles.titulo}>{posts.titulo}</h2>
            <button className={styles.botonLeer}> Leer </button>
        </div>
    )
}