import styles from "./Welcome.module.css"
import leftImage from '../img/apex_left.png';
import rightImage from '../img/apex_right.png';
import title from "../img/F1.png"
import videoBG from "../video/f1.mp4"
import songBG from "../audio/f1_2.mp3"
import React, {useRef, useState, useEffect} from 'react';

const WelcomePage = () => {
    const videoSource = `${videoBG}#t=6`;
    const audioRef = useRef(new Audio(songBG));
    const [isPlaying, setIsPlaying] = useState(false);

    useEffect(() => {
        const audio = audioRef.current;

        // Function to play audio from the start when it ends
        const handleAudioEnd = () => {
            audio.play();
        };

        audio.addEventListener('ended', handleAudioEnd);

        return () => {
            audio.removeEventListener('ended', handleAudioEnd);
            audio.pause();
            audio.currentTime = 0;
        };
    }, []);

    const contentRef = useRef(null);
    const buttonRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                const [entry] = entries;
                if (entry.isIntersecting) {
                    buttonRef.current.style.display = 'block';
                } else {
                    buttonRef.current.style.display = 'none';
                    audioRef.current.pause();
                    setIsPlaying(false);
                }
            },
            { threshold: 0.1 }
        );

        if (contentRef.current) {
            observer.observe(contentRef.current);
        }

        return () => {
            observer.disconnect();
            audioRef.current.pause();
            audioRef.current.currentTime = 0;
        };
    }, []);

    const togglePlay = () => {
        const audio = audioRef.current;
        if (isPlaying) {
            audio.pause();
        } else {
            audio.play();
        }
        setIsPlaying(!isPlaying);
    };

    return (
        <div className={styles.welcome}>
            <div className={styles.border}>
                <img src={leftImage} alt="Left Border" className={styles.boder_img}/>
                <div ref={contentRef} className={styles.content}>
                    <img src={title} alt="F1" className={styles.f1}/>
                    <h1 className={styles.text_w}>An introduction to Formula 1</h1>
                    <div className="overlay"></div>
                    <video autoPlay loop muted style={{ opacity: 0.3 }}>
                        <source src={videoSource} type="video/mp4"/>
                    </video>
                </div>
                <img src={rightImage} alt="Right Border" className={styles.boder_img}/>
            </div>
            <button ref = {buttonRef} onClick={togglePlay} className={styles.floatingButton}>
                {isPlaying ? 'Pause Music' : 'Play Music'}
            </button>
        </div>
    );
}

export default WelcomePage;