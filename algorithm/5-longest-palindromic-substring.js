// 最长回文子串：https://leetcode-cn.com/problems/longest-palindromic-substring/

// 给你一个字符串 s，找到 s 中最长的回文子串。

// 思路：动态规划，找每个位置所能组成的最大回文子串

/**
 * @param {string} s
 * @return {string}
 */
 var longestPalindrome = function(s) {
  let max = s[0]
  for (let i=1; i<=s.length; i++) {
      let str = findBypos(s.slice(0,i));
      max = max.length > str.length ? max : str
  }
  function isPalindrome(x) {
      let str = String(x)
      if (!str.length) return false
      let len = str.length
      let mid = Math.floor(len / 2)
      for (let i=0; i<=mid; i++) {
          if(str[i] !== str[len - i - 1]) {
              return false
          }
      }
      return true
  }
  function findBypos(str) {
      let i=0;
      let res = ''
      while (i < str.length) {
          let n = str.slice(i)
          if (isPalindrome(n)) {
              res = n
              break
          }
          i++
      }
      return res
  }
  return max
};