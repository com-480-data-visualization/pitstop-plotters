import styles from './Leaderboard.module.css';
import leftImage from '../img/apex_left.png';
import rightImage from '../img/apex_right.png';
import { useState, useEffect, useRef } from "react";
import Leaderboard from "./Leaderboard";
import ProgressBar from "./ProgressBar/ProgressBar";
import { years } from "./const";
import driverUrl from "./driver_cumulative_wins_with_constructors.csv?url";
import constructorUrl from "./ordered_data.csv?url";

const LeaderboardPage = () => {
    const [year, setYear] = useState(Math.min(...years));
    const [containerWidth, setContainerWidth] = useState(0);
    const [containerHeight, setContainerHeight] = useState(0);
    const containerRef = useRef(null);

    useEffect(() => {
        const updateDimensions = () => {
            if (containerRef.current) {
                setContainerWidth(containerRef.current.offsetWidth);
                setContainerHeight(containerRef.current.offsetHeight);
            }
        };

        updateDimensions(); // Set initial dimensions

        window.addEventListener('resize', updateDimensions);

        return () => {
            window.removeEventListener('resize', updateDimensions);
        };
    }, []);

    const leaderboardWidth = (containerWidth / 2) + 150; // Adjust as needed
    const leaderboardHeight = containerHeight/1.5; // Adjust as needed to fit within the container

    return (
        <div className={styles.template}>
            <div className={styles.border}>
                <img src={leftImage} alt="Left Border" className={styles.boder_img}/>
                <div className={styles.content} ref={containerRef}>
                    <h1 style={{fontSize: "3em", fontFamily: "f1Font", marginTop: "-0.5em", marginBottom: "-1em"}}>Formula 1 Leaderboard</h1>
                    <div className={styles.leader}>
                        <Leaderboard year={year} width={leaderboardWidth} height={leaderboardHeight} dataUrl={driverUrl}/>
                        <Leaderboard year={year} width={leaderboardWidth} height={leaderboardHeight} dataUrl={constructorUrl}/>
                    </div>
                    <ProgressBar year={year} onYearChanged={(year) => setYear(year)}/>
                </div>
                <img src={rightImage} alt="Right Border" className={styles.boder_img}/>
            </div>
        </div>
    );
};

export default LeaderboardPage;
