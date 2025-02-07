import styles from "./BackgroundVideo.modulo.css";
import videoBg from "./gif-spfc.mp4";

const BackgroundVideo = () => {
    return (
        <div className={styles.videocontainer}>
            <video autoPlay loop muted className={styles.videobg}>
                <source src={videoBg} type="video/mp4" />
                Seu navegador não suporta vídeos HTML5.
            </video>
            <div className={styles.content}>
                <h1>Bem-vindo</h1>
                <p>Esse é um fundo de vídeo</p>
            </div>
        </div>
    )
}

export default BackgroundVideo;