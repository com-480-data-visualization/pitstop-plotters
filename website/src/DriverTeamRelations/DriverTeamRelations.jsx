import * as d3 from "d3";
import { useEffect } from "react";

const DriverTeamRelations = (props) => {
    useEffect(() => {
        const width = 500; // example width
        const height = 300; // example height

        // remove the svg if it already exists
        d3.select("#driverteamrelation").select("svg").remove();

        const svg = d3.select("#driverteamrelation")
            .append("svg")
            .attr("width", width)
            .attr("height", height);

        // Custom color scale or an alternative predefined color scheme
        const color = d3.scaleOrdinal(d3.schemeCategory10);

        const simulation = d3.forceSimulation()
            .force("link", d3.forceLink().id(function(d) { return d.id; }))
            .force("charge", d3.forceManyBody())
            .force("center", d3.forceCenter(width / 2, height / 2));

        const graph = generateLargeGraph(); // Generate the graph outside useEffect

        var link = svg.append("g")
            .attr("class", "links")
            .selectAll("line")
            .data(graph.links)
            .enter().append("line")
            .attr("stroke", "white") // Set relation lines to white
            .attr("stroke-width", function(d) { return Math.sqrt(d.value); });

        var node = svg.append("g")
            .attr("class", "nodes")
            .selectAll("circle")
            .data(graph.nodes)
            .enter().append("circle")
            .attr("r", 5)
            .attr("fill", function(d, i) { return color(i); }) // Assigning color based on index
            .call(d3.drag()
                .on("start", function(event, d) { dragstarted(event, d); })
                .on("drag", function(event, d) { dragged(event, d); })
                .on("end", function(event, d) { dragended(event, d); }));

        node.append("title")
            .text(function(d) { return d.id; });

        simulation
            .nodes(graph.nodes)
            .on("tick", ticked);

        simulation.force("link")
            .links(graph.links);

        function dragstarted(event, d) {
            if (!event.active) simulation.alphaTarget(0.3).restart();
            node.each(function(d){
                d.fx = d.x;
                d.fy = d.y;
            });
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

        function ticked() {
            link
                .attr("x1", function(d) { return d.source.x; })
                .attr("y1", function(d) { return d.source.y; })
                .attr("x2", function(d) { return d.target.x; })
                .attr("y2", function(d) { return d.target.y; });

            node
                .attr("cx", function(d) { return d.x; })
                .attr("cy", function(d) { return d.y; });
        }
    }, []); // empty dependency array to execute useEffect only once

    return (
        <div id="driverteamrelation" style={{display:"flex",justifyContent:"center"}}>
            <div className="svg"> </div>
        </div>
    );
}

function generateLargeGraph() {
    const initialData = {
        "nodes": [
            {"id": "A"},
            {"id": "B"},
            {"id": "C"}
        ],
        "links": [
            {"source": "A", "target": "B", "value": 1},
            {"source": "B", "target": "C", "value": 2},
            {"source": "C", "target": "A", "value": 3}
        ]
    };

    const nodes = [];
    const links = [];

    // Create initial nodes and links
    initialData.nodes.forEach(node => nodes.push({ id: node.id }));
    initialData.links.forEach(link => links.push({ source: link.source, target: link.target }));

    // Add additional nodes and links
    for (let i = 0; i < 20 - 3; i++) {
        const newNodeId = String.fromCharCode(65 + i); // Generating node id starting from 'D'
        nodes.push({ id: newNodeId });
        links.push({ source: newNodeId, target: String.fromCharCode(65 + (i + 1) % (20 - 3)) }); // Connect to the next node in a ring-like structure
    }

    return { nodes, links };
}

export default DriverTeamRelations;
