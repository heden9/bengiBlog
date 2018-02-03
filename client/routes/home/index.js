import React from 'react';
import { connect } from 'react-redux';
import { Link, withRouter } from 'react-router-dom';
import { Row, Col } from 'antd';
import './style.less';
import Banner from '../../components/banner';
import ArticleList from '../../components/articleList';
import TagMenu from '../../components/tags';
import IconFont from '../../components/icon';

function Home({ articleList, tags, page }) {
  return (
    <div className="home-container">
      <Banner />
      <div className="home-content">
        <div className="wrapper">
          <Row type="flex" align="space-between" >
            <Col xs={24} sm={24} md={16} lg={16} xl={16}>
              <ArticleList data={articleList} page={page} />
            </Col>
            <Col xs={24} sm={24} md={6} lg={6} xl={6}>
              <TagMenu tags={tags} title="FEATURED TAGS" />
              <AboutMe />
            </Col>
          </Row>
        </div>
      </div>
    </div>
  );
}

function AboutMe() {
  return (
    <div className="tag-menu about-me">
      <Link to="" className="article-title small">ABOUT ME</Link>
      <div className="avatar" />
      <p className="word">专注React，分享知识，共享快乐。</p>
      <div className="icon-group">
        <Link to=""><IconFont type={require('../../assets/svg/weixin.svg').default} /></Link>
        <Link to=""><IconFont type={require('../../assets/svg/weibo.svg').default} /></Link>
        <Link to=""><IconFont type={require('../../assets/svg/qq.svg').default} /></Link>
        <Link to=""><IconFont type={require('../../assets/svg/github.svg').default} /></Link>
      </div>
    </div>
  );
}


function mapStateToProps({
  home: {
    articleList, tags, page, zt,
  },
}) {
  return {
    articleList,
    tags,
    page,
    zt,
  };
}

@withRouter
@connect(mapStateToProps)
class NextHome extends React.Component {
  componentDidMount() {
    if (!this.props.zt) {
      this.props.dispatch({ type: 'home/fetch' });
    }
  }
  render() {
    return (
      <Home {...this.props} />
    );
  }
}
export default NextHome;
