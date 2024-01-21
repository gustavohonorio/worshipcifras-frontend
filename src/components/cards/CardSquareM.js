import React from 'react';

const styles = {
  Card: {
    position: 'relative',
    width: '133px',
    height: '133px',
    borderRadius: '8px',
    display: 'flex',
    alignItems: 'center',
    marginTop: '20px',
    marginLeft: '15px',
  },
  ImageContainer: {
    width: '133px',
    height: '133px',
    borderRadius: '8px',
    overflow: 'hidden',
  },
  Image: {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
  },
  Subtitle: {
    width: '133px',
    marginLeft: '15px',
    marginTop: '5px',
    textAlign: 'center',
    color: '#7f7f7f',
    fontSize: '14px',
    fontWeight: '500',
    lineHeight: '17px',
  },
};

const CardSquareM = ({ imageSrc, subtitle }) => {
  return (
    <>
        <div style={styles.Card}>
          <div style={styles.ImageContainer}>
            <img src={imageSrc} alt="Imagem" style={styles.Image} />
          </div>
        </div>
        <div style={styles.Subtitle}>
          {subtitle}
        </div>
    </>
  );
};

export default CardSquareM;