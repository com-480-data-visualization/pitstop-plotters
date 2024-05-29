import React from 'react';
import styles from "./CircuitInfo.module.css"

const CircuitInfo = ({ circuitCode, title }) => {
    return (
        <div className={styles.infobox}>
            <p class={ styles.title }>{title}</p>
            <p>{"content: " + circuitCode}</p>
        </div>
    );
};

export default CircuitInfo;