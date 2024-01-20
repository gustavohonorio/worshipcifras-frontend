import React from 'react';

const styles = {
  Tags: {
    top: '60px',
    left: '20px',
    width: '100px',
    height: '24px',
    marginLeft: '5px',
    backgroundColor: '#333',
    borderRadius: '26px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    color: '#fff',
  },
};

const Tags = (props) => {
  return (
    <div style={styles.Tags}>
      {props.children}
    </div>
  );
};

export default Tags;
