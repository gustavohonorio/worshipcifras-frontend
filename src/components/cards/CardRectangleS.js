import React from 'react';

const styles = {
  Card: {
    position: 'relative',
    width: '165px',
    height: '52px',
    backgroundColor: '#c2c2c2',
    borderRadius: '8px',
    display: 'flex',
    alignItems: 'center',
    marginTop: '0px',
    paddingTop: '0px',
  },
  ImageContainer: {
    width: '52px',
    height: '52px',
    borderRadius: '8px',
    marginRight: '10px',
    overflow: 'hidden',
  },
  Image: {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
  },
  Text: {
    textAlign: 'center',
    color: '#424242',
    fontSize: '14px',
    fontWeight: '500',
    lineHeight: '17px',
  },
};

const CardRectangleSmall = ({ imageSrc, text }) => {
  return (
    <div style={styles.Card}>
      <div style={styles.ImageContainer}>
        <img src={imageSrc} alt="Imagem" style={styles.Image} />
      </div>
      <div style={styles.Text}>
        {text}
      </div>
    </div>
  );
};

export default CardRectangleSmall;