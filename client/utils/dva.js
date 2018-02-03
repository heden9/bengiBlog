/**
 * 声明整个页面的内容
 */
import { create as create2 } from 'dva-core';

export function create({
  models = [],
  routes,
  history,
  ...config
}, isServer) {
  const app = create2(config);
  models.forEach((item) => {
    app.model(item);
  });
  app.start();
  if (!isServer) {
    app.start = () => routes;
  }
  return app;
}
