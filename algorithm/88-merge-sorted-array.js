// 合并两个有序数组：https://leetcode-cn.com/problems/merge-sorted-array/
// 给你两个按 非递减顺序 排列的整数数组 nums1 和 nums2，另有两个整数 m 和 n ，
// 分别表示 nums1 和 nums2 中的元素数目。

// 思路：双指针，从 nums1 数组后面往前对比

/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
 var merge = function(nums1, m, nums2, n) { 
  let curIdx = m + n - 1
  m = m - 1
  n = n -1
  while (m >= 0 && n >= 0) {
      if (nums1[m] <= nums2[n]) {
          nums1[curIdx] = nums2[n]
          n--
      } else {
          nums1[curIdx] = nums1[m]
          m--
      }
      curIdx--
  }
  if (m < 0 && curIdx >= 0) {
      for(let i=0; i<=curIdx; i++)
      nums1[i] = nums2[i]
  }
};