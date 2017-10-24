import React from 'react';

import './css/Video.css';

import ModalVideo from './ModalVideo';

function Video (props) {
    return (
        <ModalVideo  
            isOpen={props.videoModalVisible} 
            videoId="L61p2uyiMSo"
            channel="youtube"
            onClose={() => props.handleCancel('videoModalVisible')}
        />
    );
}

export default Video;