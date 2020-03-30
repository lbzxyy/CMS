/**
 * 判断str 是否是字符串
 * @param {*} str 
 */
export function isString(str) {
  return typeof str === "string";
}
/**
 * 判断obj 是否是对象
 * @param {*} obj 
 */
export function isObject(obj) {
  return Object.prototype.toString.call(obj) === "[object object]"
}