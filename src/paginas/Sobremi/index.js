import styles from './SobreMi.module.css';
import PostModelo from "../../componentes/PostModelo";


export default function Sobremi() {
    return (
        <PostModelo fotoCapa={'./assets/sobre_mim_capa.png'} titulo=" ¿ Quien soy ? " >
            <h3 className={styles.subtitulo}>
                Hola, Soy Matteo !!
            </h3>
            <img className={styles.fotoSobreMim} src="../assets/sobre_mim_foto.jpeg" alt="Foto de Julian Bernal" />
            <p className={styles.paragrafo}>
                Soy un desarrollador web full stack, especializado en el desarrollo de aplicaciones web utilizando React y Node.js. Me apasiona crear soluciones innovadoras y eficientes que mejoren la experiencia del usuario.   
                Me gusta trabajar en equipo y aprender de mis compañeros. Siempre estoy buscando nuevos desafíos y oportunidades para crecer profesionalmente.
                En mi tiempo libre, disfruto de la lectura, el deporte y la música. Me gusta mantenerme actualizado con las últimas tendencias en tecnología y desarrollo web.
                Si quieres saber más sobre mí o mi trabajo, no dudes en contactarme. Estoy siempre abierto a nuevas oportunidades y colaboraciones.
            </p>
        </PostModelo>
    );
}