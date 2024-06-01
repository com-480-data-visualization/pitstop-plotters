import styles from "./Descriptions.module.css"
import leftImage from '../img/apex_left.png';
import rightImage from '../img/apex_right.png';

const LeaderboardDesc = () => {
    return (
        <div className={styles.welcome}>
            <div className={styles.border}>
                <img src={leftImage} alt="Left Border" className={styles.boder_img}/>
                <div className={styles.content}>
                    <h1>Global Leaderboard</h1>
                    <p>Explore the pulse of Formula 1 from its inception to the present with our dynamic Global
                        Leaderboard, featuring both drivers and constructors. This animated bar graph captures the
                        thrilling ascent of F1's greatest competitors, charting their accumulation of points through
                        decades of intense rivalry. Witness the rise and fall of champions in real-time, as historical
                        legends and modern heroes push the limits of speed and strategy to dominate the leaderboard.
                        From the early days of manual gears and raw horsepower to today's era of advanced aerodynamics
                        and hybrid engines, our visualization brings the evolving battle for supremacy to life, offering
                        a captivating perspective on the relentless pursuit of excellence that defines Formula 1.</p>
                </div>
                <img src={rightImage} alt="Right Border" className={styles.boder_img}/>
            </div>
        </div>
    );
}

export default LeaderboardDesc