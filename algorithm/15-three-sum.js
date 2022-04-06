// 三数之和：https://leetcode-cn.com/problems/3sum/

// 给定一个整数数组nums和一个整数目标值target
// 在该数组中找出和为目标值target的3个整数，并返回它们的数组下标。

// 思路：
// 1. 先将数组升序排序，遍历数组
// 2. 在循环中使用双指针指向数组头尾，通过和target比较大小移动指针，直到找到3个整数，结束循环

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

// 进阶，返回所有能组成target的数组

// 思路：前面思路同上，找到后不结束循环，继续查找，同时比较当前找到的数组和已找到的数组是否重复

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