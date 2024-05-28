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
                    <div className={styles.right}>
                        <p>
                            This page shows the evolution of the number of seasons per year for the top 10 TV shows.
                            The data is taken from the TVmaze API and the visualization is done using d3.js.
                            The data is updated every 24 hours.
                        </p>
                    </div>
                </div>
                <img src={rightImage} alt="Right Border" className={styles.boder_img} />
            </div>
        </div>
    );
}

export default SeasonsEvolutionPage;
