import styles from "./Descriptions.module.css"
import leftImage from '../img/apex_left.png';
import rightImage from '../img/apex_right.png';

const WelcomeDesc = () => {
    return (
        <div className={styles.welcome}>
            <div className={styles.border}>
                <img src={leftImage} alt="Left Border" className={styles.boder_img}/>
                <div className={styles.content}>
                    <div className="content">
                        <h1>Welcome to the World of Formula 1</h1>
                        <p>Embark on a journey through the exhilarating world of Formula 1. Dive deep into our exclusive
                            visualizations that showcase the sport's rich history and dynamic present.</p>
                    </div>
                </div>
                <img src={rightImage} alt="Right Border" className={styles.boder_img}/>
            </div>
        </div>
    );
}

export default WelcomeDesc;