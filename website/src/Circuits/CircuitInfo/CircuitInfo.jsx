import React from 'react';
import styles from "./CircuitInfo.module.css"
import line from "../../img/line1.png"

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
        "circuitImage": "../img/Circuits/Melbourne.jpg"
    };

    return (
        <div className={styles.infobox}>
            <div className={styles.infoContainer}>
                <h2 className={styles.title}>{circuitData.name}</h2>
                <div className={styles.infoColumn}>
                    <p className={styles.info}><strong>Country:</strong> {circuitData.country}</p>
                    <p className={styles.info}><strong>Location:</strong> {circuitData.location}</p>
                </div>
                <div className={styles.infoColumn}>
                    <p className={styles.info}><strong>Circuit Length:</strong> {circuitData.length} km</p>
                    <p className={styles.info}><strong>Grand-Prix held:</strong> {circuitData.gpHeld}</p>
                </div>
                <div className={styles.infoColumn}>
                    <p className={styles.info}><strong>Last Winner:</strong> {circuitData.lastWinner}</p>
                    <p className={styles.info}><strong>Fastest Lap:</strong> {circuitData.fastestLap}</p>
                </div>
            </div>

            <div className={styles.imageContainer}>
                <img src={circuitData.circuitImage} alt={`${circuitData.name} Circuit`} className={styles.circuitImage} />
            </div>
        </div>
    );
};

export default CircuitInfo;
