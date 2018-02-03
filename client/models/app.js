
export default {
  namespace: 'app',
  state: {
  },
  reducers: {
    // handleNavbar(state, { payload }) {
    //   return {
    //     ...state,
    //     ...payload,
    //   };
    // },
  },
  effects: {
    // * changeNavbar({ payload }, { put, select }) {
    //   const { app } = yield (select(_ => _));
    //   const { isNavbar } = payload;
    //   if (isNavbar !== app.isNavbar) {
    //     yield put({ type: 'handleNavbar', payload: { isNavbar } });
    //   }
    // },
    // * changeColorNavbar({ payload }, { put, select }) {
    //   const { app } = yield (select(_ => _));
    //   const { blueNavbar, redNavbar } = payload;
    //   let newPayload = {};
    //   if (blueNavbar !== app.blueNavbar) {
    //     newPayload = {
    //       ...newPayload,
    //       blueNavbar,
    //     };
    //   }
    //   if (redNavbar !== app.redNavbar) {
    //     newPayload = {
    //       ...newPayload,
    //       redNavbar,
    //     };
    //   }
    //   if (Object.keys(newPayload).length !== 0) {
    //     yield put({ type: 'handleNavbar', payload: newPayload });
    //   }
    // },
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
