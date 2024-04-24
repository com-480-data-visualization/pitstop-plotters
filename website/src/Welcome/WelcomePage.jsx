import styles from "./Welcome.module.css"
import leftImage from '../img/apex_left.png';
import rightImage from '../img/apex_right.png';
import title from "../img/F1.png"
import videoBG from "../video/f1.mp4"
const WelcomePage = () => {
    const videoSource = `${videoBG}#t=6`;
    return (
        <div className={styles.welcome}>
            <div className={styles.border}>
                <img src={leftImage} alt="Left Border"/>
                <div className={styles.content}>
                    <img src={title} alt="F1" className={styles.f1}/>
                    <h1 className={styles.text}>An introduction to Formula 1</h1>
                    <div className="overlay"></div>
                    <video autoPlay loop style={{
                        opacity: 0.3
                    }}>
                        <source src={videoSource} type="video/mp4"/>
                    </video>
                </div>
                <img src={rightImage} alt="Right Border"/>
            </div>
        </div>
    );
}

export default WelcomePage;