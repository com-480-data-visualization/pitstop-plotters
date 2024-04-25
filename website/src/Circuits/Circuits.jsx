import { useEffect } from "react";
import * as d3 from "d3";
import * as topojson from "topojson"; // Import topojson library
import world_110m from './world-110m.json';


const Circuits = () => {
    useEffect(() => {
        if (world_110m) {
            var world = world_110m;
        } else {
            console.log("No topo data loaded!");
        }

        var countries = getCountries();

        var width = 960,
            height = 960;

        var projection = d3.geoMercator()
            .scale((width + 1) / 2 / Math.PI)
            .translate([width / 2, height / 2])
            .precision(.1);

        var path = d3.geoPath()
            .projection(projection);

        var graticule = d3.geoGraticule();

        var svg = d3.select("#globe").append("svg")
            .attr("width", width)
            .attr("height", height)
            .attr("class", "bg");

        svg.append("path")
            .datum(graticule)
            .attr("class", "graticule")
            .attr("d", path);

        svg.insert("path", ".graticule")
            .datum(topojson.feature(world, world.objects.land))
            .attr("class", "land")
            .attr("d", path);

        svg.insert("path", ".graticule")
            .datum(topojson.mesh(world, world.objects.countries, function (a, b) {
                return a !== b;
            }))
            .attr("class", "boundary")
            .attr("d", path);

        var defs = svg.append('defs'),
            filter = defs.append('filter').attr('id', 'seaShore');
        filter.append('feGaussianBlur')
            .attr('in', 'SourceGraphic')
            .attr('stdDeviation', '15')
            .attr('result', 'blur');
        filter.append('feColorMatrix')
            .attr('in', 'blur')
            .attr('mode', 'matrix')
            .attr('values', '1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 2 0')
            .attr('result', 'smooth');
        filter.append('feComponentTransfer')
            .attr('in', 'smooth')
            .attr('result', 'smoothAlpha')
            .append('feFuncA')
            .attr('type', 'linear')
            .attr('slope', '0.5');
        filter.append('feComposite')
            .attr('in', 'SourceGraphic')
            .attr('in2', 'smoothAlpha')
            .attr('operator', 'over');

        var features = countries.features;

        for (var j = 0; j < features.length; j++) {
            if (features[j].geometry.properties.value > 0) {
                var x = projection(features[j].geometry.coordinates)[0],
                    y = projection(features[j].geometry.coordinates)[1];

                var marker = svg.append("svg:path")
                    .attr("class", "marker")
                    .attr("d", "M0,0l-8.8-17.7C-12.1-24.3-7.4-32,0-32h0c7.4,0,12.1,7.7,8.8,14.3L0,0z")
                    .attr("transform", "translate(" + x + "," + y + ") scale(0)")
                    .transition()
                    .delay(400)
                    .duration(800)
                    .ease(d3.easeElastic)
                    .attr("transform", "translate(" + x + "," + y + ") scale(.75)");

                var cc = features[j].geometry.properties.countryCode;

                svg.append("svg:text")
                    .attr("x", x)
                    .attr("y", y)
                    .attr("dx", ".5em")
                    .attr("dy", ".35em")
                    .text(cc)
                    .attr("class", "cc");
            }
        }
    }, []);

    function getCountries() {
        return {
            "type": "FeatureCollection",
            "features": [
                // Your country features here
            ]
        }
    }

    return (
        <div id="globe"></div>
    );
};

export default Circuits;