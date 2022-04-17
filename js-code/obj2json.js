// 实现
const data1 = {"a.b.c": 1, "a.b.d": 2}
const data2 = {"a.b.e": 3, "a.b.f": 4} 
// 得到结果
// {
//   a: {
//     b: {
//       c: 1,
//       d: 2,
//       e: 3,
//       f: 4
//     }
//   }
// }

function transData(arr, value){
  let res = {}
  let head = res
  for (let i=0; i< arr.length; i++) {
    let cur = arr[i]
    if (i + 1< arr.length) {
      let o = {}
      head[cur] = o
      head = o
    } else {
      head[cur] = value
    }
  }
  return res
}

function obj2json(obj1, obj2) {
  let temp = Object.assign(obj1, obj2)
  let list = []
  for (let key in temp) {
    let arr = key.split('.')
    list.push(transData(arr, temp[key]))
  }
  return Object.assign(...list)
}
// 有问题 没做完
console.log(obj2json(data1, data2))
