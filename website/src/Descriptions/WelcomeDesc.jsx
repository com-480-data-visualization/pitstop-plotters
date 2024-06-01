import styles from "./Descriptions.module.css"
import leftImage from '../img/apex_left.png';
import rightImage from '../img/apex_right.png';

const WelcomeDesc = () => {
    return (
        <div className={styles.welcome}>
            <div className={styles.border}>
                <img src={leftImage} alt="Left Border" className={styles.boder_img}/>
                <div className={styles.content}>
                    <div className="content">
                        <h1>Welcome to the World of Formula 1</h1>
                        <p>Strap in and accelerate into the heart-pounding universe of Formula 1, a realm where tradition and cutting-edge technology merge on the grandest stages of motorsport. Delve into our exquisite visualizations that artfully blend the rich tapestry of the sport’s storied past with its dynamic, pulse-quickening present. </p>

                            <p>As you navigate through our digital experience, immerse yourself in a world where precision engineering meets fierce competition, where every millisecond counts, and the legacy of legends hangs on every turn. Our visual narratives not only highlight epic rivalries and iconic triumphs but also the subtle strategies and technical innovations that define this elite sport.</p>

                            <p>Explore the intricacies of Formula 1 with a deep dive into the elements that make it a spectacle: the roar of the engines, the blur of the speeding machines, and the cheers of the crowds. Each feature on our site is crafted to bring you closer to the intense action, the brilliant minds, and the incredible athletes who have pushed the boundaries of what's possible on four wheels.</p>

                            <p>This is where fans can experience the thrill of victory and the agony of defeat, all within the click of a mouse, bringing the adrenaline of F1 racing right into your digital space. Discover, through our visual stories, how Formula 1 continues to captivate and inspire millions around the globe, making it not just a sport but a testament to human endeavor and the pursuit of perfection. Join us on this thrilling ride into the essence of speed, skill, and spectacle. Welcome to the ultimate F1 experience.</p>
                    </div>
                </div>
                <img src={rightImage} alt="Right Border" className={styles.boder_img}/>
            </div>
        </div>
    );
}

export default WelcomeDesc;