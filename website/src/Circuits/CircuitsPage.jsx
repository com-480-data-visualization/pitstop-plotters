import styles from "./Circuits.module.css"
import leftImage from '../img/apex_left.png';
import rightImage from '../img/apex_right.png';
import Circuits from "./Circuits";

const CircuitsPage = () => {
    return (
        <div className={styles.circuits}>
            <div className={styles.border}>
                <img src={leftImage} alt="Left Border" className={styles.boder_img}/>
                <div className={styles.content}>
                    <h1>Circuits</h1>
                    <Circuits />
                </div>
                <img src={rightImage} alt="Right Border" className={styles.boder_img}/>
            </div>
        </div>
    );
}

export default CircuitsPage;