import { useRef, useEffect, useState } from "react";
import style from "./Leaderboard.module.css";
import { useTransition, animated } from "react-spring";
import * as d3 from "d3";
import { teamColors } from "./const"; // Ensure teamColors is correctly imported

const Leaderboard = (props) => {
    const { width, height, year, dataUrl } = props;
    const ref = useRef();
    const [items, setItems] = useState([]);
    const [data, setData] = useState(null);

    const div_height = height / 10;

    const transitions = useTransition(
        items.map((item, i) => ({ item: item, index: i + 1, y: i * div_height })),
        {
            config: { duration: 300 },
            from: { position: "absolute", opacity: 0, y: height },
            leave: { opacity: 0 },
            enter: ({ y }) => ({ y, opacity: 1 }),
            update: ({ y }) => ({ y }),
            key: (item) => item.item
        }
    );

    const preprocessData = (csv) => {
        const ret = {};
        for (let score of csv) {
            if (!ret[score.year]) ret[score.year] = {};
            ret[score.year][score.name] = {
                score: +score.value,
                constructor_name: score.constructor_name,
                name: score.name
            };
        }
        return ret;
    };

    useEffect(() => {
        d3.csv(dataUrl)
            .then((csv) => preprocessData(csv))
            .then((json) => setData(json))
            .catch((err) => console.error(err));
    }, [dataUrl]);

    useEffect(() => {
        if (data == null) return;
        if (data[year] === undefined) return;
        const newItems = Object.keys(data[year]).sort((a, b) => data[year][b].score - data[year][a].score);
        setItems(newItems.slice(0, 10));
    }, [year, data]);

    const scoreToWidth = d3.scaleLinear().domain([0, 234]).nice().range([width / 2, width * 1.1]);

    const getColor = (item) => {
        const teamName = data[year][item.item].name;
        const constructorName = data[year][item.item].constructor_name;
        return teamColors[teamName] || teamColors[constructorName] || '#cccccc'; // Fallback color if no match
    };

    const pos = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

    return (
        <div className={style.container} style={{ minWidth: width + "px", height: height + "px" }}>
            <div className={style.pos}>
                {pos.map(pos => <p key={pos} className={style.leaderboardPosition} style={{ position: "absolute", top: `${pos * div_height}px` }}>{pos + 1}.</p>)}
            </div>
            <div className={style.leaderboard}>
                {data && transitions(({ y, ...rest }, item, { key }) => (
                    <animated.div
                        key={key}
                        className={style.itemContainer}
                        style={{
                            transform: y.to((y) => `translate3d(0,${y}px,0)`),
                            ...rest
                        }}
                    >
                        <div className={style.leaderboardItem} style={{
                            width: scoreToWidth(data[year][item.item].score),
                            backgroundColor: getColor(item)
                        }}>
                            <p className={style.itemName}>{item.item}</p>
                        </div>
                        <p className={style.leaderboardScore}>{data[year][item.item].score.toFixed(2)}</p>
                    </animated.div>
                ))}
            </div>
        </div>
    );
}

export default Leaderboard;
