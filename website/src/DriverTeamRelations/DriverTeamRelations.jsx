import React, { useEffect, useLayoutEffect, useRef, useState } from 'react';
import * as d3 from 'd3';
import styles from "./DriverTeamRelations.module.css"; // Import the CSS module

const DriverTeamRelations = () => {
    const [data, setData] = useState(null);
    const chartRef = useRef(null);
    const containerRef = useRef(null);

    useEffect(() => {
        const loadData = async () => {
            try {
                const data = await import(`./graph.json`);
                console.log(`Graph data loaded`);
                setData(data.default);
            } catch (error) {
                console.error(`Failed to load data for graph`, error);
            }
        };

        loadData();
    }, []);

    useLayoutEffect(() => {
        if (!data) {
            console.log('No data to display');
            return;
        }

        const container = containerRef.current;
        const { width, height } = container.getBoundingClientRect();

        const links = data.links.map(d => ({ ...d }));
        const nodes = data.nodes.map(d => ({ ...d }));

        const simulation = d3.forceSimulation(nodes)
            .force('link', d3.forceLink(links).id(d => d.id).distance(100))
            .force('charge', d3.forceManyBody().strength(-250))
            .force('center', d3.forceCenter(0, 0))
            .force('x', d3.forceX().strength(0.15))
            .force('y', d3.forceY().strength(0.15));

        const svg = d3.select(chartRef.current)
            .attr('width', width)
            .attr('height', height)
            .attr('viewBox', [-width / 2, -height / 2, width, height])
            .style('max-width', '100%')
            .style('height', 'auto');

        svg.selectAll("*").remove();

        const link = svg.append('g')
            .attr('class', styles.link) // Apply the link opacity class
            .selectAll('line')
            .data(links)
            .enter().append('line')
            .attr('stroke-width', d => Math.sqrt(d.value))
            .attr('class', d => styles[`team-${d.target.id.replace(/\s+/g, '-')}`]); // Apply class based on target team

        const node = svg.append('g')
            .attr('stroke', '#fff')
            .attr('stroke-width', 1.5)
            .selectAll('circle')
            .data(nodes)
            .enter().append('circle')
            .attr('r', d => d.radius) // Set radius from data
            .attr('class', d => styles[`team-${d.id.replace(/\s+/g, '-')}`]) // Apply class based on team
            .style('pointer-events', 'all') // Ensure nodes are interactable
            .call(d3.drag()
                .on('start', dragstarted)
                .on('drag', dragged)
                .on('end', dragended));

        const text = svg.append('g')
            .attr('stroke-width', 0)
            .selectAll('text')
            .data(nodes)
            .enter().append('text')
            .attr('dx', 12)
            .attr('dy', '.35em')
            .attr('class', d => styles[`text-${d.id.replace(/\s+/g, '-')}`]) // Apply text color based on team
            .text(d => d.id);

        node.append('title')
            .text(d => d.id);

        simulation.on('tick', () => {
            link
                .attr('x1', d => d.source.x)
                .attr('y1', d => d.source.y)
                .attr('x2', d => d.target.x)
                .attr('y2', d => d.target.y);

            node
                .attr('cx', d => d.x)
                .attr('cy', d => d.y);

            text
                .attr('x', d => d.x)
                .attr('y', d => d.y);
        });

        function dragstarted(event, d) {
            if (!event.active) simulation.alphaTarget(0.3).restart();
            d.fx = d.x;
            d.fy = d.y;
        }


        function dragstarted(event, d) {
            if (!event.active) simulation.alphaTarget(0.3).restart();
            d.fx = d.x;
            d.fy = d.y;
        }

        function dragged(event, d) {
            d.fx = event.x;
            d.fy = event.y;
        }

        function dragended(event, d) {
            if (!event.active) simulation.alphaTarget(0);
            d.fx = null;
            d.fy = null;
        }

        return () => {
            simulation.stop();
        };
    }, [data]);

    return (
        <div ref={containerRef} style={{ width: '100%', height: '100%' }}>
            <svg ref={chartRef}></svg>
        </div>
    );
};

export default DriverTeamRelations;
