import styles from './SobreMi.module.css';
import PostModelo from "../../componentes/PostModelo";


export default function Sobremi() {
    return (
        <PostModelo fotoCapa={'./assets/sobre_mim_capa.png'} titulo=" ¿ Quien soy ? " >
            <h3 className={styles.subtitulo}>
                Hola, Soy Julian Matteo !!
            </h3>
            <img className={styles.fotoSobreMim} src="../assets/sobre_mim_foto.jpg" alt="Foto de Julian Bernal" />
            <p className={styles.paragrafo}>
                Desarrollador de software apasionado por la tecnología, siempre curioso y con ganas de aprender algo nuevo. Mi camino en el mundo del desarrollo comenzó como Analista de Pruebas Junior, donde descubrí lo mucho que disfrutaba entender cómo funcionan los sistemas por dentro. Desde entonces, he recorrido un camino lleno de desafíos y aprendizajes.
                Estudié Análisis y Desarrollo de Sistemas y luego continué con una especialización en Ingeniería de Software, todo en São Paulo, Brasil, donde también he desarrollado toda mi trayectoria profesional hasta el momento. Esta experiencia me permitió trabajar en diversos proyectos, aprender de equipos multidisciplinarios y adaptarme a diferentes contextos tecnológicos y humanos.
                En cuanto a lo técnico, tengo experiencia con tecnologías como PHP y MySQL, frameworks modernos como React, y también he trabajado con Python, lo que me ha permitido moverme entre el backend y el frontend según las necesidades del proyecto. Me gusta escribir código limpio, pensar en soluciones escalables y trabajar en equipo para construir productos que realmente aporten valor.
                Además de lo profesional, me considero una persona tranquila, con buen sentido del humor, y siempre dispuesta a compartir lo que aprendo con otros. Disfruto mucho jugar videojuegos, jugar fútbol y participar en conversaciones donde se crucen ideas, tecnología y experiencias. Hablo español como lengua materna y domino el portugués, lo que me ha permitido desenvolverme sin problema en equipos de habla portuguesa y colaborar con naturalidad.
                Este sitio es un espacio donde quiero compartir un poco de mi historia, mis intereses y algunos artículos sobre tecnología que pueden ser útiles o al menos despertar la curiosidad de quienes los lean. Si llegaste hasta acá, ¡bienvenido!
            </p>
        </PostModelo>
    );
}