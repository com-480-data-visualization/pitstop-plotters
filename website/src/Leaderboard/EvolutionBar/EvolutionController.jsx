import { useState } from "react";
import useInterval from "./useInterval";
import { FaPlay, FaStop } from 'react-icons/fa';
import style from "./EvolutionBar.module.css";
const years = Array.from({ length: 2024 - 1958 }, (_, i) => i + 1958);


const EvolutionController = ({ year, onYearChanged }) => {
    const[isPlaying, setIsPlaying]=useState(false);

    useInterval(() => {
        const maxYear = Math.max(...years);
        if (year === maxYear) {
            setIsPlaying(false);
        } else {
            increaseYear();
        }
    }, isPlaying ? 850 : null)

    const increaseYear = () => {
        const maxYear = Math.max(...years);
        if (year === maxYear) return;
        onYearChanged(year + 1);
    };

    const togglePlay = () => {
        if (isPlaying) {
            setIsPlaying(false);
        } else {
            setIsPlaying(true);
        }
    }

    return <div className={style.play} onClick={togglePlay}>
        {isPlaying ? <FaStop /> : <FaPlay />}
    </div>;

}

export default EvolutionController;