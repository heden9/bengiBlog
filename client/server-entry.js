import React from 'react';
import { StaticRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
// import createMemoryHistory from 'history/createMemoryHistory';
import create from './views/App';
// import App from './routes/index';
import { query, fetchArticle } from './services/api';

export default(app, routerContext, url) => {
  const App = app.start();
  const store = app._store; // eslint-disable-line
  return (
    <StaticRouter location={url} context={routerContext}>
      <Provider store={store}>
        <App />
      </Provider>
    </StaticRouter>
  );
};
export function getState() {
  return app._store.getState(); // eslint-disable-line
}
export { create, query, fetchArticle };
