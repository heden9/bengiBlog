import React from 'react';
import { Link } from 'dva/router';
import { connect } from 'dva';
import classnames from 'classnames';
import { Row, Col, Icon, Menu, Dropdown, BackTop } from 'antd';
import IconFont from '../components/icon';
import menuIcon from '../assets/svg/menu.svg';
import bengiLogo from '../assets/bengi.png';
import './app.less';


function App({ children, isNavbar }) {
  return (
    <div>
      <Navigation isNavbar={isNavbar} />
      <div className="margin-top" />
      {children}
      <BackTop>
        <IconFont type="rocket__easyi-copy" />
      </BackTop>
      <Footer />
    </div>
  );
}
function Footer() {
  return (
    <div className="footer">
      <span>Copyright © Bengi的博客 2017 | bengiw.com</span>
      <a href="https://github.com/w771854332/bengiBlog"><IconFont type="code" /> with <Icon type="heart" /> by <b>GitHub</b> <Icon type="github" style={{ fontSize: 15 }} /></a>
    </div>
  );
}
function mapStateToProps({ app: { isNavbar } }) {
  return {
    isNavbar,
  };
}
export default connect(mapStateToProps)(App);

const dropMenu = (
  <Menu>
    <Menu.Item>
      <Link to="/tags">Tags</Link>
    </Menu.Item>
    <Menu.Item>
      <Link to="">React</Link>
    </Menu.Item>
    <Menu.Item>
      <Link to="">React Native</Link>
    </Menu.Item>
    <Menu.Item>
      <Link to="">Contact<Icon type="github" style={{ fontSize: 25, marginLeft: 15 }} /></Link>
    </Menu.Item>
  </Menu>
);

function Navigation({ isNavbar }) {
  return (
    <header
      className={classnames({
        navigation: true,
        isHide: !isNavbar,
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
              <Link to="/react" activeClassName="active">React</Link>
              <Link to="/reactnative" activeClassName="active">React Native</Link>
              <Link to="/github" activeClassName="active">Contact<Icon type="github" style={{ fontSize: 25, marginLeft: 15 }} /></Link>
            </div>
          </Col>
        </Row>
      </div>
    </header>
  );
}
