import React from 'react';
import './Text.css';

const Text = ({ title, subtitle }) => {
  return (
      <div className="text-container">
        <p className="title">{title}</p>
        <p className="subtitle">{subtitle}</p>
      </div>
  );
};

export default Text;
