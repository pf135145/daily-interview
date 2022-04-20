// 二分查找：https://leetcode-cn.com/problems/binary-search/

// 给定一个 n 个元素有序的（升序）整型数组 nums 和一个目标值 target 
// 写一个函数搜索 nums 中的 target，如果目标值存在返回下标，否则返回 -1。

// 思路：取中间值，比较目标值和中间值大小，相等则返回，
// 目标值大于中间值，左指针移动到中间，否则右指针移动到中间

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
 var search = function(nums, target) {
  let l = 0
  let r = nums.length - 1
  let mid = Math.floor((l + r) / 2 )
  while (l <= r) {
      if (target == nums[mid]) {
          return mid
      } else if (target < nums[mid]) {
          r = mid - 1
      } else {
          l = mid + 1
      }
      mid = Math.floor((l + r) / 2 )
  }
  return -1
};