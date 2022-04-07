// 将对象扁平化，并且合并属性名称

let data = {
  nio: {
    byb: [1,2],
    xpev: {
      li: 1,
      vi: {
        k: [3]
      }
    },
    c: 2
  },
  tsla: 3
}
// 输出： { nio_byb: [ 1, 2 ], nio_xpev_li: 1, nio_xpev_vi_k: [ 3 ], nio_c: 2 ,tsla: 3 }

// 思路：递归便利对象，合并对象属性名称

function handleObj(obj) {
  let res = {}
  process(res, obj, '')
  return res
}

function process(res, obj, pre) {
  for (let key in obj) {
    if (typeof obj[key] != 'object' || Array.isArray(obj[key])) {
      if (pre) {
        res[`${pre}_${key}`] = obj[key]
      } else {
        res[key] = obj[key]
      }
    } else {
      let newPre = pre ? `${pre}_${key}` : key
      process(res, obj[key], newPre)
    }
  }
}
