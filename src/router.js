import React from 'react';
import { Router, Route, IndexRoute } from 'dva/router';
import App from './routes/app';
import Home from './routes/home';

function RouterConfig({ history }) {
  return (
    <Router history={history}>
      <Route path="/" component={App} >
        <IndexRoute component={Home} />
      </Route>
    </Router>
  );
}

export default RouterConfig;
