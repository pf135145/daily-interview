// 实现深克隆

// 思路：递归处理值为对象的情况，考虑数组类型，用map处理循环引用

function deepClone(target, map = new WeakMap()) {
  if (typeof target === 'object') {
    let cloneObj = Array.isArray(target) ? [] : {}
    if (map.get(target)) {
      return map.get(target)
    }
    map.set(target, cloneObj)
    for (let key in target) {
      cloneObj[key] = deepClone(target[key], map)
    }
    return cloneObj
  } else {
    return target
  }
}