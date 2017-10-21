import React, { Component } from 'react';

import './css/Intro.css';

class Intro extends Component {
    render() {
        return (
            <div id="news" className="container-fluid culture map-box">
              <div className="row culutre-box news-box slideanim">
                <div className="col-sm-5 ">
                  <img className="lazyload map" data-src={'http://yunyanjin.oss-cn-hangzhou.aliyuncs.com/map.png'} alt="map"/>
                </div>
                <div className="col-sm-7">
                <h3 className="sector-title text-center">盐津简介</h3>
                <p className="unify-main-page">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;云南省盐津县，位于云南省东北部，昭通市下辖县，对口帮扶的国家级贫困县。盐津属典型的山区县，优越的地理气候条件，造就了盐津良好的生态环境。盐津自古是入滇的要冲，素有“咽喉西蜀、锁钥南滇”之称，地处乌蒙山脉关河深谷的中段，位于四川和云南结合之处，也是古丝绸之路入滇的第一站。全县有着丰富的自然资源、独特的区位优势、厚重的人文情怀，更有着乌骨鸡、天麻、竹笋、腊肉、白酒等品种多样、品质优良、健康生态的众多农特产品。</p>
              </div>
              </div>
          </div>
        )
    }
}

export default Intro;