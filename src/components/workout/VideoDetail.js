import React from 'react';
import Spinner from "../Spinner";

const VideoDetail = ({ video }) => {
  if (!video) {
    return (
      // <div className="ui active inverted dimmer">
      <div >Loading...</div>
      //  </div>
    );
  };

  const videoSrc = `https://www.youtube.com/embed/${video.id.videoId}`;

  return (
    <div className="video-detail">
      <div className="ui embed">
        <iframe title="video player" src={videoSrc} />
      </div>
      <div className="ui segment video-description">
        <h4 className="ui header">{video.snippet.title}</h4>
        <p>{video.snippet.description}</p>
      </div>
    </div>
  );
};

export default VideoDetail;
