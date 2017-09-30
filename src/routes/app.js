import React from 'react';
import { Link } from 'dva/router';
import { connect } from 'dva';
import classnames from 'classnames';
import { Row, Col, Icon, Menu, Dropdown } from 'antd';
import menuIcon from '../assets/svg/menu.svg';
import './app.less';


function App({ children, isNavbar }) {
  return (
    <div>
      <Navigation isNavbar={isNavbar} />
      <div className="margin-top" />
      {children}
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
      <Link to="">Docs</Link>
    </Menu.Item>
    <Menu.Item>
      <Link to="">Blog</Link>
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
          <Col lg={5} md={5} sm={24} xs={24}>
            <div className="title-container">
              <Link to="" className="title">
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
              <Link to="">Docs</Link>
              <Link to="">Blog</Link>
              <Link to="">React</Link>
              <Link to="">React Native</Link>
              <Link to="">Contact<Icon type="github" style={{ fontSize: 25, marginLeft: 15 }} /></Link>
            </div>
          </Col>
        </Row>
      </div>
    </header>
  );
}
