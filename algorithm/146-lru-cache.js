// LRU 缓存：https://leetcode-cn.com/problems/lru-cache/

// 思路：使用map结构存储数据，如果当前值存在，每次操作要删除重新赋值

// 请你设计并实现一个满足  LRU (最近最少使用) 缓存 约束的数据结构。
/**
 * @param {number} capacity
 */
 var LRUCache = function(capacity) {
  this._capacity = capacity
  this._data = new Map()
};

/** 
 * @param {number} key
 * @return {number}
 */
LRUCache.prototype.get = function(key) {
  let res = -1
  if (this._data.has(key)) {
    let val = this._data.get(key)
    this._data.delete(key)
    this._data.set(key, val)
    res = val
  }
  return res
};

/** 
 * @param {number} key 
 * @param {number} value
 * @return {void}
 */
LRUCache.prototype.put = function(key, value) {
  if (this._data.has(key)) {
    this._data.delete(key)
  } else {
    if (this._capacity === this._data.size) {
      // map.key 方法返回键名的遍历器，调用next方法获取第一个值，依次往后
      let delKey = this._data.keys().next().value
      this._data.delete(delKey)
    }
  }
  this._data.set(key, value)
};