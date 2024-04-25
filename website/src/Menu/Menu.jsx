import React, { useState, useEffect } from 'react';
import styles from "./Menu.module.css"; // Import the CSS for styling
import song from "../audio/switch.mp3";
import red from "../img/red0.png";
import red1 from "../img/red1.png";
import red2 from "../img/red2.png";
import red3 from "../img/red3.png";
import red4 from "../img/red4.png";
import green from "../img/green.png";

const SideMenu = () => {
    const [currentImage, setCurrentImage] = useState(red);

    useEffect(() => {
        const images = [red, red1, red2, red3, red4, green];
        let index = 0;
        const intervalId = setInterval(() => {
            index = (index + 1) % images.length;
            setCurrentImage(images[index]);
        }, 3000);

        return () => clearInterval(intervalId);
    }, []);

    const scrollToSection = (sectionId, audioFile) => {
        document.getElementById(sectionId).scrollIntoView({ behavior: 'smooth' });
        new Audio(audioFile).play();
    };

    return (
        <div className={styles.sideMenu}>
            <div className={styles.tab}><img src={currentImage} alt="RedLight"/></div>
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
