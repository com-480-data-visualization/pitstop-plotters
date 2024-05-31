import { useRef, useEffect, useState } from "react";
import style from "./DriverLeaderBoard.module.css";
import { useTransition, animated } from "react-spring";
import dataUrl from "./good_data_drivers.csv?url";

import * as d3 from "d3";

const DriverLeaderboard = (props) => {
    const { width, height, year } = props;
    const ref = useRef();
    const [drivers, setDrivers] = useState([]);
    const [data, setData] = useState(null);

    const div_height = height / 10;

    const transitions = useTransition(
        drivers.map((item, i) => ({ item: item, index: i + 1, y: i * div_height })),
        {config: { duration: 300 },
            from: { position: "absolute", opacity: 0, y: height },
            leave: { opacity: 0},
            enter: ({ y }) => ({y, opacity: 1 }),
            update: ({ y }) => ({ y }),
            key: (item) => item.item
        }
    );

    const preprocessData = (csv) => {
        const ret_dict = {};
        for (let score of csv) {
            if (!ret_dict[score.year]) ret_dict[score.year] = {};
            ret_dict[score.year][score.name] = { score: +score.value,
                                        
             };
        }
        return ret_dict;
    };

    useEffect(() => {
        d3.csv(dataUrl)
            .then((csv) => preprocessData(csv))
            .then((json) => setData(json))
            .catch((err) => console.error(err));
    }, []);

    useEffect(() => {
        if (data == null) return
        if (data[year] === undefined) return
        
        const newDrivers = Object.keys(data[year]).sort((a, b) => data[year][b].score - data[year][a].score)
        setDrivers(newDrivers.slice(0,5))
    }, [year, data]);



    const scoreToWidth = d3.scaleLinear().domain([0, 200]).nice().range([width / 2 , width*1.5])

    const color = d3.scaleSequential().domain([125, 10]).nice().interpolator(d3.interpolatePlasma);
    const pos = [0, 1, 2, 3, 4]

    return (
        <div className={style.container} style={{ minWidth: width + "px", height: height + "px" }}>
            <div className={style.pos}>
                {pos.map(pos => <p key={pos} className={style.leaderPosition} style={{ position: "absolute", top: `${pos * div_height}px` }}>{pos + 1}.</p>)}
            </div>
            <div className={style.leaderboard}>
                {data && transitions(({ y, ...rest }, item, { key }) => (
                    <animated.div
                        key={key}
                        className={style.nameContainer}
                        style={{
                            transform: y.to((y) => `translate3d(0,${y}px,0)`),
                            ...rest
                        }}
                    >
                        <div className={style.leaderboardItem} style={{
                            width: scoreToWidth(data[year][item.item].score),
                            backgroundColor: color(data[year][item.item].score)
                        }}>
                            <p className={style.name}>{item.item}</p>
                        </div>
                        <p className={style.leaderScore}>{data[year][item.item].score}</p>
                    </animated.div>
                ))}
            </div >
        </div>
    );
}

export default DriverLeaderboard;