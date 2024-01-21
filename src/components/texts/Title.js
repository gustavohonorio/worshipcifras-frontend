import React from 'react';

const styles = {
  Title: {
    color: '#ffffff',
    fontSize: '24px',
    fontWeight: '500',
    lineHeight: '22px',
  },
  Div: {
    marginTop: '30px',
    marginLeft: '15px',
  },
};

const TitlePlus  = ({ Title }) => {
  return (
    <div style={styles.Div}>
        <div style={styles.Title}>
          {Title}
        </div>
    </div>
  );
};

export default TitlePlus;