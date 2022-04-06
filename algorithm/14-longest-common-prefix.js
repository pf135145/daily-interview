// 最长公共前缀：https://leetcode-cn.com/problems/longest-common-prefix/

// 编写一个函数来查找字符串数组中的最长公共前缀。
// 如果不存在公共前缀，返回空字符串 ""。

// 思路：存储公共前缀，逐一对比

/**
 * @param {string[]} strs
 * @return {string}
 */
 var longestCommonPrefix = function(strs) {
  if (!strs.length) return ''
  let res = strs[0]
  function compaire(str1, str2) {
      let res = ''
      let len = str1.length > str2.length ? str2.length : str1.length
      for (let i=0; i<len; i++) {
          if (str1[i] === str2[i]) {
              res += str1[i]
          } else {
              break
          }
      }
      return res
  }
  strs.forEach(it => {
      res = compaire(it, res)
  })
  return res
};