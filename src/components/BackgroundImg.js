// BackgroundImg function component
import React from 'react';

function BackgroundImg(props) {
    return (
        <ul id="slider" style={{ zIndex: -1, position: 'absolute', listStyle: 'none', width: '100%', height: '100%', padding: 0, margin: 0 }} className="hde">
            <li><img className="lazyload" data-src="http://yunyanjin.oss-cn-hangzhou.aliyuncs.com/slippry/s1.jpg"/></li>
            <li><img className="lazyload" data-src="http://yunyanjin.oss-cn-hangzhou.aliyuncs.com/slippry/s2.jpg"/></li>
            <li><img className="lazyload" data-src="http://yunyanjin.oss-cn-hangzhou.aliyuncs.com/slippry/s3.jpg"/></li>
        </ul>
    );
}

export default BackgroundImg;