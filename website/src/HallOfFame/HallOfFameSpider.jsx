import React, { useEffect, useRef } from 'react';
import * as d3 from 'd3';
import style from './HallOfFameSpider.module.css';

const Max_value = 25;
const SpiderChart = ({ driver }) => {
    const chartRef = useRef(null);

    useEffect(() => {
        const chart = d3.select(chartRef.current);
        const width = chartRef.current.clientWidth;
        const height = chartRef.current.clientHeight;
        const centerCoords = [width / 2, height / 2];
        const RADIAN_OFFSET = Math.PI / 2;

        const padding = 250;
        const radius = d3.min([width - padding, height - padding]) / 2;

        chart.selectAll("*").remove();

        const svg = chart.append("svg")
            .attr("width", "100%")
            .attr("height", "100%")
            .attr("viewBox", `0 0 ${width} ${height}`)
            .attr("preserveAspectRatio", "xMidYMid meet");

        const data = [
            { attribute: 'Season', value: driver.seasons },
            { attribute: 'Constuctors', value: driver.constructors },
            { attribute: 'Win', value: (driver.wins/driver.grandPrix).toFixed(2) * Max_value },
            { attribute: 'Pole Pos', value: (driver.polePositions/driver.grandPrix).toFixed(2) * Max_value },
            { attribute: 'Fast Lap', value: (driver.fastestLaps/driver.grandPrix).toFixed(2) * Max_value },
            { attribute: 'Podium', value: (driver.podiums/driver.grandPrix).toFixed(2) * Max_value },
            { attribute: 'Hat Tricks', value: driver.hatTricks },
            { attribute: 'Grand Slams', value: driver.grandSlams },
            { attribute: 'Retirement', value: (driver.retirements/driver.grandPrix).toFixed(2) * Max_value },
            { attribute: 'Points / GP', value: driver.pointsPerGP },
            { attribute: 'Laps Led', value: (driver.lapsLed/driver.lapsRaced).toFixed(2) * Max_value },
            { attribute: 'Km led', value: (driver.kmLed/driver.kmRaced).toFixed(2) * Max_value },
            { attribute: 'Starting Grid', value: 24 - driver.rankStartingGridAverage },
            { attribute: 'Finish Line', value: 24 - driver.rankFinishLineAverage },
            { attribute: 'Championships', value: driver.championships.length },
            { attribute: 'Models drove', value: driver.models}
        ];

        const domain = [0, Max_value];

        const angle = d3.scaleLinear()
            .domain([0, data.length])
            .range([0 - RADIAN_OFFSET, 2 * Math.PI - RADIAN_OFFSET]);

        const measureScale = d3.scaleLinear()
            .domain(domain)
            .range([30, radius]);

        const X = (i, r = radius, offset = 0) => Math.cos(angle(i)) * (r + offset);
        const Y = (i, r = radius, offset = 0) => Math.sin(angle(i)) * (r + offset);

        const labelAnchor = (i) => {
            const topAngle = 0 - Math.PI / 2;
            const bottomAngle = 0 + Math.PI / 2;
            const the_angle = angle(i);
            if (the_angle === topAngle || the_angle === bottomAngle) return "middle";
            if (the_angle > topAngle && the_angle < bottomAngle) return "start";
            return "end";
        };

        const radar = svg.append('g')
            .attr('transform', `translate(${centerCoords[0]},${centerCoords[1]})`);

        radar.selectAll('circle.ring')
            .data(d3.range(domain[0], domain[1])).enter()
            .append('circle')
            .classed('ring', true)
            .attr('cx', 0)
            .attr('cy', 0)
            .attr('r', (d, i) => measureScale(i + 1));

        radar.selectAll('line.axis')
            .data(data).enter()
            .append('line')
            .classed('axis', true)
            .attr('x1', 0)
            .attr('y1', 0)
            .attr('x2', (d, i) => X(i))
            .attr('y2', (d, i) => Y(i));

        radar.selectAll('circle.axis_circle')
            .data(data).enter()
            .append('circle')
            .classed('axis_circle', true)
            .attr('cx', (d, i) => X(i))
            .attr('cy', (d, i) => Y(i))
            .attr('r', 7);

        const areas = radar.selectAll('polygon.area')
            .data([data]).enter()
            .append('polygon')
            .classed('area', true)
            .attr('points', d => d.map(() => [0, 0]).join(' '))
            .transition()
            .duration(2500)
            .attr('points', d => d.map((d, i) => {
                const rad = measureScale(d.value);
                return [X(i, rad), Y(i, rad)];
            }).join(' '));

        const points = radar.selectAll('circle.point')
            .data(data).enter()
            .append('circle')
            .classed('point', true)
            .attr('r', 7)
            .attr('cx', 0)
            .attr('cy', 0)
            .transition()
            .duration(2500)
            .attr('cx', (d, i) => X(i, measureScale(d.value)))
            .attr('cy', (d, i) => Y(i, measureScale(d.value)));

        radar.append('circle')
            .classed('center', true)
            .attr('cx', 0)
            .attr('cy', 0)
            .attr('r', 30);

        radar.selectAll('text.label')
            .data(data).enter()
            .append('text')
            .classed('label', true)
            .attr('x', (d, i) => X(i, radius, Max_value))
            .attr('y', (d, i) => Y(i, radius, Max_value))
            .style("text-anchor", (d, i) => labelAnchor(i))
            .text(d => `${d.attribute.toUpperCase()} [${d.value}]`);

    }, [driver]); // Add driver as a dependency

    return <div style={{ width: '100%', height: '100%' }} ref={chartRef}></div>;
};

export default SpiderChart;
