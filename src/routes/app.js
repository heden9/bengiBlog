import React from 'react';
import { Link } from 'dva/router';
import { connect } from 'dva';
import classnames from 'classnames';
import { Row, Col, Icon, Menu, Dropdown, BackTop } from 'antd';
import IconFont from '../components/icon';
import menuIcon from '../assets/svg/menu.svg';
import bengiLogo from '../assets/bengi.png';
import './app.less';


function App({ children, isNavbar, blueNavbar }) {
  return (
    <div>
      <Navigation isNavbar={isNavbar} blueNavbar={blueNavbar} />
      <div className="margin-top" />
      {children}
      <BackTop>
        <IconFont type="rocket__easyi-copy" />
      </BackTop>
      <Footer blueNavbar={blueNavbar} />
    </div>
  );
}
function Footer({ blueNavbar }) {
  return (
    <div>
      <div
        className={classnames({
          'footer-icon-group': true,
          blue: blueNavbar,
        })}
      >
        <Link to=""><IconFont type="weixin" /></Link>
        <Link to=""><IconFont type="weibo-copy" /></Link>
        <Link to=""><IconFont type="shareto_qq" /></Link>
        <Link to=""><IconFont type="github" /></Link>
        <Link to=""><IconFont type="logo_csdn" /></Link>
      </div>
      <div className="footer">
        <span>Copyright © Bengi的博客 2017 | bengiw.com</span>
        <a href="https://github.com/w771854332/bengiBlog"><IconFont type="code" /> with <Icon type="heart" /> by <b>GitHub</b> <Icon type="github" style={{ fontSize: 15 }} /></a>
      </div>
    </div>

  );
}
function mapStateToProps({ app: { isNavbar, blueNavbar } }) {
  return {
    isNavbar,
    blueNavbar,
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

function Navigation({ isNavbar, blueNavbar }) {
  return (
    <header
      className={classnames({
        navigation: true,
        isHide: !isNavbar,
        blue: blueNavbar,
      })}
    >
      <div className="wrapper">
        <Row type="flex" align="middle" justify="space-between">
          <Col lg={8} md={8} sm={24} xs={24}>
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
                  <img src={menuIcon} alt="" />
                </div>
              </Dropdown>
            </div>
          </Col>
          <Col lg={14} md={14} sm={0} xs={0}>
            <div className="menu">
              <Link to="/tags" activeClassName="active">Tags</Link>
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
