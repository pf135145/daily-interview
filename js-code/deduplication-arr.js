// 数组去重的方法

// 对象
function duplication1(arr) {
  if (!Array.isArray(arr) || arr.length < 2 ) return arr
  let obj = {}
  arr.forEach((it, idx) => {
    obj[it] = idx
  });
  return Object.keys(obj).map(it => +it)
}

//indexOf
function duplication2(arr) {
  if (!Array.isArray(arr) || arr.length < 2 ) return arr
  let res = []
  arr.forEach(it => {
    if (res.indexOf(it) === -1) res.push(it)
  }) 
  return res
}
function fn (arr) {
  return arr.reduce((list, cur) => {
    if (!list.includes(cur)) {
      list.push(cur)
    }
    return list
  }, [])
}

// set
function duplication3(arr) {
  if (!Array.isArray(arr) || arr.length < 2 ) return arr
  return [...new Set(arr)]
}

// console.log(duplication1([1,2,1,1,1]))
// console.log(duplication2([1,2,1,1,1]))
// console.log(duplication3([1,2,1,1,1]))

let a = [1,1,2]
let res = fn(a)
console.log('res', res)
