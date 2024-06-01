import styles from "./Descriptions.module.css"
import leftImage from '../img/apex_left.png';
import rightImage from '../img/apex_right.png';

const SeasonEvolutionDesc = () => {
    return (
        <div className={styles.welcome}>
            <div className={styles.border}>
                <img src={leftImage} alt="Left Border" className={styles.boder_img}/>
                <div className={styles.content}>
                    <h1>Seasons Evolution</h1>
                    <p>Delve into the dramatic ebb and flow of Formula 1 seasons with our interactive graph,
                        meticulously designed to showcase the annual race for supremacy among the world's top drivers.
                        This detailed visualization traces the points accumulated by each competitor throughout the
                        season, allowing you to observe how championships unfolded, from start to finish. Select a
                        season and watch the drivers' fortunes rise and fall across races, capturing the strategic moves
                        and pivotal moments that defined their journeys. Our graph provides a vivid, dynamic
                        representation of the intense competition and strategic depth that fuel Formula 1, offering fans
                        a comprehensive view of their favorite drivers' performances across the years.</p>

                </div>
                <img src={rightImage} alt="Right Border" className={styles.boder_img}/>
            </div>
        </div>
    );
}

export default SeasonEvolutionDesc;