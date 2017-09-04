import React, { Component } from 'react';

import 'react-html5video/dist/styles.css';
import './css/Video.css';

import ModalVideo from './ModalVideo';

class VideoPlayer extends Component {
    render() {
        return (
            <ModalVideo  
                isOpen={this.props.videoModalVisible} 
                videoId="L61p2uyiMSo"
                channel="youtube"
                onClose={() => this.props.handleCancel('videoModalVisible')}
            />
        )
    }
}

export default VideoPlayer;