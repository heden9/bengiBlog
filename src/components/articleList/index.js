import React from 'react';
import { Link } from 'dva/router';
import { Pagination } from 'antd';
import './style.less';
import antvIcon from '../../assets/svg/antv.svg';

export default function articelList({ data }) {
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
        <Pagination simple defaultCurrent={2} total={50} />
      </li>
    </ul>
  );
}

const ArticleItem = ({ title, label, time, content }) => {
  return (
    <li className="article-item">
      <div className="item-bar">
        <img src={antvIcon} className="icon" alt="" />
        <span>来自标签：{label}</span>
      </div>
      <Link className="article-title" to="">{title}</Link>
      <Link className="word" to="">{content}</Link>
      <time>{time}</time>
    </li>
  );
};
