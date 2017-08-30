import React, { Component } from 'react';

import { DefaultPlayer as Video } from 'react-html5video';
import 'react-html5video/dist/styles.css';
import './css/Video.css';

class VideoPlayer extends Component {
    render() {
        const path = 'http://yunyanjin.oss-cn-hangzhou.aliyuncs.com/%E4%BA%91%E6%A2%A6%E7%9B%90%E6%B4%A5%E8%B0%83%E7%A0%94%E5%AE%A3%E4%BC%A0%E8%A7%86%E9%A2%91.mp4';
        return (
            <Video
                controls={['PlayPause', 'Seek', 'Time', 'Volume', 'Fullscreen']}
                poster="http://sourceposter.jpg"
                className="video-box"
            >
                <source src={path} type="video/mp4"  />
            </Video>
        )
    }
}

export default VideoPlayer;