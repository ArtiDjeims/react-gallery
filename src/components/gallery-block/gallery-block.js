import React from 'react';

import './gallery-block.css';

const GalleryBlock = (props) => {

    const { selectImage, onCloudError, searchTerms } = props;

    const showPicture = (img) => {
        selectImage(img);
    }

    const pictureSrc = `https://source.unsplash.com/random?sig=${props.id}&${searchTerms}`;


    return (
        <div className="gallery_block">
            <img onClick={() => showPicture(pictureSrc)} src={pictureSrc} onError={() => onCloudError()} alt="Loading from Unsplash" />
        </div>
    )
};

export default GalleryBlock;