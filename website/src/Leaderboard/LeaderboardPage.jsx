import React, {useEffect, useState} from 'react';
import Leaderboard from './Leaderboard';
import EvolutionBar from "./EvolutionBar/EvolutionBar";
import styles from './Leaderboard.module.css';
import leftImage from '../img/apex_left.png';
import rightImage from '../img/apex_right.png';
import DriverLeaderboard from './DriverLeaderBoard';


const years = Array.from({length: 2024 - 1958}, (_, i) => i + 1958);

const LeaderboardPage = () => {
    const [year1, setYear] = useState(Math.min(...years));


    return (
        <div className={styles.template}>
            <div className={styles.border}>
                <img src={leftImage} alt="Left Border" className={styles.boder_img}/>
                <div className={styles.content}>
                    <h1>Leaderboard</h1>
                    <div className={styles.pilotsHeader}>
                        <h3>Pilots</h3> {/* Display the year dynamically */}
                        <div className={styles.teamsHeader}>
                            <h3>Teams</h3> {/* Display the year dynamically */}
                        </div>
                    </div>
                    <Leaderboard year={year1} width={400} height={400}/>
                    <DriverLeaderboard year={year1} width={400} height={400}/>
                    <div className={styles.evolutionBarContainer}>
                        <EvolutionBar year={year1} onYearChanged={(year) => setYear(year)}/>
                    </div>
                </div>
                <img src={rightImage} alt="Right Border" className={styles.boder_img}/>
            </div>
        </div>
    );
};

export default LeaderboardPage;
