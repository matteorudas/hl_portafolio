import styles from "./Inicio.module.css";
import posts from  "../../json/posts.json";
import PostCard from "../../componentes/PostCard";
export default function Inicio() {
  return (
      <ul className={styles.posts}>
        {posts.map((posts) => (
          <li key={posts.id}>
            <PostCard posts={posts}/>
          </li>
        ))}
      </ul>
  );
}