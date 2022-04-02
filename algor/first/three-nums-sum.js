// 实现⼀个函数，list是整形数组，target都是⼀个整数，
// 从list中取出3个整数，使它们的和为target，返回由这3个数组成的数组，否则返回null
function sum(list, target) {
    if(list.length < 3) return null
    list.sort((a, b) => a - b)
    for (let i=0; i< list.length; i++) {
        let j = i + 1;
        let z = list.length - 1
        while (j < z) {
            if (list[i] + list[j] +  list[z] < target) {
                j++
            } else if (list[i] + list[j] +  list[z] > target) {
                z--
            } else {
                return [list[i] , list[j] ,  list[z]]
            }
        }
    }
    return null
}

// console.log(sum([1,3,5,6,1,3,4], 8))

// 题型2，返回所以能组成target的数组

function sum2(list, target) {
    if(list.length < 3) return null
    let res = []
    list.sort((a, b) => a - b)
    for (let i=0; i< list.length; i++) {
        let j = i + 1;
        let z = list.length - 1
        while (j < z) {
            if (list[i] + list[j] +  list[z] < target) {
                j++
            } else if (list[i] + list[j] +  list[z] > target) {
                z--
            } else {
                if (!compareArr(res, [list[i],list[j],list[z]])) {
                    res.push([list[i],list[j],list[z]])
                }
                j++
            }
        }
    }
    return res.length ? res : null
}

function compareArr(arr1, arr2) {
    return arr1.find(it => it.join() === arr2.join()) ? true : false
}

// console.log(sum2([1,1, 1, 1], 3))