import React from 'react';
import styles from "./CircuitInfo.module.css"
import lineImage from '../../img/line1.png';

const circuitImages = require.context('../../img/Circuits', false, /\.(png|jpe?g|svg)$/);

const CircuitInfo = ({ circuit }) => {
    
    const getCircuitImage = (circuitName) => {
        try {
            return circuitImages(`./${circuitName}.jpg`);
        } catch (error) {
            // Handle the case where the image is not found
            console.error(`Image not found for circuit: ${circuitName}`);
            return null;
        }
    };

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
                        <strong className={styles.infoDescription}>Lap record:&ensp;</strong>{circuit.lastWinner}
                        {circuit.lapRecord + " - " + circuit.lapRecordDriver + " (" + circuit.lapRecordYear + ")"}
                        {/* <strong className={styles.infoDescription}>Fastest Lap:&ensp;</strong>{circuit.fastestLap} */}
                    </p>
                </div>
                <img src={lineImage} alt="Center line" className={styles.centerImage}/>
            </div>
            

            {/* circuit layout  */}
            <div className={styles.imageContainer}>
                <img src={getCircuitImage(circuit.name)} alt={`${circuit.name} Circuit`} className={styles.circuitImage} />
            </div>
        </div>
    );
};

export default CircuitInfo;
