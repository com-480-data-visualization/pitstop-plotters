import React from "react";
import styles from "./SeasonsEvolution.module.css";
import SeasonEvolution from "./SeasonEvolution";
import leftImage from '../img/apex_left.png';
import rightImage from '../img/apex_right.png';

const SeasonsEvolutionPage = () => {
    return (
        <div className={styles.seasonevolution}>
            <div className={styles.border}>
                <img src={leftImage} alt="Left Border" className={styles.boder_img}/>
                <div className={styles.content}>
                    <h1>Seasons Evolution</h1>
                    <SeasonEvolution />
                </div>
                <img src={rightImage} alt="Right Border" className={styles.boder_img}/>
            </div>
        </div>
    );
}

export default SeasonsEvolutionPage;
