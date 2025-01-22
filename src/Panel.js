import React from 'react';
import './Panel.css';
import Image from "./Image";

const Panel = ({ image1, image2 }) => {
  return (
      <div className="panel-container">
        <div className="image-wrapper">
          <Image src={image1} alt="First Image"/>
        </div>
        <div className="image-wrapper">
          <Image src={image2} alt={"second Image"}/>
        </div>
      </div>
  );
};

export default Panel;
