// 数组去重

// 对象
function duplication1(arr) {
  if (!Array.isArray(arr) || arr.length < 2 ) return arr
  let obj = {}
  arr.forEach((it, idx) => {
    obj[it] = idx
  });
  return Object.keys(obj).map(it => +it)
}

// reduce
function duplication2(arr) {
  if (!Array.isArray(arr) || arr.length < 2 ) return arr
  return arr.reduce((pre, cur) => {
    if (pre.indexOf(cur) === -1) {
      pre.push(cur)
    }
    return pre
  }, [])
}

// set
function duplication3(arr) {
  if (!Array.isArray(arr) || arr.length < 2 ) return arr
  return [...new Set(arr)]
}


// console.log(duplication1([1,2,1,1,1]))
// console.log(duplication2([1,2,1,1,1]))
// console.log(duplication4([1,2,1,1,1]))
