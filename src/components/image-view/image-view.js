import React from 'react';

import './image-view.css';

const ImageView = (props) => {

    const { selectImage, selectedImage } = props;

    const hideImageView = () => {
        selectImage(null);
    }

    const imageViewStyle = {
        transform: selectedImage !== null ? 'translateX(0)' : 'translateX(100%)'
    }

    return (
        <div style={imageViewStyle} className="image_view">
            <p onClick={hideImageView}>Hide ></p>
            <img src={selectedImage} onError={(e) => { e.target.onerror = null; e.target.src = "https://images.unsplash.com/photo-1578328819058-b69f3a3b0f6b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=967&q=80" }} alt="Loading from Unsplash" />
            <p>Picture source is unsplash.com</p>
        </div>
    )
};

export default ImageView;