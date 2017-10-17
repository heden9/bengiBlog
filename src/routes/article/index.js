import React from 'react';
import { connect } from 'dva';
import 'github-markdown-css';
import './style.less';

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
export default connect(mapStateToProps)(Article);
