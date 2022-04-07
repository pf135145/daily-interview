// 将数组 A 转成 res 格式对象
// 规则：父子关系：子pid == 父id，pid为null则为根节点

const A = [{
  pid: null,
  name: '1',
  id: 1
}, {
  pid: 2,
  id: 4,
  name: '1-1-1'
}, {
  pid: 1,
  id: 2,
  name: '1-1'
}, {
  pid: 1,
  id: 3,
  name: '1-2'
}, {
  pid: 3,
  id: 5,
  name: '1-2-1'
},
{
  pid: 5,
  id: 6,
  name: '1-2-1-1'
}]

res = {
  id: 1,
  name: '1',
  children: [{
    id: 2,
    name: '1-1',
    children: [{
      id: 4,
      name: '1-1-1',
    }]
}, {
    id: 3,
    name: '1-2',
    children: [{
      id: 5,
      name: '1-2-1',
    }]
  }]
}

// 思路：创建两个对象，一个用来存储数组A，一个用来存储返回结果
// 在data对象中处理children的引用

function transformListToTree(arr) {
  let data = {}
  let res = {}
  arr.forEach(it => {
    data[it.id] = it
  })
  console.log(data)
  for (let id in data) {
    const item = data[id]
    if (!item.pid) {
      res = item
    } else {
      data[item.pid].children = data[item.pid].children || []
      data[item.pid].children.push(item)
    }
  }
  return res
}
transformListToTree(A)
// console.log(transformListToTree(A))