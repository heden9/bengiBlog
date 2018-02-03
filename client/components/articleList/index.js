import React from 'react';
import { Link } from 'react-router-dom';
import { Pagination } from 'antd';
import Icon from '../../components/icon';
import './style.less';
import antvIcon from '../../assets/svg/antv.svg';

export default function articelList({ data, page }) {
  return (
    <ul className="article-list">
      {data.map((item, index) => (<ArticleItem key={index} {...item} />)) // eslint-disable-line
}
      <li className="pagination">
        <Pagination simple defaultCurrent={page} total={1} />
      </li>
    </ul>
  );
}

const ArticleItem = ({
  title, label, time, id, content,
}) => (
  <li className="article-item">
    <div className="item-bar">
      <Icon type={antvIcon} className="icon" />
      <span>来自标签：{label.join('、')}</span>
    </div>
    <Link className="article-title" to={`/article/${id}`}>{title}</Link>
    <Link className="word" to={`/article/${id}`}>{content}</Link>
    <time>{time}</time>
  </li>
);
