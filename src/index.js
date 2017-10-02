import dva from 'dva';
import { message } from 'antd';
import './index.less';

let initialState = {};
if (sessionStorage.getItem('BENGIBLOG')) {
  initialState = JSON.parse(sessionStorage.getItem('BENGIBLOG'));
}
// 1. Initialize
const app = dva({
  initialState,
  onError: () => {
    message.error('出错啦TnT');
  },
});

// 2. Plugins
// app.use({});
window.beforeunload = window.onunload = () => {
  sessionStorage.setItem('BENGIBLOG', JSON.stringify(app._store.getState()));
};
// 3. Model
app.model(require('./models/home'));

app.model(require('./models/article'));

app.model(require('./models/app'));

// 4. Router
app.router(require('./router'));

// 5. Start
app.start('#root');
