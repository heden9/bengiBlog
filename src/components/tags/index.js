import React from 'react';
import { Link } from 'dva/router';
import './style.less';


export default function TagMenu({ tags, title }) {
  return (
    <div className="tag-menu">
      <Link to="/tags" className="article-title small">{title}</Link>
      <div className="content">
        {
          tags.map((item) => {
            return (
              <TagItem key={item.id} {...item} />
            );
          })
        }
      </div>
    </div>
  );
}
function TagItem({ title, id }) {
  return (
    <Link to={`/tags#s${id}`} className="tag-item">{title}</Link>
  );
}
