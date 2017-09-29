import React from 'react';
import { Link } from 'dva/router';
import { Row, Col } from 'antd';
import './style.less';
import Banner from '../../components/banner';
import antvIcon from '../../assets/svg/antv.svg';

const data = [
  {
    label: 'Antv',
    labelIcon: '',
    title: 'React Native 集成分享第三方登录功能分享第三方登录模块开发(Android)',
    subTitle: '如何在React Native中实现分享和第三方登录的功能',
    content: '在我们常用的App中经常会看到分享与第三方登录的功能，可以说分享与第三方登录已经成为了各大APP的必备功能。对于产品运行与推广来说，分享与第三方登录不仅能加强用户粘性，增加流量及新用户，也能提升用户存、留优化产品质量等。 各大平台都有对应的开发平台来提供分享与第三方登录的服务，比如微信开发平台/腾讯开发平台、新浪开发者平台等。因为各大平台及相关SDK存在很大的差异，单独集成起来比较繁琐...',
    time: 'September 10, 2017',
  },
  {
    label: 'React',
    labelIcon: '',
    title: '教你轻松在React Native中集成统计的功能',
    subTitle: 'React Native 集成统计的功能',
    content: '有时我们需要知道一款产品上线后的受欢迎程度，推广效果、有多少人安装、使用率，平均在线时长、活跃用户、启动次数、版本分布等数据，这个时候我们不得不用到统计分析。如果条件允许我们可以自己实现统计分析的功能，但如果要做的很专业很详细那么则需要一个庞大的工作量。在这里我们也可以采用第三方统计umneng。 在这篇文章中我会向大家分享，在React Native中集成umeng统计的方法及流程。因为...',
    time: 'September 3, 2017',
  },
  {
    label: 'React',
    labelIcon: '',
    title: 'React Native 集成分享第三方登录功能分享第三方登录模块开发(Android)',
    subTitle: '如何在React Native中实现分享和第三方登录的功能',
    content: '在我们常用的App中经常会看到分享与第三方登录的功能，可以说分享与第三方登录已经成为了各大APP的必备功能。对于产品运行与推广来说，分享与第三方登录不仅能加强用户粘性，增加流量及新用户，也能提升用户存、留优化产品质量等。 各大平台都有对应的开发平台来提供分享与第三方登录的服务，比如微信开发平台/腾讯开发平台、新浪开发者平台等。因为各大平台及相关SDK存在很大的差异，单独集成起来比较繁琐...',
    time: 'September 10, 2017',
  },
  {
    label: 'React',
    labelIcon: '',
    title: '教你轻松在React Native中集成统计的功能',
    subTitle: 'React Native 集成统计的功能',
    content: '有时我们需要知道一款产品上线后的受欢迎程度，推广效果、有多少人安装、使用率，平均在线时长、活跃用户、启动次数、版本分布等数据，这个时候我们不得不用到统计分析。如果条件允许我们可以自己实现统计分析的功能，但如果要做的很专业很详细那么则需要一个庞大的工作量。在这里我们也可以采用第三方统计umneng。 在这篇文章中我会向大家分享，在React Native中集成umeng统计的方法及流程。因为...',
    time: 'September 3, 2017',
  },
];
export default function Home() {
  return (
    <div className="home-container">
      <Banner />
      <div className="home-content">
        <div className="wrapper">
          <Row type="flex" align="space-between" >
            <Col xs={24} sm={24} md={16} lg={16} xl={16}>
              <ul className="article-list">
                {
                  data.map((item, index) => {
                    return (
                      <ArticleItem key={index} {...item} />
                    );
                  })
                }
              </ul>
            </Col>
            <Col xs={24} sm={24} md={6} lg={6} xl={6}>
              123
            </Col>
          </Row>
        </div>
      </div>
    </div>
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
