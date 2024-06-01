import styles from "./Descriptions.module.css"
import leftImage from '../img/apex_left.png';
import rightImage from '../img/apex_right.png';

const HallOfFameDesc= () => {
    return (
        <div className={styles.welcome}>
            <div className={styles.border}>
                <img src={leftImage} alt="Left Border" className={styles.boder_img}/>
                <div className={styles.content}>
                    <h1>Hall of Fame</h1>
                    <p>Step into the annals of Formula 1 glory with our meticulously curated Global Leaderboard, a
                        celebration of speed, skill, and the relentless pursuit of perfection. Here, the titans of the
                        track — from the precision and poise of Hamilton to the daring and determination of Senna, to
                        the masterful and methodical Schumacher — are commemorated. Our leaderboard spans the decades,
                        capturing the essence of each era through the achievements of its champions. These are the
                        drivers who not only raced but also redefined what it means to be a legend in the high-stakes
                        world of Formula 1.</p>
                    <p> Witness the evolving history of motorsport's premier competition, and explore the careers of
                        those extraordinary individuals whose legacy is etched into every lap and every championship in
                        this breathtaking display of greatness.</p>


                </div>
                <img src={rightImage} alt="Right Border" className={styles.boder_img}/>
            </div>
        </div>
    );
}

export default HallOfFameDesc;