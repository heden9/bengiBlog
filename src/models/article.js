import { fetchArticle } from '../services/api';

export default {

  namespace: 'article',

  state: {
    id: '',
    version: '',
    mdContent: '',
  },

  subscriptions: {
    setupHistory({ dispatch, history }) {  // eslint-disable-line
      return history.listen(({ pathname, hash }) => {
        if (pathname === '/article' && hash) {
          dispatch({ type: 'fetch', payload: { id: hash } });
        }
      });
    },
  },

  effects: {
    *fetch({ payload: { id } }, { call, put, select }) {  // eslint-disable-line
      const currentId = yield select(_ => _.article.id);
      let newId = '';
      if (id) {
        newId = id;
      } else if (currentId && !id) {
        newId = currentId;
      } else {
        return;
      }
      const { data: { mdContent, version } } = yield call(fetchArticle, { newId });
      const { currentVersion } = yield select(_ => _.article.version);
      if (version !== currentVersion) {
        yield put({ type: 'save', payload: { mdContent } });
      }
    },
  },

  reducers: {
    save(state, action) {
      return { ...state, ...action.payload };
    },
  },

};
