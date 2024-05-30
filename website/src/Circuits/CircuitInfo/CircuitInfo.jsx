import React from 'react';
import styles from "./CircuitInfo.module.css"
import lineImage from '../../img/line1.png';
import circuitImage from "../../img/Circuits/Melbourne.jpg"

const CircuitInfo = ({ circuitId }) => {
    // TODO add the code to parse the file and get the circuit data

    const circuitData = {
        "name": "Albert Park Circuit",
        "country": "Australia",
        "location": "Melbourne, Victoria, Australia",
        "length": "5.278",
        "gpHeld": "27",
        "lastWinner": "Carlos Sainz",
        "fastestLap": "1'19\"813 (Charles Leclerc)",
        "circuitImage": circuitImage
    };

    return (
        <div className={styles.infobox}>
            {/* content  */}
            <div className={styles.infoContainer}>
                <h2 className={styles.title}>{circuitData.name}</h2>
                <div className={styles.infoColumn}>
                    <p className={styles.info}>
                        <strong className={styles.infoDescription}>Country:&ensp;</strong>{circuitData.country} <br/>
                        <strong className={styles.infoDescription}>Location:&ensp;</strong>{circuitData.location}
                    </p>
                </div>
                <div className={styles.infoColumn}>
                    <p className={styles.info}>
                        <strong className={styles.infoDescription}>Circuit Length:&ensp;</strong>{circuitData.length} km<br/>
                        <strong className={styles.infoDescription}>Grand-Prix held:&ensp;</strong>{circuitData.gpHeld}
                    </p>
                </div>
                <div className={styles.infoColumn}>
                    <p className={styles.info}>
                        <strong className={styles.infoDescription}>Last Winner:&ensp;</strong>{circuitData.lastWinner}<br/>
                        <strong className={styles.infoDescription}>Fastest Lap:&ensp;</strong>{circuitData.fastestLap}
                    </p>
                </div>
                <img src={lineImage} alt="Center line" className={styles.centerImage}/>
            </div>
            

            {/* circuit layout  */}
            <div className={styles.imageContainer}>
                <img src={circuitData.circuitImage} alt={`${circuitData.name} Circuit`} className={styles.circuitImage} />
            </div>
        </div>
    );
};

export default CircuitInfo;
