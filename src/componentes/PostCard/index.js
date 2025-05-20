import { Link } from 'react-router-dom';
import styles from './Posts.module.css';
import BotonPrincipal from '../BotonPrincipal';

export default function PostCard({posts}) {
    return(
        <Link to={`/posts/${posts.id}`}>
            <div className={styles.post}>
                <img className={styles.capa} src={`/assets/posts/${posts.id}/capa.png`} alt='Imagem de capa do post' />
                <h2 className={styles.titulo}>{posts.titulo}</h2>
                <BotonPrincipal>Leer</BotonPrincipal>
            </div>
        </Link>
    )
}