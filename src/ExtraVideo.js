import React from 'react';
import { Player } from 'video-react';
import './css/VideoReact.css';

export default (props) => {
  return (
    <Player
      playsInline
      poster='http://yunyanjin.oss-cn-hangzhou.aliyuncs.com/video-cover.png'
      src="http://yunyanjin.oss-cn-hangzhou.aliyuncs.com/%E4%BA%91%E6%A2%A6%E7%9B%90%E6%B4%A5%E8%B0%83%E7%A0%94%E5%AE%A3%E4%BC%A0%E8%A7%86%E9%A2%91.mp4"
    />
  );
};