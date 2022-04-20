// 搜索旋转排序数组：https://leetcode-cn.com/problems/search-in-rotated-sorted-array/

// 思路：先找到旋转搜索树中的最小值，然后判断出target所在的数组区间，使用二分查找找到target

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
 var search = function(nums, target) {
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
  let lN = 0
  let rN = nums.length - 1
  
  if (mid != 0) {
      if (target == nums[0]) return 0
      if (target > nums[0]) rN = mid - 1
      if (target < nums[0]) lN = mid
  }
  let midN = Math.floor((lN+rN) / 2)
  while (lN <= rN) {
      if (nums[midN] == target)  return midN
      if (target > nums[midN]) lN = midN + 1
      if (target < nums[midN]) rN = midN - 1
      midN = Math.floor((lN+rN) / 2)
  }
  return -1;
};