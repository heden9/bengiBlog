import React from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import 'github-markdown-css';
import Banner from '../../components/tagBanner';
import '../../utils/prism.css';
import './style.less';
import { prism } from '../../utils/prism';

function getValue(thunk) {
  try {
    return thunk();
  } catch (e) {
    console.log(e.message);
    return {};
  }
}
function mapStateToProps({ article }, props) {
  console.log(article, props, __ISOMORPHIC__); // eslint-disable-line
  return {
    articleMsg: getValue(() => article[props.match.params.id]),
  };
}

function Article({
  mdContent, subTitle, title, time,
}) {
  // setImmediate(prism);
  return [
    <Banner
      key={1}
      red
      title={(
        <div className="article-group fadeInDown animated">
          <h2>{title}</h2>
          <h4>{subTitle}</h4>
          <h4>{time}</h4>
        </div>
      )}
    />,
    <div className="wrapper" key={2}>
      <div
        className="markdown-body"
        dangerouslySetInnerHTML={{
          __html: mdContent,
        }}
      />
    </div>,
  ];
}
@withRouter
@connect(mapStateToProps)
class ArticlePage extends React.Component {
  static defaultProps = {
    articleMsg: {},
  }
  componentDidMount() {
    const { id } = this.props.match.params;
    if (!this.props.articleMsg.zt) {
      this.props.dispatch({ type: 'article/fetch', payload: { id } });
    }
    prism();
  }
  render() {
    return (
      <Article {...this.props.articleMsg} />
    );
  }
}
export default ArticlePage;
