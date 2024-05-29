import React, { useState } from 'react';
import styles from './HallOfFameSelection.module.css';
import image1 from '../img/Pilotes/Clark.png';
import image2 from '../img/Pilotes/Fagio.png';
import image3 from '../img/Pilotes/SENNA_s.png';
import image4 from '../img/Pilotes/SCH.png';
import image5 from '../img/Pilotes/HAM.png';

function ImageRow() {
    const [selectedImage, setSelectedImage] = useState(null);

    const images = [image1, image2, image3, image4, image5];

    const toggleSize = index => {
        setSelectedImage(selectedImage === index ? null : index);
    };

    return (
        <div className={styles.imageRow}>
            {images.map((image, index) => (
                <img
                    key={index}
                    src={image}
                    alt={`Image ${index}`}
                    style={{
                        width: selectedImage === index ? '200px' : '100px',
                        height: 'auto'
                    }}
                    onClick={() => toggleSize(index)}
                />
            ))}
        </div>
    );
}

export default ImageRow;