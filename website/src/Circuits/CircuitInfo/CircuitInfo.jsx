import React from 'react';
import styles from "./CircuitInfo.module.css"

const CircuitInfo = ({ circuitCode }) => {
    return (
        <div className={styles.infobox}>
            <p>{"content: " + circuitCode}</p>
        </div>
    );
};

export default CircuitInfo;