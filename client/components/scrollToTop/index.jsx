import { Component } from 'react';
import { withRouter } from 'react-router-dom';

@withRouter
class ScrollToTop extends Component {
  componentDidUpdate(prevProps) {
    if (this.props.location !== prevProps.location) {
      const { hash } = prevProps.history.location;
      if (hash) {
        document.querySelector(hash).scrollIntoView();
      } else {
        window.scrollTo(0, 0);
      }
    }
  }

  render() {
    return this.props.children;
  }
}

export default ScrollToTop;
