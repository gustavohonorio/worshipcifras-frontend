import React from 'react';

const styles = {
  Title: {
    color: '#ffffff',
    fontSize: '24px',
    fontWeight: '500',
    lineHeight: '28px',
  },
  Subtitle: {
    color: '#7f7f7f',
    fontSize: '14px',
    lineHeight: '16px',
  },
};

const TitlePlus  = ({Title, Subtitle }) => {
  return (
    <div>
        <div style={styles.Subtitle}>
          {Subtitle}
        </div>
        <div style={styles.Title}>
          {Title}
        </div>
    </div>
  );
};

export default TitlePlus;