import { fetchArticle } from '../services/api';

export default {

  namespace: 'article',

  state: {
    id: '',
    version: '',
    title: '',
    subTitle: '',
    time: '',
    mdContent: '',
  },

  subscriptions: {
    setupHistory({ dispatch, history }) {  // eslint-disable-line
      return history.listen(({ pathname, state }) => {
        if (pathname === '/article' && state) {
          dispatch({ type: 'fetch', payload: { ...state } });
        }
      });
    },
  },

  effects: {
    *fetch({ payload: { id, title, subTitle, time } }, { call, put, select }) {  // eslint-disable-line
      const currentId = yield select(_ => _.article.id);
      let newId = '';
      if (id) {
        newId = id;
      } else if (currentId && !id) {
        newId = currentId;
      } else {
        return;
      }
      const { data: { mdContent, version } } = yield call(fetchArticle, { id: newId });
      const { currentVersion } = yield select(_ => _.article.version);
      if (version !== currentVersion) {
        yield put({ type: 'save', payload: { mdContent, title, subTitle, time } });
      }
    },
  },

  reducers: {
    save(state, action) {
      return { ...state, ...action.payload };
    },
  },

};
