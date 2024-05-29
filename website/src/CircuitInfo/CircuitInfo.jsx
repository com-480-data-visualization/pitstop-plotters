import React from 'react';
import styles from "./CircuitInfo.module.css"

const CircuitInfo = ({ circuitCode, title }) => {
    return (
        <div className={styles.infobox}>
            <text>{"title: " + title}</text>
            <p>{"content: " + circuitCode}</p>
        </div>
    );
};

export default CircuitInfo;