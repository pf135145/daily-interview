const a = [{
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

/**
 * a  转成 res
 */





//
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

function handleArr(arr) {
    let start = arr.find(it => {
        return it.pid === null
    })
    let obj = {}
    obj.name = start.name
    obj.id = start.id
    process(obj, arr)
    return obj
}

function process(obj, arr) {
    let children = []
    arr.forEach(it => {
        if (it.pid == obj.id) {
            children.push(it)
        }
    })
    obj.children = children.map(item => {
        return {
            id: item.id,
            name: item.name,
            children: []
        }
    })
    console.log(children)
    for(let i=0; i<obj.children.length; i++) {
      process(obj.children[i], arr)
    }
}


// console.log(handleArr(a))

// 小燕解法
function transformListToTree (list) {
  let data = {}
  let res = {}
  list.map(item => {
    data[item.id] = item
  })
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

console.log(transformListToTree(a))