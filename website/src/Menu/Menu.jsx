import React from 'react';
import styles from "./Menu.module.css" // Import the CSS for styling
import song from "../audio/switch.mp3"
const SideMenu = () => {
    const scrollToSection = (sectionId, audioFile) => {
        document.getElementById(sectionId).scrollIntoView({ behavior: 'smooth' });
        new Audio(audioFile).play();
    };

    return (
        <div className={styles.sideMenu}>
            <div className={styles.tab}>&#9660;</div> {/* Arrow indicating expandable menu */}
            <ul>
                <li onClick={() => scrollToSection('welcome', song)}>Welcome</li>
                <li onClick={() => scrollToSection('leaderboard', song)}>Leaderboard</li>
                <li onClick={() => scrollToSection('halloffame', song)}>Hall of Fame</li>
                <li onClick={() => scrollToSection('circuits', song)}>Circuits</li>
                <li onClick={() => scrollToSection('seasons', song)}>Seasons Evolution</li>
                <li onClick={() => scrollToSection('relations', song)}>Drivers and Teams Relationship</li>
            </ul>
        </div>
    );
};

export default SideMenu;