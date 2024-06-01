import styles from "./Descriptions.module.css"
import leftImage from '../img/apex_left.png';
import rightImage from '../img/apex_right.png';

const DriverTeamRelationsDesc = () => {
    return (
        <div className={styles.welcome}>
            <div className={styles.border}>
                <img src={leftImage} alt="Left Border" className={styles.boder_img}/>
                <div className={styles.content}>
                    <h1>Driver Team Relationships</h1>
                    <p>Explore the intricate web of team affiliations and driver careers in Formula 1 with our
                        interactive undirected graph, a fascinating visual tool that maps out the relationships between
                        drivers and teams over the past 20 years. This dynamic graph allows you to drag points and delve
                        into detailed profiles with a simple click on a team. Discover which drivers have been part of
                        each team, tracing their movements across the sport's landscape and uncovering patterns of
                        career progression and team strategies. Each connection tells a story of collaboration and
                        competition, providing insights into the tactical decisions that shape the outcomes on the
                        track. This engaging and informative visualization offers a unique way to understand the
                        shifting dynamics of Formula 1 teams and their drivers.</p>
                </div>
                <img src={rightImage} alt="Right Border" className={styles.boder_img}/>
            </div>
        </div>
    );
}

export default DriverTeamRelationsDesc;