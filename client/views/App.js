/**
 * 声明整个页面的内容
 */
import { create } from '../utils/dva';

import '../index.less';

export default ({ initialState, history }, isServer) => create({
  initialState,
  history,
  models: [require('../models/home'), require('../models/article'), require('../models/app')],
  routes: require('../routes/index'),
}, isServer);
