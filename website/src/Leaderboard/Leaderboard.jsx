import { useEffect } from "react";
import * as d3 from "d3";

const Leaderboard = (props) => {
    useEffect(() => {
        // Data for the first bar plot
        const data1 = [
            { name: "Item 1", value: 500 },
            { name: "Item 2", value: 400 },
            { name: "Item 3", value: 300 },
            { name: "Item 4", value: 200 },
            { name: "Item 5", value: 150 },
            // Add more data as needed
        ];

        // Data for the second bar plot
        const data2 = [
            { name: "Item A", value: 500 },
            { name: "Item B", value: 400 },
            { name: "Item C", value: 350 },
            { name: "Item D", value: 300 },
            { name: "Item E", value: 200 },
            { name: "Item F", value: 150 },
            // Add more data as needed
        ];

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
            .attr("x", 0)
            .attr("y", (d, i) => i * 30)
            .attr("width", (d) => d.value)
            .attr("height", 25)
            .attr("fill", "steelblue");

        // Render the second bar plot
        svg2.selectAll("rect")
            .data(data2)
            .enter()
            .append("rect")
            .attr("x", 0)
            .attr("y", (d, i) => i * 30)
            .attr("width", (d) => d.value)
            .attr("height", 25)
            .attr("fill", "steelblue");
    }, []); // Run only once on component mount

    return (
        <div style={{ display: "flex", justifyContent: "space-between" }}>
            {/* Container for the first bar plot */}
            <div id="bar-chart-1"></div>

            {/* Container for the second bar plot */}
            <div id="bar-chart-2"></div>
        </div>
    );
}

export default Leaderboard;
