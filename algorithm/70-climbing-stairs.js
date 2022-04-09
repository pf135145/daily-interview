// 爬楼梯：https://leetcode-cn.com/problems/climbing-stairs/
// 假设你正在爬楼梯。需要 n 阶你才能到达楼顶。
// 每次你可以爬 1 或 2 个台阶。你有多少种不同的方法可以爬到楼顶呢？

// 思路：动态规划问题，先把问题分解成最小条件，然后循环求值

/**
 * @param {number} n
 * @return {number}
 */
 var climbStairs = function(n) {
  let arr = []
  arr[1] = 1
  arr[2] = 2
  for (let i=3; i<=n; i++) {
      arr[i] = arr[i-1] + arr[i-2]
  }
  return arr[n]
};