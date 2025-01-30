import React, { useState, useEffect } from 'react';
import './Image.css';

const Image = ({ src, alt }) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
        const queryParams = new URLSearchParams({ api_key: 'DEMO_KEY'});

        try {
            const response = await fetch(`https://api.nasa.gov/planetary/apod?${queryParams}`);
            if (!response.ok) {
                throw new Error('Network Error');
            }
            const result = await response.json();
            setData(result);
            console.log(result.url);
        } catch (error) {
            setError(error);
        } finally {
            setLoading(false);
        }
    };

    fetchData();
  }, []);

  useEffect(() => { if(data != null) {console.log('data: ', data)} }, [data]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
      <div className="image_container">
        <img src={src} alt={alt} className="responsive_image" />
      </div>
  );
};

export default Image;
