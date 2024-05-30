import React, { useState, useEffect } from "react";
import { 
    ComposableMap, 
    Geographies, 
    Geography, 
    Marker, 
    ZoomableGroup,
    Annotation,
    useZoomPanContext
} from "react-simple-maps";
import styles from "./CircuitsMap.module.css";
import geoUrl from "../world-110m.json";
import mapMarkers from "../map_info.json";


const CircuitMap = ({ onCircuitChange, containerWidth, containerHeight }) => {
    const zoomIn = 4;
    const [markers, setMarkers] = useState([]);
    const [zoom, setZoom] = useState(1); // manage map zoom level
    const [center, setCenter] = useState([0, 25]); // manage map center
    const [zoomScale, setZoomScale] = useState(1); // manage zoom scale

    const [clickedCircuit, setClickedCircuit] = useState(null);
    const [clickedMarkerCoordinates, setClickMarkerCoordinates] = useState([0, 0]);

    const [hoveredCircuit, setHoveredCircuit] = useState(null);
    const [hoveredMarkerCoordinates, setHoveredMarkerCoordinates] = useState([0, 0]);

    // load markers from JSON file
    useEffect(() => {
        const fetchMarkers = async () => {
            try {
                // get the corresponding markers information
                // for all marker, add the coordinates to the markers state as lng, lat
                const updatedMarkers = mapMarkers.map(marker => ({
                    ...marker,
                    coordinates: [marker.lng, marker.lat]
                }));

                setMarkers(updatedMarkers);
            } catch (error) {
                console.error('Error loading markers:', error);
            }
        };
        
        fetchMarkers();
    }, []);

    const handleMarkerClick = (marker) => {
        if (clickedCircuit !== marker.name) {
            setClickedCircuit(marker.name);
            setClickMarkerCoordinates({ x: marker.coordinates[0], y: marker.coordinates[1]});

            // zoom on the marker
            setCenter(marker.coordinates);
            setZoom(zoomIn);
            setZoomScale(1/zoom);

            // callback to provide the circuit code to the parent component
            onCircuitChange(marker);
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

    const getScale = () => {
        return zoomScale;
    };
    
    const ZoomObserver = () => {
        const ctx = useZoomPanContext()      

        // ctx.x
        // ctx.y
        // ctx.k
        // ctx.transformString
        setZoomScale(1/ctx.k);
      
        return null;
      }

    return (
        // <div className={styles.mapContainer} style={{ width: containerWidth-50, height:containerHeight-50}}>
        // <div className={styles.mapContainer} style={{ width:containerWidth-50}}>
            <ComposableMap
                style={{
                    height: containerHeight*2/3,
                    width: containerWidth,
                    marginTop: "5px",
                    border: "1px solid #f0f0f0",
                }}
                projectionConfig={{
                    scale: 400,
                    center: center
                  }}
                className={styles.map}
                scale={10}
                // width={containerWidth/3}
                // height={containerHeight*1/2}
                >
                <ZoomableGroup 
                    center={center} 
                    zoom={zoom} >
                    <ZoomObserver />

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
                    {markers.map((marker) => (
                        <Marker key={marker.name} coordinates={marker.coordinates}>
                            <g
                                fill={clickedCircuit === marker.name ? "#fa2d2d" : "#1dc5f5"}
                                fillOpacity="0.2"
                                stroke={clickedCircuit === marker.name ? "#fa2d2d" : "#1dc5f5"}
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                transform={`translate(${-12*getScale()}, ${-24*getScale()}) scale(${getScale()})`}
                                onClick={(event) => handleMarkerClick(marker)}
                                onMouseEnter={(event) => handleAnnotationEnter(marker.name, marker.coordinates)}
                                onMouseLeave={(event) => handleAnnotationLeave()}
                            >
                                <circle cx="12" cy="10" r="3"/>
                                <path d="M12 21.7C17.3 17 20 13 20 10a8 8 0 1 0-16 0c0 3 2.7 6.9 8 11.7z" />
                            </g>
                        </Marker>
                    ))}

                    {/* on click annotation */}
                    {clickedCircuit && (    
                        <Annotation
                        subject={[clickedMarkerCoordinates.x, clickedMarkerCoordinates.y]}
                        dx={0}
                        dy={0}
                        connectorProps={{
                            stroke: "white",
                            strokeWidth: 0,
                            strokeLinecap: "round"
                        }}
                    >
                        <g transform={`scale(${getScale()})`} style={{ pointerEvents: 'none' }}>  
                            <rect 
                                x="0" 
                                y="0" 
                                width="200" 
                                height="40" 
                                fill="#fa2d2d"
                                rx="5" 
                                ry="5"
                                opacity="0.7"
                            />
                            <text 
                                x="10"
                                y="25" 
                                textAnchor="left" 
                                alignmentBaseline="middle" 
                                style={{ fill: "#f7f7f7" }} 
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
                            <g transform={`scale(${getScale()})`} style={{ pointerEvents: 'none' }}>  
                                <rect 
                                    x="0" 
                                    y="0" 
                                    width="200" 
                                    height="40" 
                                    fill="#1dc5f5"
                                    rx="5" 
                                    ry="5"
                                    opacity="0.7"
                                />
                                <text 
                                    x="10"
                                    y="25" 
                                    textAnchor="left" 
                                    alignmentBaseline="middle" 
                                    style={{ fill: "#f7f7f7" }} 
                                >
                                    {hoveredCircuit}
                                </text>
                            </g>
                        </Annotation> 
                    )}
                </ZoomableGroup>
            </ComposableMap>
        //</div>
    );
};

export default CircuitMap;
