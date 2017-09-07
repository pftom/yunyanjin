import React from 'react';
import { Player } from 'video-react';
import './css/VideoReact.css';

export default (props) => {
  return (
    <Player
      playsInline
      poster='http://yunyanjin.oss-cn-hangzhou.aliyuncs.com/video-cover.png'
      src="https://media.w3.org/2010/05/sintel/trailer_hd.mp4"
    />
  );
};