import React from 'react';
import Slider from 'react-slick';

const styles = {
  Card: {
    position: 'relative',
    width: '90px',
    height: '90px',
    borderRadius: '100000px',
    display: 'flex',
    alignItems: 'center',
    marginTop: '20px',
    marginLeft: '20px',
  },
  ImageContainer: {
    width: '90px',
    height: '90px',
    borderRadius: '100000px',
    overflow: 'hidden',
  },
  Image: {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
  },
  Subtitle: {
    width: '133px',
    marginTop: '5px',
    textAlign: 'center',
    color: '#7f7f7f',
    fontSize: '14px',
    fontWeight: '500',
    lineHeight: '17px',
  },
};

const CarouselCardSquare = ({ data }) => {
  const settings = {
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    speed: 500,
    centerMode: true,
    centerPadding: '0',
    arrows: false,
    responsive: [
      {
        breakpoint: 768, // ajuste para dispositivos menores, como celulares
        settings: {
          slidesToShow: 3,
        },
      },
    ],
  };

  return (
    <Slider {...settings}>
      {data.map((item, index) => (
        <div key={index}>
          <div style={styles.Card}>
            <div style={styles.ImageContainer}>
              <img src={item.imageSrc} alt="Imagem" style={styles.Image} />
            </div>
          </div>
          <div style={styles.Subtitle}>{item.subtitle}</div>
        </div>
      ))}
    </Slider>
  );
};

export default CarouselCardSquare;
