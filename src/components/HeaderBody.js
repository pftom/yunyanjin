import React from 'react';

import './css/HeaderBody.css'

function HeaderBody(props) {
    return (
        <div className="header-body" id="topNav" style={{ height: '100vh', zIndex: 3 }}>
            <h1 className="project-title" style={{fontFamily: "LiDeBiao-Xing3cdd3233821a390"}}>云梦盐津</h1>
            <p className="project-desc" style={{fontFamily: "hdjxingshud674713d61a390"}}>田园之上的公益项目</p>
            <a href="#about" className="mouse-box">
            <div className="mouse">
                <div className="wheel"></div>
            </div>
            <div>
                <span className="unu"></span>
                <span className="doi"></span>
                </div>
            </a>
        </div>
    );
}

export default HeaderBody;