// 最大子数组和：https://leetcode-cn.com/problems/maximum-subarray/
// 给你一个整数数组 nums ，请你找出一个具有最大和的连续子数组（子数组最少包含一个元素），返回其最大和。
// 子数组 是数组中的一个连续部分。

//思路：动态规划题，arr[i]为当前包含nums[i]元素所能组成的最大子数和

/**
 * @param {number[]} nums
 * @return {number}
 */
 var maxSubArray = function(nums) {
  let arr = []
  arr[0] = nums[0]
  if (nums.length == 1) return arr[0]
  let max = arr[0]
  for (let i=1; i<nums.length; i++) {
      arr[i] = Math.max(nums[i], arr[i-1] + nums[i])
      max = Math.max(max, arr[i])
  }
  return max
};