import './Post.css'
import { Route, Routes, useParams } from "react-router-dom"
import PostModelo from "../../componentes/PostModelo";
import posters from "../../json/posts.json";
import ReactMarkdown from "react-markdown";
import NoEncontrada from '../Noencontrada';
import PaginaPatron from '../../componentes/PaginaPatron';
import PostCard from '../../componentes/PostCard';
import styles from "./Posts.module.css";

export default function Post() {
    const params = useParams();
    const poster = posters.find((poster) => {
        return poster.id === Number(params.id);
    })

    if (!poster) {
        return (
            <NoEncontrada />
        )
    }

    const postsRecomendados = posters.filter((poster) => poster.id !== Number(params.id)).sort((a, b)=> b.id - a.id).slice(0, 3);

    return (
        <PaginaPatron>
            <PostModelo fotoCapa={`/assets/posts/${poster.id}/capa.png`} titulo={poster.titulo}>
                <div className='post-markdown-container'>
                    <ReactMarkdown>
                        {poster.texto}
                    </ReactMarkdown>
                </div>
                <h2 className={styles.tituloOutrosPosts}>Articulos que le puedan interesar:</h2>
                <ul className={styles.postsRecomendados}>
                    {postsRecomendados.map((poster) => (
                        <li key={poster.id}>
                            <PostCard posts={poster} />
                        </li>
                    ))}
                </ul>
            </PostModelo>
        </PaginaPatron>
    )
}