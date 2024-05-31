import styles from './Leaderboard.module.css';
import leftImage from '../img/apex_left.png';
import rightImage from '../img/apex_right.png';
import { useState } from "react";
import Leaderboard from "./Leaderboard";
import ProgressBar from "./ProgressBar/ProgressBar";
import { years } from "./const";
import driverUrl from "./driver_cumulative_wins_with_constructors.csv?url";
import constructorUrl from "./ordered_data.csv?url";

const LeaderboardPage = () => {
    const [year, setYear] = useState(Math.min(...years));
    return (
        <div className={styles.template}>
            <div className={styles.border}>
                <img src={leftImage} alt="Left Border" className={styles.boder_img}/>
                <div className={styles.content}>
                    <h1 style={{fontSize: "3em", fontFamily: "f1Font",}}>Formula 1 Leaderboard</h1>
                    <div className={styles.leader}>
                        <Leaderboard year={year} width={370*2} height={500} dataUrl={driverUrl}/>
                        <Leaderboard year={year} width={370*2} height={500} dataUrl={constructorUrl}/>
                    </div>
                    <ProgressBar year={year} onYearChanged={(year) => setYear(year)}/>
                </div>
                <img src={rightImage} alt="Right Border" className={styles.boder_img}/>
            </div>
        </div>
    );
};

export default LeaderboardPage;
