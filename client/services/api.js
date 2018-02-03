import request from '../utils/request';

export function query(host = '') {
  return request(`${host}/api/home`);
}


export function fetchArticle(id, host = '') {
  return request(`${host}/api/article`, {
    method: 'GET',
    headers: {
      'Content-type': 'application/json',
    },
    params: {
      id,
    },
  });
}
