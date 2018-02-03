import React from 'react';
import { connect } from 'react-redux';
import { Link, withRouter } from 'react-router-dom';
import TagMenu from '../../components/tags';
import antvIcon from '../../assets/svg/antv.svg';
import Banner from '../../components/tagBanner';
import Iconfont from '../../components/icon';
import './style.less';

function mapStateToProps({ home: { tags } }) {
  return {
    tags,
  };
}


function DetailList({ tags }) {
  return (
    <div className="detail-list">
      {
        tags.map(item => (
          <div key={`detail${item.id}`} className="list-section">
            <h6 className="section-title" id={`s${item.id}`} >
              <Iconfont type={antvIcon} className="icon" />
              {item.title}
            </h6>
            <div>
              {
                item.articles.map(ditem => (
                  <Link to={`/article/${ditem.id}`} className="article-title" key={`articles${ditem.id}`}>{ditem.title}</Link>
                ))
              }
            </div>
          </div>
        ))
      }
    </div>
  );
}
function TagPage({ tags }) {
  return (
    <div className="tag-container">
      <Banner title={(
        <div className="title-group fadeInDown animated">
          <h1>Tags</h1>
          <h4>If You Can Make It Here<br /> You Can Make It Anywhere</h4>
        </div>
      )}
      />
      <div className="wrapper">
        <TagMenu tags={tags} />
        <DetailList tags={tags} />
      </div>
    </div>
  );
}


@withRouter
@connect(mapStateToProps)
class BigTagContainer extends React.Component {
  componentDidMount() {
    if (!this.props.zt) {
      this.props.dispatch({ type: 'home/fetch' });
    }
  }
  render() {
    return <TagPage {...this.props} />;
  }
}
export default BigTagContainer;
