import styles from "./SeasonsEvolution.module.css";
import * as d3 from "d3";
import { useEffect } from "react";

const SeasonEvolution = (props) => {

    useEffect(() => {
        const margin = { top: 10, right: 20, bottom: 30, left: 50 }; // Adjust margins as needed
        const fullWidth = 460; // Width of the component
        const width = fullWidth - margin.left - margin.right,
            height = 400 - margin.top - margin.bottom;

        // avoid multiple svg elements display
        d3.select("#seasonevolution svg").remove();

        // add the svg element only once
        const svg = d3.select("#seasonevolution")
            .append("svg")
            .attr("width", fullWidth) // Set full width here
            .attr("height", height + margin.top + margin.bottom)
            .append("g")
            .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

        // Read the data
        d3.csv("https://raw.githubusercontent.com/holtzy/data_to_viz/master/Example_dataset/5_OneCatSevNumOrdered.csv").then(function (data) {
            // Preprocess the data to group by name
            var groupedData = d3.groups(data, d => d.name);

            // Add X axis --> it is a date format
            var x = d3.scaleLinear()
                .domain(d3.extent(data, function (d) { return +d.year; }))
                .range([0, width]);
            var xAxis = svg.append("g")
                .attr("transform", "translate(0," + height + ")")
                .call(d3.axisBottom(x).ticks(5));

            // put text and lines in white
            xAxis.selectAll("text").style("fill", "white");
            xAxis.selectAll("line").style("stroke", "white");
            xAxis.selectAll("path").style("stroke", "white");

            // Add Y axis
            var y = d3.scaleLinear()
                .domain([0, d3.max(data, function (d) { return +d.n; })])
                .range([height, 0]);
            var yAxis = svg.append("g")
                .call(d3.axisLeft(y));

            // color y axis in white
            yAxis.selectAll("text").style("fill", "white");
            yAxis.selectAll("line").style("stroke", "white");
            yAxis.selectAll("path").style("stroke", "white");

            // color palette
            var color = d3.scaleOrdinal()
                .domain(groupedData.map(d => d[0]))
                .range(['#e41a1c', '#377eb8', '#4daf4a', '#984ea3', '#ff7f00', '#ffff33', '#a65628', '#f781bf', '#999999']);

            // Draw the lines
            groupedData.forEach(function (group) {
                svg.append("path")
                    .datum(group[1])
                    .attr("fill", "none")
                    .attr("stroke", color(group[0]))
                    .attr("stroke-width", 1.5)
                    .attr("d", d3.line()
                        .x(function (d) { return x(+d.year); })
                        .y(function (d) { return y(+d.n); })
                    );
            });
        });
    }, []); // Empty dependency array to run the effect only once

    return (
        <div id="seasonevolution" style={{display:"flex",justifyContent:"center"}}>
            {/* Remove the unnecessary div */}
        </div>
    );
}

export default SeasonEvolution;
