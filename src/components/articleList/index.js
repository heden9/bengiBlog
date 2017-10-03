import React from 'react';
import { Link } from 'dva/router';
import { Pagination } from 'antd';
import './style.less';
import antvIcon from '../../assets/svg/antv.svg';

export default function articelList({ data, page }) {
  return (
    <ul className="article-list">
      {
        data.map((item, index) => {
          return (
            <ArticleItem key={index} {...item} />
          );
        })
      }
      <li className="pagination">
        <Pagination simple defaultCurrent={page} total={1} />
      </li>
    </ul>
  );
}

const ArticleItem = ({ title, subTitle, label, time, id, content }) => {
  const state = {
    title,
    id,
    time,
    subTitle,
  };
  return (
    <li className="article-item">
      <div className="item-bar">
        <img src={antvIcon} className="icon" alt="" />
        <span>来自标签：{label.join('、')}</span>
      </div>
      <Link className="article-title" to={'/article'} state={state}>{title}</Link>
      <Link className="word" to={'/article'} state={state}>{content}</Link>
      <time>{time}</time>
    </li>
  );
};
