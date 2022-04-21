// 全排列：https://leetcode-cn.com/problems/permutations/

// 给定一个不含重复数字的数组 nums，返回其所有可能的全排列 。你可以按任意顺序返回答案。

// 思路：把数字想象成一颗树，通过回溯+深度优先遍历实现全排列

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
 var permute = function(nums) {
  let res = []
  let hash = {}
  let len = nums.length
  function dfs(path) {
      if (path.length === len) {
          res.push(path.slice())
          return
      }
      for (let i=0; i<len; i++) {
          let cur = nums[i]
          if (hash[cur]) continue
          path.push(cur)
          hash[cur] = true
          dfs(path)
          path.pop(cur)
          hash[cur] = false
      }
  }
  dfs([])
  return res
};