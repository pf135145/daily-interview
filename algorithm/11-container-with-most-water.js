// 盛最多水的容器：https://leetcode-cn.com/problems/container-with-most-water/

// 给定一个长度为 n 的整数数组 height 。有 n 条垂线，第 i 条线的两个端点是 (i, 0) 和 (i, height[i]) 。
// 找出其中的两条线，使得它们与 x 轴共同构成的容器可以容纳最多的水。

// 思路：双指针排除一些无用的判断（在循环比较时，当前指针那一项值较小时移动）

/**
 * @param {number[]} height
 * @return {number}
 */
 var maxArea = function(height) {
  let left = 0
  let right = height.length - 1
  let max = (right -left) * Math.min(height[left], height[right])
  while (left < right) {
      if (height[left] > height[right]) {
          right --
      } else {
          left ++
      }
      let curSize = (right - left) * Math.min(height[left], height[right])
      max = Math.max(max, curSize)
  }
  return max
};