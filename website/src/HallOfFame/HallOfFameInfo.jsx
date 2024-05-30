import React from 'react';
import styles from "./HallOfFameInfo.module.css"

const DriverProfile = ({ driver }) => {
        // Helper function to display data or a default message
        const displayOrFallback = (value, defaultValue = '') => {
                return value || defaultValue;
        };

        return (
            <div className={styles.divInfo}>
                <div className={styles.name}>
                    <h1>{displayOrFallback(driver.name)}</h1>
                </div>
                <div className={styles.item}>
                    <p><span className={styles.label}>Born:</span> <span
                        className={styles.value}>{displayOrFallback(driver.born)}</span></p>
                    <p><span className={styles.label}>Died:</span> <span
                        className={styles.value}>{displayOrFallback(driver.died)}</span></p>
                </div>
                <div className={styles.item}>
                    <p><span className={styles.label}>First Grand Prix:</span> <span
                        className={styles.value}>{displayOrFallback(driver.firstGP)}</span></p>
                    <p><span className={styles.label}>Last Grand Prix:</span> <span
                        className={styles.value}>{displayOrFallback(driver.lastGP)}</span></p>
                </div>
                <div className={styles.item}>
                    <p><span className={styles.label}>Best Result:</span> <span
                        className={styles.value}>{displayOrFallback(driver.bestResult)}</span></p>
                    <p><span className={styles.label}>Best Grid Position:</span> <span
                        className={styles.value}>{displayOrFallback(driver.bestGrid)}</span></p>
                </div>
                <div className={styles.item}>
                    <p><span className={styles.label}>World Champion:</span> <span
                        className={styles.value}>{driver.championships ? driver.championships.join(', ') : 'N/A'}</span>
                    </p>
                </div>
                <div className={styles.item}>
                    <p><span className={styles.label}>Total Points:</span> <span
                        className={styles.value}>{displayOrFallback(driver.totalPoints, '0')} points</span></p>
                    <p><span className={styles.label}>Points per GP:</span> <span
                        className={styles.value}>{displayOrFallback(driver.pointsPerGP, '0')}</span></p>
                </div>
                <div className={styles.item}>
                    <p><span className={styles.label}>Total Seasons:</span> <span
                        className={styles.value}>{displayOrFallback(driver.totalSeasons, '0')}</span></p>
                    <p><span className={styles.label}>Total Laps Led:</span> <span
                        className={styles.value}>{displayOrFallback(driver.lapsLed, '0')}</span></p>
                    <p><span className={styles.label}>Total Kilometers Raced:</span> <span
                        className={styles.value}>{displayOrFallback(driver.kmRaced, '0')}</span></p>
                </div>
            </div>
        );
}

export default DriverProfile;
