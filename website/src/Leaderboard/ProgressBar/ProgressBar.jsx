import style from "./ProgressBar.module.css";
import ProgressController from "./ProgressController";

const years = [2015, 2016, 2017, 2018, 2019, 2020, 2021, 2022, 2023];
const ProgressBar = ({ year, onYearChanged }) => {
    return (
        <div className={style.bar}>
            <ProgressController year={year} onYearChanged={onYearChanged} />
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

export default ProgressBar;