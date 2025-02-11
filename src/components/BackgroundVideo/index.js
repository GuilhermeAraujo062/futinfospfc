import styles from "./BackgroundVideo.module.css";
import videoBg from "./gif-spfc.mp4";


const BackgroundVideo = () => {
    return (
        <div className={styles.videocontainer}>
            <video autoPlay loop muted className={styles.videobg}>
                <source src={videoBg} type="video/mp4" />
                Seu navegador não suporta vídeos HTML5.
            </video>
            <div className={styles.titulo}>
                <img src='/images/logotipo-spfc.png' alt='Logo'></img>
                <h1>São Paulo</h1>
                <h2>Futebol Clube</h2>
                
            </div>
        </div>
    )
}

export default BackgroundVideo;