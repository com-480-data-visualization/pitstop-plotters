import styles from "./DriverTeamRelations.module.css"
import leftImage from '../img/apex_left.png';
import rightImage from '../img/apex_right.png';

const DriverTeamRelationsPage = () => {
    return (
        <div className={styles.template}>
            <div className={styles.border}>
                <img src={leftImage} alt="Left Border" className={styles.boder_img}/>
                <div className={styles.content}>
                </div>
                <img src={rightImage} alt="Right Border" className={styles.boder_img}/>
            </div>
        </div>
    );
}

export default DriverTeamRelationsPage;