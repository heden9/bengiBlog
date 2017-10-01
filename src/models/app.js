
export default {
  namespace: 'app',
  state: {
    isNavbar: true,
    blueNavbar: true,
  },
  reducers: {
    handleNavbar(state, { payload }) {
      return {
        ...state,
        ...payload,
      };
    },
  },
  effects: {
    *changeNavbar({ payload }, { put, select }) {
      const { app } = yield (select(_ => _));
      const { isNavbar } = payload;
      if (isNavbar !== app.isNavbar) {
        yield put({ type: 'handleNavbar', payload: { isNavbar } });
      }
    },
    *changeBlueNavbar({ payload }, { put, select }) {
      const { app } = yield (select(_ => _));
      const { blueNavbar } = payload;
      if (blueNavbar !== app.blueNavbar) {
        yield put({ type: 'handleNavbar', payload: { blueNavbar } });
      }
    },
  },
  subscriptions: {
    setupHistory({ dispatch, history }) {
      history.listen((location) => {
        setTimeout(() => {
          const { hash } = location;
          if (hash) {
            document.querySelector(hash).scrollIntoView();
          } else {
            document.getElementById('root').scrollIntoView();
          }
        }, 0);
        if (location.pathname === '/tags') {
          dispatch({
            type: 'changeBlueNavbar',
            payload: {
              blueNavbar: true,
            },
          });
        } else {
          dispatch({
            type: 'changeBlueNavbar',
            payload: {
              blueNavbar: false,
            },
          });
        }
      });
    },
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
