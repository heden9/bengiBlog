import { fetchArticle } from '../services/api';

export default {

  namespace: 'article',

  state: {
  },

  subscriptions: {
    setupHistory({ dispatch, history }) {  // eslint-disable-line
      return history.listen(({ pathname, state }) => {
        if (pathname === '/article' && state) {
          dispatch({ type: 'fetch', payload: { id: state.id } });
        }
      });
    },
  },

  effects: {
    *fetch({ payload: { id } }, { call, put, select }) {  // eslint-disable-line
      const { currentVersion } = yield select(data => (data.article[id] ? data.article[id].version : ''));
      const { data: { mdContent, version } } = yield call(fetchArticle, { id });
      if (version !== currentVersion) {
        yield put({ type: 'save', payload: { [id]: { mdContent, version } } });
      }
    },
  },

  reducers: {
    save(state, action) {
      return { ...state, ...action.payload };
    },
  },

};
