import React from 'react';
import YouTube from 'react-youtube';

const YoutubePlayer = ({ videoId }) => {
  const opts = {
    width: '100%',
    height: '100%',
    playerVars: {
      autoplay: 0,
    },
  };

  return (
    <div style={{ marginTop: '20px', marginLeft: '18px', borderRadius: '16px', overflow: 'hidden', width: '90%', height: '90%', boxSizing: 'border-box' }}>
      <YouTube videoId={videoId} opts={opts} />
    </div>
  );
};

export default YoutubePlayer;
