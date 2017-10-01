import React from 'react';
import { connect } from 'dva';
import { Link } from 'dva/router';
import TagMenu from '../../components/tags';
import Banner from '../../components/tagBanner';
import antvIcon from '../../assets/svg/antv.svg';
import './style.less';

function mapStateToProps({ article: { tags } }) {
  return {
    tags,
  };
}
function TagPage({ tags }) {
  return (
    <div>
      <Banner />
      <div className="tag-container">
        <div className="wrapper">
          <TagMenu tags={tags} />
          <DetailList tags={tags} />
        </div>
      </div>
    </div>
  );
}

function DetailList({ tags }) {
  return (
    <div className="detail-list">
      {
        tags.map((item) => {
          return (
            <div key={`detail${item.id}`} className="list-section">
              <h6 className="section-title" id={`s${item.id}`} >
                <img src={antvIcon} className="icon" alt="" />
                {item.title}
              </h6>
              <div>
                {
                  item.articles.map((ditem) => {
                    return (
                      <Link to="" className="article-title" key={`articles${ditem.id}`}>{ditem.title}</Link>
                    );
                  })
                }
              </div>
            </div>
          );
        })
      }
    </div>
  );
}
export default connect(mapStateToProps)(TagPage);
