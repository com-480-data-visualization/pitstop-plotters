import React from 'react';
import styles from "./CircuitInfo.module.css"
import lineImage from '../../img/line1.png';
import circuitImage from "../../img/Circuits/Melbourne.jpg"

const CircuitInfo = ({ circuit }) => {
    
    return (
        <div className={styles.infobox}>
            {/* content  */}
            <div className={styles.infoContainer}>
                <h2 className={styles.title}>{circuit.name}</h2>
                <div className={styles.infoColumn}>
                    <p className={styles.info}>
                        <strong className={styles.infoDescription}>Country:&ensp;</strong>{circuit.country} <br/>
                        <strong className={styles.infoDescription}>Location:&ensp;</strong>{circuit.location}
                    </p>
                </div>
                <div className={styles.infoColumn}>
                    <p className={styles.info}>
                        <strong className={styles.infoDescription}>Circuit Length:&ensp;</strong>{circuit.length} km<br/>
                        <strong className={styles.infoDescription}>Grand-Prix held:&ensp;</strong>{circuit.gpHeld}
                    </p>
                </div>
                <div className={styles.infoColumn}>
                    <p className={styles.info}>
                        <strong className={styles.infoDescription}>Last Winner:&ensp;</strong>{circuit.lastWinner}<br/>
                        <strong className={styles.infoDescription}>Fastest Lap:&ensp;</strong>{circuit.fastestLap}
                    </p>
                </div>
                <img src={lineImage} alt="Center line" className={styles.centerImage}/>
            </div>
            

            {/* circuit layout  */}
            <div className={styles.imageContainer}>
                <img src={circuit.circuitImage} alt={`${circuit.name} Circuit`} className={styles.circuitImage} />
            </div>
        </div>
    );
};

export default CircuitInfo;
