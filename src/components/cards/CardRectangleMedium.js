import React from 'react';

const styles = {
  Card: {
    position: 'relative',
    width: '340px',
    height: '130px',
    backgroundColor: '#c2c2c2',
    borderRadius: '10px',
    display: 'flex',
    alignItems: 'center',
  },
  ImageContainer: {
    width: '133px',
    height: '133px',
    borderRadius: '8px',
    marginRight: '10px',
    overflow: 'hidden',
  },
  Image: {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
  },
  Title: {
    textAlign: 'left',
    color: '#030303',
    fontSize: '14px',
    fontWeight: '500',
    lineHeight: '17px',
    marginTop: '-25%',
  },
  Subtitle: {
    textAlign: 'left',
    color: '#7f7f7f',
    fontSize: '14px',
    fontWeight: '500',
    lineHeight: '17px',
    marginTop: '3%',
  },
};

const CardRectangleSmall = ({ imageSrc, title, subtitle }) => {
  return (
    <div style={styles.Card}>
      <div style={styles.ImageContainer}>
        <img src={imageSrc} alt="Imagem" style={styles.Image} />
      </div>
      <div>
        <div style={styles.Title}>
          {title}
        </div>
        <div style={styles.Subtitle}>
          {subtitle}
        </div>
      </div>

    </div>
  );
};

export default CardRectangleSmall;