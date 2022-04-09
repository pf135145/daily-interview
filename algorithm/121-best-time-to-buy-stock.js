// 买卖股票的最佳时机：https://leetcode-cn.com/problems/best-time-to-buy-and-sell-stock/
// 给定一个数组 prices ，它的第 i 个元素 prices[i] 表示一支给定股票第 i 天的价格。
// 你只能选择 某一天 买入这只股票，并选择在 未来的某一个不同的日子 卖出该股票。设计一个算法来计算你所能获取的最大利润。

// 思路：动态规划题，定义一个最大获利，和一个最小股价，不断更新

/**
 * @param {number[]} prices
 * @return {number}
 */
 var maxProfit = function(prices) {
  let arr = []
  arr[0] = 0
  if (prices.length == 1) return 0
  let minPrice = prices[0]
  let max = 0
  for (let i=1; i<prices.length; i++) {
      arr[i] = Math.max(prices[i] - minPrice, max)
      max =  Math.max(arr[i], max)
      minPrice = Math.min(prices[i], minPrice)
  }
  return max
};