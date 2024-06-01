import styles from "./Descriptions.module.css"
import leftImage from '../img/apex_left.png';
import rightImage from '../img/apex_right.png';

const SeasonEvolutionDesc = () => {
    return (
        <div className={styles.welcome}>
            <div className={styles.border}>
                <img src={leftImage} alt="Left Border" className={styles.boder_img}/>
                <div className={styles.content}>
                    <h1>Seasons Evolution</h1>
                    <p>Trace the evolution of Formula 1 through detailed graphs showing changes in rules, cars, and
                        competition over the decades.</p>

                </div>
                <img src={rightImage} alt="Right Border" className={styles.boder_img}/>
            </div>
        </div>
    );
}

export default SeasonEvolutionDesc;