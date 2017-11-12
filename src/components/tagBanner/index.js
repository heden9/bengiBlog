/* eslint-disable */
import React from 'react';
import ReactDOM from 'react-dom';
import TweenOne from 'rc-tween-one';
import ticker from 'rc-tween-one/lib/ticker';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import './style.less';
function newTicker(timer, ...arg){
  ticker.clear(timer);
  return ticker.interval(...arg);
}
export default class LogoGather extends React.Component {
  static propTypes = {
    image: PropTypes.string,
    w: PropTypes.number,
    h: PropTypes.number,
    pixSize: PropTypes.number,
    pointSizeMin: PropTypes.number,
  };

  static defaultProps = {
    image: require('../../assets/bengi-blue.png'),
    className: 'logo-gather-demo',
    w: 250,
    h: 250,
    pixSize: 20,
    pointSizeMin: 10,
    title: <h1>hello world</h1>
  };

  constructor(props) {
    super(props);
    this.state = {};
    this.interval = null;
    this.gather = true;
    this.intervalTime = 9000;
  }

  componentDidMount() {
    this.dom = ReactDOM.findDOMNode(this);
    this.createPointData();
  }

  componentWillUnmount() {
    ticker.clear(this.interval);
    this.interval = null;
  }

  onMouseEnter = () => {
    // !this.gather && this.updateTweenData();
    if (!this.gather) {
      this.updateTweenData();
    }
    this.componentWillUnmount();
  };

  onMouseLeave = () => {
    // this.gather && this.updateTweenData();
    if (this.gather) {
      this.updateTweenData();
    }
    this.interval = newTicker(this.inverval,this.updateTweenData, this.intervalTime);
  };
  setDataToDom(data, w, h) {
    this.pointArray = [];
    const number = this.props.pixSize;
    for (let i = 0; i < w; i += number) {
      for (let j = 0; j < h; j += number) {
        if (data[((i + j * w) * 4) + 3] > 150) {
          this.pointArray.push({ x: i, y: j });
        }
      }
    }
    const children = [];
    this.pointArray.forEach((item, i) => {
      const r = Math.random() * this.props.pointSizeMin + this.props.pointSizeMin;
      const b = Math.random() * 0.4 + 0.1;
      let backgroundColor = `rgb(${Math.round(Math.random() * 95 + 160)},255,255)`;
      if(this.props.redNavbar) {
        backgroundColor = `rgb(255,${Math.round(Math.random() * 95 + 160)},255)`;
      }
      children.push(
        <TweenOne className="point-wrapper" key={i} style={{ left: item.x, top: item.y }}>
          <TweenOne
            className="point"
            style={{
              width: r,
              height: r,
              opacity: b,
              backgroundColor,
            }}
            animation={{
              y: (Math.random() * 2 - 1) * 10 || 5,
              x: (Math.random() * 2 - 1) * 5 || 2.5,
              delay: Math.random() * 1000,
              repeat: -1,
              duration: 3000,
              yoyo: true,
              ease: 'easeInOutQuad',
            }}
          />
        </TweenOne>,
      );
    });
    this.setState({
      children,
      boxAnim: { opacity: 0, type: 'from', duration: 800 },
    }, () => {
      this.interval = newTicker(this.inverval,this.updateTweenData, this.intervalTime);
    });
  }

  createPointData = () => {
    const { w, h } = this.props;
    const canvas = document.getElementById('canvas');
    const ctx = canvas.getContext('2d');
    ctx.clearRect(0, 0, w, h);
    canvas.width = this.props.w;
    canvas.height = h;
    const img = new Image();
    img.onload = () => {
      ctx.drawImage(img, 0, 0, img.width, img.height, 0, 0, w, h);
      const data = ctx.getImageData(0, 0, w, h).data;
      this.setDataToDom(data, w, h);
      this.dom.removeChild(canvas);
    };
    img.crossOrigin = 'anonymous';
    img.src = this.props.image;
  };

  gatherData = () => {
    const children = this.state.children.map(item =>
      React.cloneElement(item, {
        animation: {
          x: 0,
          y: 0,
          opacity: 1,
          scale: 1,
          delay: Math.random() * 500,
          duration: 800,
          ease: 'easeInOutQuint',
        },
      }),
    );
    this.setState({ children });
  };

  disperseData = () => {
    const rect = this.dom.getBoundingClientRect();
    const sideRect = this.sideBox.getBoundingClientRect();
    const sideTop = sideRect.top - rect.top;
    const sideLeft = sideRect.left - rect.left;
    const children = this.state.children.map(item =>
      React.cloneElement(item, {
        animation: {
          x: Math.random() * rect.width - sideLeft - item.props.style.left,
          y: Math.random() * rect.height - sideTop - item.props.style.top,
          opacity: Math.random() * 0.4 + 0.1,
          scale: Math.random() * 2.4 + 0.1,
          duration: Math.random() * 500 + 500,
          ease: 'easeInOutQuint',
        },
      }),
    );

    this.setState({
      children,
    });
  };

  updateTweenData = () => {
    try{
      this.dom = ReactDOM.findDOMNode(this);
      this.sideBox = ReactDOM.findDOMNode(this.sideBoxComp);
      this && ((this.gather && this.disperseData) || this.gatherData)();
      this.gather = !this.gather;
    }catch(e){
      console.log('😞，我有点不好');
    }
  };

  render() {
    return (<div className={classnames({
      'logo-gather-demo-wrapper': true,
      red: this.props.redNavbar
    })}>
      <svg className="banner-bg-center" width="100%" viewBox="0 0 1200 800">
        <circle fill="rgba(161,174,245,.15)" r="130" cx="360" cy="360" >
          <animateTransform attributeName="transform" begin="0s" dur="50s" type="rotate" values="0 160 160;60 360 760;0 160 160" repeatCount="indefinite"/>
        </circle>
        <circle fill="rgba(120,172,254,.1)" r="80" cx="500" cy="420" >
          <animateTransform attributeName="transform" begin="0s" dur="50s" type="rotate" values="0 160 160;60 360 160;0 160 160" repeatCount="indefinite"/>
        </circle>
      </svg>
      <canvas id="canvas" />
      <div className="wrapper">
        {
          this.props.title
        }
        <TweenOne
          animation={this.state.boxAnim}
          className="right-side blur"
          onMouseEnter={this.onMouseEnter}
          onMouseLeave={this.onMouseLeave}
          ref={(c) => {
            this.sideBoxComp = c;
          }}
        >
          {this.state.children}
        </TweenOne>
      </div>
    </div>);
  }
}
