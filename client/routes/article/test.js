/*eslint-disable*/
import React from 'react';
import 'github-markdown-css';
import './style.less';

function Article({ mdContent }) {
  return (
    <div className="wrapper">
      <div className="markdown-body" dangerouslySetInnerHTML={{ __html: mdContent }} />
    </div>
  );
}


class newArticle extends React.PureComponent {
    render(){
        <Article/>
    }
}
export default newArticle;
