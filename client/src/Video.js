import React, { Component } from 'react';

import 'react-html5video/dist/styles.css';
import './css/Video.css';

import ModalVideo from './ModalVideo';

class VideoPlayer extends Component {
    render() {
        const path = 'http://yunyanjin.oss-cn-hangzhou.aliyuncs.com/%E4%BA%91%E6%A2%A6%E7%9B%90%E6%B4%A5%E8%B0%83%E7%A0%94%E5%AE%A3%E4%BC%A0%E8%A7%86%E9%A2%91.mp4';
        return (
            <ModalVideo  isOpen={this.props.videoModalVisible} videoId="L61p2uyiMSo"/>
        )
    }
}

export default VideoPlayer;