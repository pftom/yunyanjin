import React from 'react'
import ReactDOM from 'react-dom'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'

export default class ModalVideo extends React.Component {

  constructor () {
    super()
    this.state = {
      isOpen: false
    }
    this.closeModal = this.closeModal.bind(this)
    this.updateFocus = this.updateFocus.bind(this)
  }

  openModal () {
    this.setState({isOpen: true})
  }

  closeModal () {
    this.setState({isOpen: false})
    if (typeof this.props.onClose === 'function') {
      this.props.onClose();
    }
  }

  componentWillReceiveProps (nextProps) {
    this.setState({isOpen: nextProps.isOpen})
  }

  componentDidUpdate () {
    if (this.state.isOpen) {
      const modal = ReactDOM.findDOMNode(this.refs.modal)
      modal.focus()
    }
  }

  updateFocus (e) {
    const modal = ReactDOM.findDOMNode(this.refs.modal)
    const modalbtn = ReactDOM.findDOMNode(this.refs.modalbtn)
    if (e.keyCode === 9) {
      e.preventDefault()
      e.stopPropagation()
      if (modal === document.activeElement) {
        modalbtn.focus()
      } else {
        modal.focus()
      }
    }
  }

  getQueryString (obj) {
    let url = ''
    for (var key in obj) {
      if (obj.hasOwnProperty(key)) {
        if (obj[key] !== null) {
          url += key + '=' + obj[key] + '&'
        }
      }
    }
    return url.substr(0, url.length - 1)
  }

  getYoutubeUrl (youtube, videoId) {
    return 'http://yunyanjin.oss-cn-hangzhou.aliyuncs.com/%E4%BA%91%E6%A2%A6%E7%9B%90%E6%B4%A5%E8%B0%83%E7%A0%94%E5%AE%A3%E4%BC%A0%E8%A7%86%E9%A2%91.mp4';
  }

  getVimeoUrl (vimeo, videoId) {
    const query = this.getQueryString(vimeo)
    return '//player.vimeo.com/video/' + videoId + '?' + query
  }

  getVideoUrl (opt, videoId) {
    if (opt.channel === 'youtube') {
      return this.getYoutubeUrl(opt.youtube, videoId)
    } else if (opt.channel === 'vimeo') {
      return this.getVimeoUrl(opt.vimeo, videoId)
    }
  }

  getPadding (ratio) {
    const arr = ratio.split(':')
    const width = Number(arr[0])
    const height = Number(arr[1])
    const padding = height * 100 / width
    return padding + '%'
  }

  render () {
    const style = {
      paddingBottom: this.getPadding(this.props.ratio)
    }

    return (
      <ReactCSSTransitionGroup
        transitionName={this.props.classNames.modalVideoEffect}
        transitionEnterTimeout={this.props.animationSpeed}
        transitionLeaveTimeout={this.props.animationSpeed}
       >
        {(() => {
          if (this.state.isOpen) {
            return (
              <div className={this.props.classNames.modalVideo} tabIndex='-1' role='dialog'
                aria-label={this.props.aria.openMessage} onClick={this.closeModal} ref='modal' onKeyDown={this.updateFocus}>
                <div className={this.props.classNames.modalVideoBody}>
                  <div className={this.props.classNames.modalVideoInner}>
                    <div className={this.props.classNames.modalVideoIframeWrap} style={style}>
                      <button className={this.props.classNames.modalVideoCloseBtn} aria-label={this.props.aria.dismissBtnMessage} ref='modalbtn' onKeyDown={this.updateFocus} />
                      <div width="100%" height="100%">
                        <video controls autoPlay width="100%" height="100%" preload src="http://yunyanjin.oss-cn-hangzhou.aliyuncs.com/%E4%BA%91%E6%A2%A6%E7%9B%90%E6%B4%A5%E8%B0%83%E7%A0%94%E5%AE%A3%E4%BC%A0%E8%A7%86%E9%A2%91.mp4"></video>
                      </div>
                    </div>
                  </div>
                </div>
              </div>)
          }
        })()}
      </ReactCSSTransitionGroup>
    )
  }
}

ModalVideo.defaultProps = {
  channel: 'youtube',
  isOpen: false,
  youtube: {
    autoplay: 1,
    cc_load_policy: 1,
    color: null,
    controls: 1,
    disablekb: 0,
    enablejsapi: 0,
    end: null,
    fs: 1,
    h1: null,
    iv_load_policy: 1,
    list: null,
    listType: null,
    loop: 0,
    modestbranding: null,
    origin: null,
    playlist: null,
    playsinline: null,
    rel: 0,
    showinfo: 1,
    start: 0,
    wmode: 'transparent',
    theme: 'dark'
  },
  ratio: '16:9',
  vimeo: {
    api: false,
    autopause: true,
    autoplay: true,
    byline: true,
    callback: null,
    color: null,
    height: null,
    loop: false,
    maxheight: null,
    maxwidth: null,
    player_id: null,
    portrait: true,
    title: true,
    width: null,
    xhtml: false
  },
  allowFullScreen: true,
  animationSpeed: 300,
  classNames: {
    modalVideoEffect: 'modal-video-effect',
    modalVideo: 'modal-video',
    modalVideoClose: 'modal-video-close',
    modalVideoBody: 'modal-video-body',
    modalVideoInner: 'modal-video-inner',
    modalVideoIframeWrap: 'modal-video-movie-wrap',
    modalVideoCloseBtn: 'modal-video-close-btn'
  },
  aria: {
    openMessage: 'You just openned the modal video',
    dismissBtnMessage: 'Close the modal by clicking here'
  }
}