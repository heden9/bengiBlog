import { query } from '../services/api';

export default {

  namespace: 'home',

  state: {
    version: '',
    articleList: [],
    tags: [],
    page: 1,
  },

  subscriptions: {
    setupHistory({ dispatch, history }) {  // eslint-disable-line
      return history.listen(({ pathname }) => {
        if (pathname === '/' || pathname === '/tags') {
          dispatch({ type: 'fetch' });
        }
      });
    },
  },

  effects: {
    *fetch({ payload }, { call, put, select }) {  // eslint-disable-line
      const { data: { articleList, tags, version } } = yield call(query);
      const { currentVersion } = yield select(_ => _.home.version);
      if (version !== currentVersion) {
        yield put({ type: 'save', payload: { articleList, tags, version } });
      }
    },
  },

  reducers: {
    save(state, action) {
      return { ...state, ...action.payload };
    },
  },

};
