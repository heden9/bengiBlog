
export default {
  namespace: 'app',
  state: {
    isNavbar: true,
  },
  reducers: {
    handleNavbar(state, { payload }) {
      return {
        ...state,
        isNavbar: payload,
      };
    },
  },
  effects: {
    *changeNavbar({ payload }, { put, select }) {
      const { app } = yield (select(_ => _));
      const { isNavbar } = payload;
      if (isNavbar !== app.isNavbar) {
        yield put({ type: 'handleNavbar', payload: isNavbar });
      }
    },
  },
  subscriptions: {
    // setup({ dispatch }) {
    //   let p = 0;
    //   let t = 0;
    //   window.onscroll = () => {
    //     p = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop;
    //     if (t <= p) {
    //       dispatch({ type: 'changeNavbar', payload: { isNavbar: false } });
    //     } else {
    //       dispatch({ type: 'changeNavbar', payload: { isNavbar: true } });
    //     }
    //     setTimeout(() => { t = p; }, 0);
    //   };
    // },
  },
};
