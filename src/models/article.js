import { query } from '../services/api';

export default {

  namespace: 'article',

  state: {
    articleList: [],
    tags: [],
  },

  subscriptions: {
    setupHistory({ dispatch, history }) {  // eslint-disable-line
      return history.listen(({ pathname }) => {
        if (pathname === '/') {
          dispatch({ type: 'fetch' });
        }
      });
    },
  },

  effects: {
    *fetch({ payload }, { call, put }) {  // eslint-disable-line
      const { data: { articleList, tags } } = yield call(query);
      yield put({ type: 'save', payload: { articleList, tags } });
    },
  },

  reducers: {
    save(state, action) {
      return { ...state, ...action.payload };
    },
  },

};
