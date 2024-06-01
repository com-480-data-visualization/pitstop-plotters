import React from 'react';
import styles from "./HallOfFameInfo.module.css"

const DriverProfile = ({ driver }) => {
    // Helper function to display data or a default message
    const displayOrFallback = (value, defaultValue = '') => {
        return value || defaultValue;
    };

    const shouldDisplay = (value) => {
        return value && value !== '0' && value !== 'N/A';
    };

    return (
        <div className={styles.divInfo}>
            <div className={styles.name}>
                <h1>{displayOrFallback(driver.name)}</h1>
            </div>
            <div className={styles.item}>
                <p><span className={styles.label}>Born:</span> <span
                    className={styles.value}>{displayOrFallback(driver.born)}</span></p>
                {shouldDisplay(driver.died) && (<p><span className={styles.label}>Died:</span> <span
                    className={styles.value}>{displayOrFallback(driver.died)}</span></p>)}
                <p><span className={styles.label}>Nation:</span> <span
                    className={styles.value}>{displayOrFallback(driver.nation)}</span></p>
            </div>
            <div className={styles.item}>
                <p><span className={styles.label}>Total Points:</span> <span
                    className={styles.value}>{displayOrFallback(driver.totalPoints, '0')}</span></p>
                <p><span className={styles.label}>Points per GP:</span> <span
                    className={styles.value}>{displayOrFallback(driver.pointsPerGP, '0')}</span></p>
                <p><span className={styles.label}>World Champion:</span> <span
                className={styles.value}>{driver.championships ? driver.championships.join(', ') : 'N/A'}</span></p>
            </div>

            <div className={styles.item}>
                <p><span className={styles.label}>Wins:</span> <span
                    className={styles.value}>{displayOrFallback(driver.wins, '0')}</span></p>
                <p><span className={styles.label}>Pole Positions:</span> <span
                    className={styles.value}>{displayOrFallback(driver.polePositions, '0')}</span></p>
                <p><span className={styles.label}>Fastest Laps:</span> <span
                    className={styles.value}>{displayOrFallback(driver.fastestLaps, '0')}</span></p>
                <p><span className={styles.label}>Podiums:</span> <span
                    className={styles.value}>{displayOrFallback(driver.podiums, '0')}</span></p>
            </div>
        </div>
    );
}
/*
<div className={styles.item}>
                <p><span className={styles.label}>First Grand Prix:</span> <span
                    className={styles.value}>{displayOrFallback(driver.firstGP)}</span></p>
                <p><span className={styles.label}>Last Grand Prix:</span> <span
                    className={styles.value}>{displayOrFallback(driver.lastGP)}</span></p>
                <p><span className={styles.label}>World Champion:</span> <span
                    className={styles.value}>{driver.championships ? driver.championships.join(', ') : 'N/A'}</span></p>
            </div>
 <div className={styles.item}>
     <p><span className={styles.label}>Total Points:</span> <span
         className={styles.value}>{displayOrFallback(driver.totalPoints, '0')}</span></p>
     <p><span className={styles.label}>Points per GP:</span> <span
         className={styles.value}>{displayOrFallback(driver.pointsPerGP, '0')}</span></p>
     <p><span className={styles.label}>Points per Season:</span> <span
         className={styles.value}>{displayOrFallback(driver.pointsPerSeason, '0')}</span></p>
 </div>
<div className={styles.item}>
                <p><span className={styles.label}>Total Seasons:</span> <span
                    className={styles.value}>{displayOrFallback(driver.seasons, '0')}</span></p>
                <p><span className={styles.label}>Total Laps Led:</span> <span
                    className={styles.value}>{displayOrFallback(driver.lapsLed, '0')}</span></p>
                <p><span className={styles.label}>Total Kilometers Led:</span> <span
                    className={styles.value}>{displayOrFallback(driver.kmLed, '0')}</span></p>
                <p><span className={styles.label}>Total Laps Raced:</span> <span
                    className={styles.value}>{displayOrFallback(driver.lapsRaced, '0')}</span></p>
                <p><span className={styles.label}>Total Kilometers Raced:</span> <span
                    className={styles.value}>{displayOrFallback(driver.kmRaced, '0')}</span></p>
            </div>
<div className={styles.item}>
                <p><span className={styles.label}>Grand Slams:</span> <span
                    className={styles.value}>{displayOrFallback(driver.grandSlams, '0')}</span></p>
                <p><span className={styles.label}>Hat Tricks:</span> <span
                    className={styles.value}>{displayOrFallback(driver.hatTricks, '0')}</span></p>
                <p><span className={styles.label}>Retirements:</span> <span
                    className={styles.value}>{displayOrFallback(driver.retirements, '0')}</span></p>
                <p><span className={styles.label}>Starting Grid Average:</span> <span
                    className={styles.value}>{displayOrFallback(driver.rankStartingGridAverage, 'N/A')}</span></p>
                <p><span className={styles.label}>Finish Line Average:</span> <span
                    className={styles.value}>{displayOrFallback(driver.rankFinishLineAverage, 'N/A')}</span></p>
            </div>
 */

export default DriverProfile;
