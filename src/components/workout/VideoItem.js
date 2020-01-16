import React from 'react';

const VideoItem = ({ video, onVideoSelect }) => {
  return (
    <div className="video-detail-item">
      <div onClick={() => onVideoSelect(video)} className="video-item item">
        <img alt={video.snippet.title} className="ui image" src={video.snippet.thumbnails.medium.url} />
        <div className="content">
          <div className="header">{video.snippet.title}</div>
        </div>
      </div>
      <div class="ui fitted divider"></div>
    </div>

  );
};

export default VideoItem;
