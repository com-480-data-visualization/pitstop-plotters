import React, { useState } from "react";
import { 
    ComposableMap, 
    Geographies, 
    Geography, 
    Marker, 
    ZoomableGroup,
    Annotation
} from "react-simple-maps";

const geoUrl = "https://unpkg.com/world-atlas@2.0.2/countries-110m.json";

const markers = [
    { markerOffset: -30, name: "Buenos Aires", coordinates: [-58.3816, -34.6037] },
    { markerOffset: 15, name: "La Paz", coordinates: [-68.1193, -16.4897] },
    { markerOffset: 15, name: "Brasilia", coordinates: [-47.8825, -15.7942] },
    { markerOffset: 15, name: "Santiago", coordinates: [-70.6693, -33.4489] },
    { markerOffset: 15, name: "Bogota", coordinates: [-74.0721, 4.711] },
    { markerOffset: 15, name: "Quito", coordinates: [-78.4678, -0.1807] },
    { markerOffset: -30, name: "Georgetown", coordinates: [-58.1551, 6.8013] },
    { markerOffset: -30, name: "Asuncion", coordinates: [-57.5759, -25.2637] },
    { markerOffset: 15, name: "Paramaribo", coordinates: [-55.2038, 5.852] },
    { markerOffset: 15, name: "Montevideo", coordinates: [-56.1645, -34.9011] },
    { markerOffset: 15, name: "Caracas", coordinates: [-66.9036, 10.4806] },
    { markerOffset: 15, name: "Lima", coordinates: [-77.0428, -12.0464] }
];

const CircuitMap = ({ onCircuitChange }) => {
    const [clickedCircuit, setClickedCircuit] = useState(null);
    const [clickedMarkerCoordinates, setClickMarkerCoordinates] = useState([0, 0]);

    const [hoveredCircuit, setHoveredCircuit] = useState(null);
    const [hoveredMarkerCoordinates, setHoveredMarkerCoordinates] = useState([0, 0]);

    //TODO change all circuit names to the circuit codes

    //
    // Handle mouse events
    //
    const handleClick = (name, markerCoordinates) => {
        if (clickedCircuit !== name) {
            setClickedCircuit(name);
            setClickMarkerCoordinates({ x: markerCoordinates[0], y: markerCoordinates[1]});

            // callback to provide the circuit code to the parent component
            onCircuitChange(name);
        } else {
            setClickedCircuit(null);
        }
    };

    const handleAnnotationEnter = (name, markerCoordinates) => {
        if (hoveredCircuit !== name) {
            setHoveredCircuit(name);
            setHoveredMarkerCoordinates({ x: markerCoordinates[0], y: markerCoordinates[1]});
        } else {
            setHoveredCircuit(null);
        }
    }

    const handleAnnotationLeave = () => {
        setHoveredCircuit(null);
    }

    return (
        <div style={{ width: "500px", height: "100px" }}>
            <ComposableMap>
                <ZoomableGroup center={[16.5,0]} zoom={1}>
                    {/* Display countries and continents */}
                    <Geographies geography={geoUrl}>
                        {({ geographies }) =>
                            geographies.map((geo) => (
                                <Geography
                                    key={geo.rsmKey}
                                    geography={geo}
                                    fill="#22325e"
                                    stroke="#c1c6d6"
                                />
                            ))
                        }
                    </Geographies>

                    {/* Add markers at circuit location */}
                    {markers.map(({ name, coordinates, markerOffset }) => (
                        <Marker key={name} coordinates={coordinates}>
                            <g
                                fill={clickedCircuit === name ? "#fa2d2d" : "#1dc5f5" }
                                fill-opacity="0.2"
                                stroke={clickedCircuit === name ? "#fa2d2d" : "#1dc5f5" }
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                transform="translate(-12, -24)"
                                onClick={(event) => handleClick(name, coordinates)}
                                onMouseEnter={(event) => handleAnnotationEnter(name, coordinates)}
                                onMouseLeave={(event) => handleAnnotationLeave()}
                            >
                                <circle cx="12" cy="10" r="3" />
                                <path d="M12 21.7C17.3 17 20 13 20 10a8 8 0 1 0-16 0c0 3 2.7 6.9 8 11.7z" />
                            </g>
                        </Marker>
                    ))}

                    {/* on click annotation */}
                    {clickedCircuit && (    
                        <Annotation
                            subject={[clickedMarkerCoordinates.x-2.2, clickedMarkerCoordinates.y+5.5]}
                            dx={-30}
                            dy={-10}
                            connectorProps={{
                                stroke: "#f7f7f7",
                                strokeWidth: 3,
                                strokeLinecap: "round"
                            }}
                        >
                            <g transform={"translate(-150, -20)"} style={{ pointerEvents: 'none' }}>  {/* Adjust the position as needed */}
                                <rect 
                                    x="0" 
                                    y="0" 
                                    width="150" 
                                    height="40" 
                                    fill="#fa2d2d" 
                                    rx="5" 
                                    ry="5"
                                    opacity="0.5"
                                />
                                <text 
                                    x="10"
                                    y="25" 
                                    textAnchor="start" 
                                    alignmentBaseline="middle" 
                                    fill="#f7f7f7"
                                >
                                    {clickedCircuit}
                                </text>
                            </g>
                        </Annotation> 
                    )}

                    {/* on hover annotation */}
                    {hoveredCircuit && clickedCircuit !== hoveredCircuit && (    
                        <Annotation
                            subject={[hoveredMarkerCoordinates.x, hoveredMarkerCoordinates.y]}
                            dx={0}
                            dy={0}
                            connectorProps={{
                                stroke: "white",
                                strokeWidth: 0,
                                strokeLinecap: "round"
                            }}
                        >
                            <g transform="translate(20, -10)"  style={{ pointerEvents: 'none' }}>  {/* Adjust the position as needed */}
                                <rect 
                                    x="0" 
                                    y="0" 
                                    width="150" 
                                    height="40" 
                                    fill="#1dc5f5" 
                                    rx="5" 
                                    ry="5"
                                    opacity="0.5"
                                />
                                <text 
                                    x="10"
                                    y="25" 
                                    textAnchor="left" 
                                    alignmentBaseline="middle" 
                                    fill="#f7f7f7"
                                >
                                    {hoveredCircuit}
                                </text>
                            </g>
                        </Annotation> 
                    )}
                </ZoomableGroup>
            </ComposableMap>
        </div>
    );
};

export default CircuitMap;
