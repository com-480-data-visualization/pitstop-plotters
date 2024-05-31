import style from "./ProgressBar.module.css";
import ProgressController from "./ProgressController";
import { years } from "../const";

const ProgressBar = ({ year, onYearChanged }) => {
    return (
        <div className={style.bar} style={{ display: 'flex', alignItems: 'center', width: '100%' }}>
            <ProgressController year={year} onYearChanged={onYearChanged} />
            <input
                type="range"
                onChange={(e) => onYearChanged(+e.target.value)}
                min={Math.min(...years)}
                max={Math.max(...years)}
                step={1}
                value={year}
                className={style.scroller}
                style={{ flexGrow: 1, margin: '0 10px' }}
            />
            <p className={style.year} style={{ margin: 0 }}>{year}</p>
        </div>
    );
}

export default ProgressBar;
