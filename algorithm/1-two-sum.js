// 两数之和：https://leetcode-cn.com/problems/two-sum/

// 给定一个整数数组nums和一个整数目标值target
// 在该数组中找出和为目标值target的2个整数，并返回它们的数组下标。

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */

// 思路：使用map，降低时间复杂度

function sum (arr, target) {
  if (!arr.length) return []
  let map = {}
  let res = []
  arr.forEach((it, idx) => {
    if (map[target - it]) {
      res = [map[target - it] - 1, idx]
    } else {
      map[it] = idx + 1
    }
  });
  return res
}

console.log(sum([1, 2, 3, 4], 3))
