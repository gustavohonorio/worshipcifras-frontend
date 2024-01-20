import React from 'react';

const styles = {
  Card: {
    position: 'relative',
    top: '105px',
    left: '20px',
    width: '165px',
    height: '52px',
    backgroundColor: '#c2c2c2',
    borderRadius: '8px',
    display: 'flex',
    alignItems: 'center',
  },
  Image: {
    width: '52px',
    height: '52px',
    borderRadius: '8px',
    marginRight: '10px',
  },
  Text: {
    textAlign: 'center',
    color: '#333',
  },
};

const CardRectangleSmall = ({ imageSrc, text }) => {
  return (
    <div style={styles.Card}>
      <div style={styles.Image}>
        <img src={imageSrc} alt="Imagem" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
      </div>
      <div style={styles.Text}>
        {text}
      </div>
    </div>
  );
};

export default CardRectangleSmall;
