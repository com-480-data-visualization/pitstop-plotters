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

function ImageRow() {
    const [selectedImage, setSelectedImage] = useState(null);

    const images = [
        { name: 'Clark', normal: clark, selected: clarkSelected },
        { name: 'Fagio', normal: fagio, selected: fagioSelected },
        { name: 'Schumacher', normal: sch, selected: schSelected },
        { name: 'Senna', normal: senna, selected: sennaSelected },
        { name: 'Hamilton', normal: ham, selected: hamSelected }
    ];

    const toggleSize = index => {
        setSelectedImage(selectedImage === index ? null : index);
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
