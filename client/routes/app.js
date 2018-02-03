import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import classNames from 'classnames';
import { Row, Col, Icon, Menu, Dropdown, BackTop } from 'antd';
import IconFont from '../components/icon';
// import Banner from '../components/tagBanner';
import menuIcon from '../assets/svg/menu.svg';
import bengiLogo from '../assets/bengi.png';
import './app.less';


function App({
  children,
}) {
  return [
    <Navigation key={1} />,
    children,
    <BackTop key={3}>
      <IconFont type={require('../assets/svg/rocket.svg').default} />
    </BackTop>,
    <Footer key={4} />,
  ];
}
// function Title({ pathname, query }) {
//   if (pathname === '/tags') {
//     return (
// <div className="title-group fadeInDown animated">
//   <h1>Tags</h1>
//   <h4>If You Can Make It Here<br /> You Can Make It Anywhere</h4>
// </div>
//     );
//   } else if (pathname.startsWith('/article')) {
//     return (
//       <div className="article-group fadeInDown animated">
//         <h2>{query.title}</h2>
//         <h4>{query.subTitle}</h4>
//         <h4>{query.time}</h4>
//       </div>
//     );
//   }
//   return null;
// }
function Footer({ blueNavbar }) {
  return (
    <div>
      <div
        className={classNames({
          'footer-icon-group': true,
          blue: blueNavbar,
        })}
      >
        <Link to=""><IconFont type={require('../assets/svg/weixin.svg').default} /></Link>
        <Link to=""><IconFont type={require('../assets/svg/weibo.svg').default} /></Link>
        <Link to=""><IconFont type={require('../assets/svg/qq.svg').default} /></Link>
        <Link to=""><IconFont type={require('../assets/svg/github.svg').default} /></Link>
      </div>
      <div className="footer">
        <span>Copyright © Bengi的博客 2017 | bengiw.com</span>
        <a href="https://github.com/w771854332/bengiBlog"><IconFont type="code" /> with <Icon type="heart" /> by <b>GitHub</b> <Icon type="github" style={{ fontSize: 15 }} /></a>
      </div>
    </div>

  );
}

function mapStateToProps() {
  return {

  };
}
export default connect(mapStateToProps)(App);

const dropMenu = (
  <Menu>
    <Menu.Item>
      <Link to="/tags">Tags</Link>
    </Menu.Item>
    <Menu.Item>
      <Link to="/tags#sreact">React</Link>
    </Menu.Item>
    <Menu.Item>
      <Link to="/tags#sreactnative">React Native</Link>
    </Menu.Item>
    <Menu.Item>
      <a href="https://github.com/w771854332">Contact<Icon type="github" style={{ fontSize: 25, marginLeft: 15 }} /></a>
    </Menu.Item>
  </Menu>
);

function Navigation({ isNavbar = true, blueNavbar = true, redNavbar }) {
  return (
    <header
      className={classNames({
        navigation: true,
        isHide: !isNavbar,
        blue: blueNavbar || redNavbar,
      })}
    >
      <div className="wrapper">
        <Row type="flex" align="middle" justify="space-between">
          <Col lg={8} md={24} sm={24} xs={24}>
            <div className="title-container">
              <Link to="" className="title">
                <img src={bengiLogo} alt="" />
                {'BENGI\'S BLOG'}
              </Link>
              <Dropdown
                getPopupContainer={() => document.getElementById('menu-parent')}
                overlay={dropMenu}
                trigger={['click']}
              >
                <div className="menu-button" id="menu-parent">
                  <IconFont type={menuIcon} />
                </div>
              </Dropdown>
            </div>
          </Col>
          <Col lg={14} md={0} sm={0} xs={0}>
            <div className="menu">
              <NavLink to="/tags" activeClassName="active">Tags</NavLink>
              <Link to="/tags#sreact" >React</Link>
              <Link to="/tags#sreactnative" >React Native</Link>
              <a href="https://github.com/w771854332">Contact<Icon type="github" style={{ fontSize: 25, marginLeft: 15 }} /></a>
            </div>
          </Col>
        </Row>
      </div>
    </header>
  );
}
