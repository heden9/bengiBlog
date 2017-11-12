import React from 'react';
import { connect } from 'dva';
import 'github-markdown-css';
import '../../utils/prism.css';
import './style.less';
import { prism } from '../../utils/prism';

function mapStateToProps({ article }, { params }) {
  if (!article[params.id]) {
    return {
      mdContent: 'loading',
    };
  }
  const { mdContent } = article[params.id];
  return {
    mdContent,
  };
}
function Article({ mdContent }) {
  return (
    <div className="wrapper">
      <div className="markdown-body" dangerouslySetInnerHTML={{ __html: mdContent }} />
    </div>
  );
}

class ArticleContainer extends React.PureComponent {
  componentDidMount() {
    prism();
  }
  render() {
    return (
      <Article {...this.props} />
    );
  }
}
export default connect(mapStateToProps)(ArticleContainer);
