// 删除有序数组中的重复项：https://leetcode-cn.com/problems/remove-duplicates-from-sorted-array/

// 给你一个升序排列的数组nums ，请你原地删除重复出现的元素，使每个元素只出现一次，
// 返回删除后数组的新长度。元素的相对顺序应该保持一致 。

// 思路：使用快慢指针，在循环中判断前后值相等时向后移动快指针

/**
 * @param {number[]} nums
 * @return {number}
 */
 var removeDuplicates = function(nums) {
  if (nums.length < 2) return nums
  let after = 1
  let before = 0
  while (after < nums.length) {
      if (nums[before] === nums[after]) {
          after ++
      } else {
          before ++
          nums[before] = nums[after]
      }
  }
  return before + 1
};