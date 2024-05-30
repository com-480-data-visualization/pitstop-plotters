import React, { useState } from 'react';
import styles from './HallOfFameSelection.module.css';

// Import images for normal and selected states
import clark from '../img/Pilotes/Clark.png';
import clarkSelected from '../img/Pilotes/Clark_s.png';
import fagio from '../img/Pilotes/Fagio.png';
import fagioSelected from '../img/Pilotes/Fagio_s.png';
import sch from '../img/Pilotes/SCH_p.png';
import schSelected from '../img/Pilotes/SCH_ps.png';
import senna from '../img/Pilotes/SENNA_p.png';
import sennaSelected from '../img/Pilotes/SENNA_ps.png';
import ham from '../img/Pilotes/HAM_p.png';
import hamSelected from '../img/Pilotes/HAM_ps.png';

function ImageRow({onDriverChange}) {
    const [selectedImage, setSelectedImage] = useState(null);

    const images = [
        { name: 'Clark', normal: clark, selected: clarkSelected },
        { name: 'Fangio', normal: fagio, selected: fagioSelected },
        { name: 'Schumacher', normal: sch, selected: schSelected },
        { name: 'Senna', normal: senna, selected: sennaSelected },
        { name: 'Hamilton', normal: ham, selected: hamSelected }
    ];

    const toggleSize = index => {
        setSelectedImage(selectedImage === index ? null : index);
        const selectedDriver = selectDriver(images[index].name);
        onDriverChange(selectedDriver);
    };

    const selectDriver = (driverName) => {
        // Placeholder: Log the driver's name to the console or trigger an action to fetch/show driver data
        console.log(`Driver selected: ${driverName}`);
        // Here you could fetch data, update state, or trigger other actions based on the selected driver
        switch (driverName) {
            case 'Fangio':
                return {
                    name: 'Juan Manuel Fangio',
                    born: 'Born the 24 June 1911 - Balcarce (Buenos Aires)',
                    died: 'Died the 17 July 1995 - 84 years - Balcarce (Buenos Aires)',
                    nation: 'Argentina',
                    website: 'http://example.com', // Placeholder for the actual website
                    firstGP: 'Britain 1950',
                    lastGP: 'France 1958',
                    bestResult: '1st',
                    bestGrid: '1st',
                    championships: [1951, 1954, 1955, 1956, 1957],
                    involvements: 53,
                    grandPrix: 51,
                    noStarts: 2,
                    resultsByGrandPrix: 'Specific data needed', // Placeholder for specific result data
                    resultsByCircuit: 'Specific data needed', // Placeholder for circuit data
                    teammates: 34,
                    seasons: 9,
                    constructors: 5,
                    engineBuilders: 6,
                    models: 9,
                    wins: 24,
                    polePositions: 29,
                    fastestLaps: 23,
                    podiums: 35,
                    hatTricks: 9,
                    grandSlams: 2,
                    retirements: 14,
                    nonWorldChampionshipInvolvements: 42,
                    totalPoints: 277.64,
                    pointsPerGP: 5.44,
                    pointsPerSeason: 34.70,
                    lapsLed: 1347,
                    kmLed: 9316,
                    lapsRaced: 3037,
                    kmRaced: 20486,
                    rankStartingGridAverage: 1.78,
                    rankFinishLineAverage: 2.25
                };
            // Extend other cases for different drivers similarly
        }
    };

    const getImageSrc = (image, index) => {
        return selectedImage === index ? image.selected : image.normal;
    };

    const getTextStyle = (index) => {
        if (selectedImage === index) {
            return {
                fontWeight: 'bold',
                fontSize: '24px',
                WebkitTextStroke: '1px #EF1A2D',
                color: '#EF1A2D',
                textAlign: 'center'
            };
        } else {
            return {
                fontSize: '16px',
                color: 'white',
                textAlign: 'center'
            };
        }
    };

    return (
        <div className={styles.imageRow}>
            {images.map((image, index) => (
                <div key={index} style={{ textAlign: 'center' }}>
                    <div style={getTextStyle(index)}>{image.name}</div>  {/* Conditional styling */}
                    <img
                        src={getImageSrc(image, index)}
                        alt={`Image ${image.name}`}
                        style={{
                            width: selectedImage === index ? '200px' : '100px',
                            height: 'auto'
                        }}
                        onClick={() => toggleSize(index)}
                    />
                </div>
            ))}
        </div>
    );
}

export default ImageRow;
