import styles from "./Descriptions.module.css"
import leftImage from '../img/apex_left.png';
import rightImage from '../img/apex_right.png';

const CircuitsDesc = () => {
    return (
        <div className={styles.welcome}>
            <div className={styles.border}>
                <img src={leftImage} alt="Left Border" className={styles.boder_img}/>
                <div className={styles.content}>
                    <h1>Circuits Viewer</h1>
                    <p>Immerse yourself in the iconic circuits of Formula 1 with our interactive map, a digital gateway
                        to the legendary tracks that have defined the sport. Each circuit is a story of engineering
                        marvels and heart-stopping races, encapsulated in detailed profiles and stunning images. Select
                        any circuit on the map to uncover its unique challenges, from the sinuous streets of Monaco to
                        the blistering straights of Monza. Dive into rich histories, explore architectural innovations,
                        and relive memorable moments that have taken place on these hallowed grounds. Whether you're a
                        seasoned enthusiast or a curious newcomer, our map offers a comprehensive and visually engaging
                        way to experience the venues that host the pinnacle of motorsport.</p>

                </div>
                <img src={rightImage} alt="Right Border" className={styles.boder_img}/>
            </div>
        </div>
    );
}

export default CircuitsDesc;