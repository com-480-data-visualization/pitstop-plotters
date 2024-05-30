import React, { useEffect, useRef } from 'react';
import * as d3 from 'd3';
import style from "./HallOfFameSpider.module.css"


const SpiderChart = () => {
    const chartRef = useRef(null);

    useEffect(() => {
        const chart = d3.select(chartRef.current);
        const width = 960, height = 500;
        const centerCoords = [width / 2, height / 2];
        const RADIAN_OFFSET = Math.PI / 2;

        const padding = 60;
        const radius = d3.min([width - padding, height - padding]) / 2;

        chart.selectAll("*").remove();

        const svg = chart.append("svg")
            .attr("height", height)
            .attr("width", width);

        const data = [
            { attribute: 'Bulk Apperception', value: 14 },
            { attribute: 'Candor', value: 19 },
            { attribute: 'Vivacity', value: 17 },
            { attribute: 'Coordination', value: 10 },
            { attribute: 'Meekness', value: 2 },
            { attribute: 'Humility', value: 3 },
            { attribute: 'Cruelty', value: 1 },
            { attribute: 'Self-Preservation', value: 10 },
            { attribute: 'Patience', value: 3 },
            { attribute: 'Decisiveness', value: 14 },
            { attribute: 'Imagination', value: 13 },
            { attribute: 'Curiosity', value: 8 },
            { attribute: 'Aggression', value: 5 },
            { attribute: 'Loyalty', value: 16 },
            { attribute: 'Empathy', value: 9 },
            { attribute: 'Tenacity', value: 17 },
            { attribute: 'Courage', value: 15 },
            { attribute: 'Sensuality', value: 18 },
            { attribute: 'Charm', value: 18 },
            { attribute: 'Humor', value: 9 }
        ];

        const domain = [0, 20];

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
            .attr('x', (d, i) => X(i, radius, 20))
            .attr('y', (d, i) => Y(i, radius, 20))
            .style("text-anchor", (d, i) => labelAnchor(i))
            .text(d => `${d.attribute.toUpperCase()} [${d.value}]`);

    }, []);

    return <div ref={chartRef}></div>;
};

export default SpiderChart;