import React from 'react';

const styles = {
    Screen: {
      backgroundColor: '#030303',
    },
  };
  
  const Screen = (props) => {
    return (
      <div style={styles.Screen}>
        {props.children}
      </div>
    );
  };
  
  export default Screen;