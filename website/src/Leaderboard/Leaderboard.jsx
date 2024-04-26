import React, { useEffect } from "react";
import * as d3 from "d3";

const Leaderboard = (props) => {
    useEffect(() => {
        // Data for the first bar plot
        const data1 = [
            { name: "Ferrari", value: 270 },
            { name: "Mercedes", value: 240 },
            { name: "Porsche", value: 200 },
            { name: "Redbull", value: 150 },
            { name: "McLaren", value: 100 },
            // Add more data as needed
        ];

        // Data for the second bar plot
        const data2 = [
            { name: "Hamilton", value: 250 },
            { name: "Schumarer", value: 240 },
            { name: "Verstappen", value: 200 },
            { name: "Colin", value: 150 },
            { name: "Xavier", value: 100 },
            { name: "Yahya", value: 100 },
            // Add more data as needed
        ];
        const colorScale = d3.scaleOrdinal().domain(data1.map((d, i) => i))
                            .range(d3.schemeCategory10);

        d3.select("#bar-chart-1 svg").remove();
        d3.select("#bar-chart-2 svg").remove();
        // Set up SVG container for the first bar plot
        const svg1 = d3.select("#bar-chart-1")
            .append("svg")
            .attr("width", 400)
            .attr("height", 200);
            

        // Set up SVG container for the second bar plot
        const svg2 = d3.select("#bar-chart-2")
            .append("svg")
            .attr("width", 400)
            .attr("height", 200);

        // Render the first bar plot
        svg1.selectAll("rect")
            .data(data1)
            .enter()
            .append("rect")
            .attr("x", 100) // Adjust position of bars for names
            .attr("y", (d, i) => i * 30)
            .attr("width", (d) => d.value)
            .attr("height", 25)
            .attr("fill", (d, i) => colorScale(i));

        // Render the text for the first bar plot
        svg1.selectAll("text")
            .data(data1)
            .enter()
            .append("text")
            .text(d => d.name)
            .attr("x", 10) // Adjust position for names
            .attr("y", (d, i) => i * 30 + 18) // Adjust position for names
            .attr("font-size", "14px")
            .attr("fill", "white");

        // Render the value text for the first bar plot
        svg1.selectAll(".value-text")
            .data(data1)
            .enter()
            .append("text")
            .text(d => d.value)
            .attr("x", (d) => 100 + d.value + 5) // Adjust position for values
            .attr("y", (d, i) => i * 30 + 18) // Adjust position for values
            .attr("font-size", "14px")
            .attr("fill", "white");

        // Render the second bar plot
        svg2.selectAll("rect")
            .data(data2)
            .enter()
            .append("rect")
            .attr("x", 100) // Adjust position of bars for names
            .attr("y", (d, i) => i * 30)
            .attr("width", (d) => d.value)
            .attr("height", 25)
            .attr("fill", (d, i) => colorScale(i));

        // Render the text for the second bar plot
        svg2.selectAll("text")
            .data(data2)
            .enter()
            .append("text")
            .text(d => d.name)
            .attr("x", 10) // Adjust position for names
            .attr("y", (d, i) => i * 30 + 18) // Adjust position for names
            .attr("font-size", "14px")
            .attr("fill", "white");

        // Render the value text for the second bar plot
        svg2.selectAll(".value-text")
            .data(data2)
            .enter()
            .append("text")
            .text(d => d.value)
            .attr("x", (d) => 100 + d.value + 5) // Adjust position for values
            .attr("y", (d, i) => i * 30 + 18) // Adjust position for values
            .attr("font-size", "14px")
            .attr("fill", "white");
    }, []); // Run only once on component mount

    return (
        <div style={{ display: "flex", justifyContent: "center" }}>
            {/* Container for the first bar plot */}
            <div id="bar-chart-1" style={{ marginRight: "100px", textAlign: "left" }}></div>

            {/* Container for the second bar plot */}
            <div id="bar-chart-2" style={{ marginLeft: "10px", textAlign: "right" }}></div>
        </div>
    );
    
}

export default Leaderboard;
