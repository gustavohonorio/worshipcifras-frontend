import React from 'react';
import Logo from '../../images/logo/logo.png';

const styles = {
  Image: {
    marginLeft: '15px',
  },
};

const defaultProps = {
  // Text for acessibility
  alt: 'Worship Cifras Logo',
};

const LogoNavbar = (props) => {
  return (
    <div style={styles.Image}>
      <img
        alt={props.alt ?? defaultProps.alt}
        src={Logo}
      />
    </div>
  );
};

export default LogoNavbar;
