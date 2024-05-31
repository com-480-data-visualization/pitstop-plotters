import React from "react";
import styles from "./SeasonsEvolution.module.css";
import SeasonEvolution from "./SeasonEvolution";
import leftImage from '../img/apex_left.png';
import rightImage from '../img/apex_right.png';

const SeasonsEvolutionPage = () => {
    return (
        <div className={styles.seasonevolution}>
            <div className={styles.border}>
                <img src={leftImage} alt="Left Border" className={styles.boder_img} />
                <div className={styles.content}>
                    <div className={styles.titleWrapper}>
                        <h2 className={styles.title}>Seasons Evolution</h2>
                    </div>
                    <div className={styles.left}>
                        <SeasonEvolution />
                    </div>
                </div>
                <img src={rightImage} alt="Right Border" className={styles.boder_img} />
            </div>
        </div>
    );
}

export default SeasonsEvolutionPage;
