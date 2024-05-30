import styles from "./HallOfFame.module.css"
import leftImage from '../img/apex_left.png';
import rightImage from '../img/apex_right.png';
import lineImage from '../img/line1.png';
import lineImage_h from '../img/line1_90.png';
import HallOfFame from "./HallOfFame";
import ImageRow from "./HallOfFameSelection";
import HallOfFameInfo from "./HallOfFameInfo";
import {useState} from "react";
import SpiderChart from "./HallOfFameSpider";

const HallOfFamePage = () => {

    const [driver, setDriver] = useState("");

    const handleDriverChange = (driver) => {
        setDriver(driver);
    };

    return (
        <div className={styles.template}>
            <div className={styles.border}>
                <img src={leftImage} alt="Left Border" className={styles.boder_img}/>
                <div className={styles.content}>
                    <div className={styles.leftSide}>
                        <SpiderChart/>
                    </div>
                    <img src={lineImage} alt="Center line" className={styles.centerImage}/>
                    <div className={styles.rightSide}>
                        <div className={styles.rightBottom}>
                            <div className={styles.titleContainer}>
                                Top 5 drivers of all time
                            </div>
                            <ImageRow onDriverChange = {handleDriverChange}/>
                        </div>
                        <img src={lineImage_h} alt="Center Divider" className={styles.centerDivider}/>
                        <div className={styles.rightTop}>
                            <div className={styles.titleContainer}>
                                <HallOfFameInfo driver={driver}/>
                            </div>
                        </div>
                    </div>
                </div>
                <img src={rightImage} alt="Right Border" className={styles.boder_img}/>
            </div>
        </div>
    );
}

export default HallOfFamePage;