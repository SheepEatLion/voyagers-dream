import React from 'react';
import './Image.css';

const Image = ({ src, alt }) => {
  return (
      <div className="image_container">
        <img src={src} alt={alt} className="responsive_image" />
      </div>
  );
};

export default Image;
