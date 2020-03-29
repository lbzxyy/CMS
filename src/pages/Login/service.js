import request from '@utils/request.js';
import qs from 'qs';

export function login(data) {
  return request.post('/user/login/manageUserLogin', qs.stringify(data))
}