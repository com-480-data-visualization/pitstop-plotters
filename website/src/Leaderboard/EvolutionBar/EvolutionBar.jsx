import style from "./EvolutionBar.module.css";

import EvolutionController from "./EvolutionController";
const years = Array.from({ length: 2024 - 1958 }, (_, i) => i + 1958);
const EvolutionBar = ({ year, onYearChanged }) => {
    return (
        <div className={style.bar}>
            <EvolutionController year={year} onYearChanged={onYearChanged} />
            <input
                type="range"
                onChange={(e) => onYearChanged(+e.target.value)}
                min={Math.min(...years)}
                max={Math.max(...years)}
                step={1}
                value={year}
                className={style.scroller}
            />
            <p className={style.year}>{year}</p>
        </div>
    )
}

export default EvolutionBar;