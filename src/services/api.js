import request from '../utils/request';

export async function query() {
  return request('/api/home');
}


export async function fetchArticle({ id }) {
  return request('/api/article', {
    method: 'POST',
    body: JSON.stringify({ id }),
  });
}
