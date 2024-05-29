import React, { useState } from "react";
import { 
    ComposableMap, 
    Geographies, 
    Geography, 
    Marker, 
    ZoomableGroup,
    Annotation } from "react-simple-maps";
import CircuitInfo from '../CircuitInfo/CircuitInfo'; // Adjust the import path as necessary
import style from "./Circuits.module.css";

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

const Circuits = () => {
    const [clickedCircuit, setClickedCircuit] = useState(null);
    const [clickPosition, setClickPosition] = useState({ x: 0, y: 0 });
    const [clickedMarkerCoordinates, setClickMarkerCoordinates] = useState([0, 0]);

    const handleClick = (name, event, markerCoordinates) => {
        if (clickedCircuit !== name) {
            setClickedCircuit(name);
            setClickPosition({ x: event.clientX, y: event.clientY });
            setClickMarkerCoordinates({ x: markerCoordinates[0], y: markerCoordinates[1]});
        } else {
            setClickedCircuit(null);
        }
    };

    return (
        <div class={ style.mapcontainer }>
            <div class={ style.mapdisplay }>
                <ComposableMap>
                    <ZoomableGroup center={[0, 0]} zoom={10}>
                        <Geographies geography={geoUrl}>
                            {({ geographies }) =>
                                geographies.map((geo) => (
                                    <Geography
                                        key={geo.rsmKey}
                                        geography={geo}
                                        fill="#555"
                                        stroke="violet"
                                    />
                                ))
                            }
                        </Geographies>
                        {markers.map(({ name, coordinates, markerOffset }) => (
                            <Marker key={name} coordinates={coordinates}>
                                <g
                                    fill="none"
                                    stroke="#3683ff"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    transform="translate(-12, -24)"
                                    onClick={(event) => handleClick(name, event, coordinates)}
                                >
                                    <circle cx="12" cy="10" r="3" />
                                    <path fill="red" d="M12 21.7C17.3 17 20 13 20 10a8 8 0 1 0-16 0c0 3 2.7 6.9 8 11.7z" />
                                </g>
                            </Marker>
                        ))}

                        {clickedCircuit && (    
                        <Annotation
                            subject={[clickedMarkerCoordinates.x-1.5, clickedMarkerCoordinates.y+5]}
                            dx={-90}
                            dy={-30}
                            connectorProps={{
                            stroke: "#3683ff",
                            strokeWidth: 3,
                            strokeLinecap: "round"
                            }}
                        >
                            <text x="-8" textAnchor="end" alignmentBaseline="middle" fill="#3683ff">
                            {clickedCircuit}
                            </text>
                        </Annotation>
                    )}
                    </ZoomableGroup>
                    
                </ComposableMap>
            </div>
            
            <div class={ style.circuitinfo }>
                <CircuitInfo
                    circuitCode="todo set me"
                    title={ clickedCircuit ? clickedCircuit : "Select a Circuit" }
                />
            </div>
        </div>
    );
};

export default Circuits;
