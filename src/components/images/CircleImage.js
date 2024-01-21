import React from 'react';

const styles = {
  ImageContainer: {
    top: '244px',
    left: '19px',
    width: '39px',
    height: '41px',
    borderRadius: '100000px',
    backgroundPosition: 'center center',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
  },
};

const CircleImage = ({ imageSrc }) => {
  
  return (
    <div style={{
      ...styles.ImageContainer,
      backgroundImage: `url(${imageSrc})`,
    }} />
  );
};

export default CircleImage;
