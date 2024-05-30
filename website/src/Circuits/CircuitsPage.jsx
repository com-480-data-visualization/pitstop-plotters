import React, { useState, useRef, useEffect } from "react";
import styles from "./Circuits.module.css"
import leftImage from '../img/apex_left.png';
import rightImage from '../img/apex_right.png';
import CircuitsMap from "./CircuitsMap/CircuitsMap";
import CircuitInfo from "./CircuitInfo/CircuitInfo";
import lineImage_h from '../img/line1_90.png';

const CircuitsPage = () => {

    const [circuitCode, setCircuitCode] = useState("TODO code");

    // code manage circuit id between map and info
    const handleCircuitChange = (newCircuitCode) => {
        setCircuitCode(newCircuitCode);
    };

    // 
    // Handle resize for the map
    // 
    const moduleRef = useRef(null);
    const [dimensions, setDimensions] = useState({ width: 0, height: 0 });
  
    useEffect(() => {
      function handleResize() {
        if (moduleRef.current) {
          setDimensions({
            width: moduleRef.current.offsetWidth,
            height: moduleRef.current.offsetHeight
          });
        }
      }
  
      // Call the function to set initial dimensions
      handleResize();
  
      // Set up event listener for resize events
      window.addEventListener('resize', handleResize);
  
      // Clean up event listener
      return () => window.removeEventListener('resize', handleResize);
    }, []); // Empty array ensures this effect runs only on mount and unmount

    return (
        <div className={styles.circuits}>
            <div className={styles.border}>
                <img src={leftImage} alt="Left Border" className={styles.boder_img}/>
                <div className={styles.content} ref={moduleRef}>
                    <div className={styles.top}>
                        <CircuitsMap onCircuitChange={handleCircuitChange} 
                            containerWidth={dimensions.width} 
                            containerHeight={dimensions.height} />
                    </div>
                    <img src={lineImage_h} alt="Center Divider" className={styles.centerImage}/>
                    <div className={styles.bottom}>
                        <CircuitInfo circuitCode={circuitCode} />
                    </div>
                </div>
                <img src={rightImage} alt="Right Border" className={styles.boder_img}/>
            </div>
        </div>
    );
}

export default CircuitsPage;