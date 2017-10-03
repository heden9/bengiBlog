import React from 'react';
import { connect } from 'dva';
import { Link } from 'dva/router';
import TagMenu from '../../components/tags';
import antvIcon from '../../assets/svg/antv.svg';
import './style.less';

function mapStateToProps({ home: { tags } }) {
  return {
    tags,
  };
}
function TagPage({ tags }) {
  return (
    <div>
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
                    const state = {
                      title: ditem.title,
                      time: ditem.time,
                      id: ditem.id,
                      subTitle: ditem.subTitle,
                    };
                    return (
                      <Link to={'/article'} state={state} className="article-title" key={`articles${ditem.id}`}>{ditem.title}</Link>
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
