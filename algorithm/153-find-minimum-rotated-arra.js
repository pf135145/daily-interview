// 寻找旋转排序数组中的最小值：https://leetcode-cn.com/problems/find-minimum-in-rotated-sorted-array/

// 思路：二分查找，取中间值，与最右边比较，若小于右边，则右指针移动到中间，
// 否则左指针移动到中间位置+1，直到找出最小值

/**
 * @param {number[]} nums
 * @return {number}
 */
 var findMin = function(nums) {
  let l = 0
  let r = nums.length - 1
  let mid = Math.floor((l+r) / 2)
  while(l < r) {
      if (nums[mid] < nums[r]) {
          r = mid
      } else {
          l = mid + 1
      }
      mid = Math.floor((l+r) / 2)
  }
  return nums[mid]
};