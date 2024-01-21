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

const defaultProps = {
  Title: 'Bethel Music',
  SubTitle: 'Novo lançamento de'
};

const TitlePlus = (props) => {
  return (
    <div>
        <div style={styles.Subtitle}>
          {props.text ?? defaultProps.SubTitle}
        </div>
        <div style={styles.Title}>
          {props.text ?? defaultProps.Title}
        </div>
    </div>
  );
};

export default TitlePlus;