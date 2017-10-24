import pathToRegexp from 'path-to-regexp';
import { message } from 'antd';
import { fetchArticle } from '../services/api';
import '../utils/prism.css';
import '../utils/prism.js';

export default {

  namespace: 'article',

  state: {
  },

  subscriptions: {
    setupHistory({ dispatch, history }) {  // eslint-disable-line
      return history.listen(({ pathname }) => {
        if (pathname.startsWith('/article')) {
          const id = pathToRegexp('/article/:id').exec(pathname)[1];
          dispatch({ type: 'fetch', payload: { id } });
        }
      });
    },
  },

  effects: {
    *fetch({ payload: { id } }, { call, put, select }) {  // eslint-disable-line
      const currentVersion = yield select(data => (data.article[id] ? data.article[id].version : ''));
      const { data } = yield call(fetchArticle, { id });
      const { mdContent, version, subTitle, time, title, err } = data;
      if (err) {
        message.error(err);
        return;
      }
      if (version !== currentVersion) {
        console.log('数据已更新', data);
        console.log(currentVersion);
        yield put({ type: 'save', payload: { [id]: { mdContent, version, subTitle, time, title } } });
      } else {
        console.log('未更新');
      }
    },
  },

  reducers: {
    save(state, action) {
      return { ...state, ...action.payload };
    },
  },

};
