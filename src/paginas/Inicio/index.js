import styles from "./Inicio.module.css";
import posts from  "../../json/posts.json";
import Posts from "../../componentes/Posts";
export default function Inicio() {
  return (
      <ul className={styles.posts}>
        {posts.map((posts) => (
          <li key={posts.id}>
            <Posts posts={posts}/>
          </li>
        ))}
      </ul>
  );
}