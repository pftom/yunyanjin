import React, { Component } from 'react';

import './css/Video.css';

import ModalVideo from './ModalVideo';

class Video extends Component {
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

export default Video;