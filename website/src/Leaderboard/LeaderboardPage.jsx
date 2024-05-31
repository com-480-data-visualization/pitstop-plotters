import styles from './Leaderboard.module.css';
import leftImage from '../img/apex_left.png';
import rightImage from '../img/apex_right.png';
import { useState } from "react";
import Leaderboard from "./Leaderboard";
import ProgressBar from "./ProgressBar/ProgressBar";

const years = [2015, 2016, 2017, 2018, 2019, 2020, 2021, 2022, 2023];
const LeaderboardPage = () => {
    const [year, setYear] = useState(Math.min(...years));
    return (
        <div className={styles.template}>
            <div className={styles.border}>
                <img src={leftImage} alt="Left Border" className={styles.boder_img}/>
                <div className={styles.content}>
                    <div>
                        <Leaderboard year={year} width={360} height={400}/>
                        <ProgressBar year={year} onYearChanged={(year) => setYear(year)}/>
                    </div>
                </div>
                <img src={rightImage} alt="Right Border" className={styles.boder_img}/>
            </div>
        </div>
    );
};

export default LeaderboardPage;
