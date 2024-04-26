import React, { useEffect } from "react";
import * as d3 from "d3";
import * as topojson from "topojson"; // Import topojson library
import world_110m from './world-110m.json';

const Circuits = () => {
    useEffect(() => {

       // Remove the svg if it already exists
        const svg = d3.select("#globe"); // Select the div with id "globe"
        const width = +svg.attr("width");
        const height = +svg.attr("height");

        // Map and projection
        const projection = d3.geoNaturalEarth1()
            .scale(width / 1.3 / Math.PI)
            .translate([width / 2, height / 2]);

        // Draw the map
        svg.append("g")
            .selectAll("path")
            .data(topojson.feature(world_110m, world_110m.objects.countries).features) // Use topojson to convert the GeoJSON data
            .enter().append("path")
            .attr("fill", "#69b3a2")
            .attr("d", d3.geoPath()
                .projection(projection)
            )
            .style("stroke", "#fff");
    }, []); // Run only once on component mount

    return (
        <div style={{ display: "flex", justifyContent: "center" }}>
            <svg id="globe" width="800" height="500"></svg> 
        </div>
    );
};

export default Circuits;
