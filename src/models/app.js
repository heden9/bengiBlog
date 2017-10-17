
export default {
  namespace: 'app',
  state: {
    isNavbar: true,
    blueNavbar: true,
    redNavbar: true,
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
    *changeColorNavbar({ payload }, { put, select }) {
      const { app } = yield (select(_ => _));
      const { blueNavbar, redNavbar } = payload;
      let newPayload = {};
      if (blueNavbar !== app.blueNavbar) {
        newPayload = {
          ...newPayload,
          blueNavbar,
        };
      }
      if (redNavbar !== app.redNavbar) {
        newPayload = {
          ...newPayload,
          redNavbar,
        };
      }
      if (Object.keys(newPayload).length !== 0) {
        yield put({ type: 'handleNavbar', payload: newPayload });
      }
    },
  },
  subscriptions: {
    setupHistory({ dispatch, history }) {
      history.listen((location) => {
        const { hash } = location;
        let blueNavbar = true;
        let redNavbar = true;
        if (location.pathname !== '/tags') {
          blueNavbar = false;
        } else if (location.pathname === '/tags') {
          setTimeout(() => {
            if (hash) {
              document.querySelector(hash).scrollIntoView();
            } else {
              document.getElementById('root').scrollIntoView();
            }
          }, 0);
        }
        if (!location.pathname.startsWith('/article')) {
          redNavbar = false;
        } else if (location.pathname.startsWith('/article')) {
          setTimeout(() => {
            document.getElementById('root').scrollIntoView();
          }, 0);
        }
        dispatch({
          type: 'changeColorNavbar',
          payload: {
            blueNavbar,
            redNavbar,
          },
        });
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
