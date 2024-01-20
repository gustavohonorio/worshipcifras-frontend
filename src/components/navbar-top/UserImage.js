import React from 'react';

const styles = {
  ImageContainer: {
    top: '14px',
    left: '28px',
    width: '35px',
    height: '35px',
    borderRadius: '100000px',
    backgroundImage: 'url(./image.jpeg)',
    backgroundPosition: 'center center',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
  },
};

const defaultProps = {
  image: 'https://images.unsplash.com/photo-1552058544-f2b08422138a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wyMDUzMDJ8MHwxfHNlYXJjaHw1fHxwZXJzb258ZW58MXx8fHwxNzA1NjY2NDYzfDA&ixlib=rb-4.0.3&q=80&w=1080',
}

const UserImage = (props) => {
  return (
    <div style={{
      ...styles.ImageContainer,
      backgroundImage: `url(${props.image ?? defaultProps.image})`,
    }} />
  );
};

export default UserImage;