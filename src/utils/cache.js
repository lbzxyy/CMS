import { isString, isObject } from './utils';

/**
 * 获取localStorage存储值方法
 * @param {*} key 存储key值
 */
export function getData(key) {
  let data = localStorage.getItem(key);
  return isString(data)?data:(data? JSON.parse(data): {});
}
/**
 * 存储值到localStorage方法
 * @param {*} key 存储key值
 * @param {*} data 存储值
 */
export function saveData(key, data) {
  if(!isObject(data)) {
    return localStorage.setItem(key,data)
  }
  return localStorage.setItem(key,JSON.stringify(data));
}