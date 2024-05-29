import styles from "./Circuits.module.css"
import leftImage from '../img/apex_left.png';
import rightImage from '../img/apex_right.png';
import CircuitsMap from "./CircuitsMap/CircuitsMap";
import CircuitInfo from "./CircuitInfo/CircuitInfo";
import lineImage_h from '../img/line1_90.png';

const CircuitsPage = () => {
    return (
        <div className={styles.circuits}>
            <div className={styles.border}>
                <img src={leftImage} alt="Left Border" className={styles.boder_img}/>
                <div className={styles.content}>
                    <CircuitsMap />
                    <img src={lineImage_h} alt="Center Divider" className={styles.centerImage}/>
                    <CircuitInfo
                        circuitCode="TODO code"
                        title="TODO title"
                        // title={ clickedCircuit ? clickedCircuit + ": " + clickedMarkerCoordinates.x + "," + clickedMarkerCoordinates.y : "Select a Circuit" }
                    />
                </div>
                <img src={rightImage} alt="Right Border" className={styles.boder_img}/>
            </div>
        </div>
    );
}

export default CircuitsPage;