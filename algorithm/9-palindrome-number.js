// 回文数：https://leetcode-cn.com/problems/palindrome-number/

// 给你一个整数x，如果x是一个回文整数，返回true；否则，返回false 

// 思路1：双指针，从开始和结尾向中间移动
// 思路2：从中间对折，判断对折后是否相等

/**
 * @param {number} x
 * @return {boolean}
 */
 var isPalindrome = function(x) {
  let str = String(x)
  if (!str.length) return false
  let len = str.length
  let mid = Math.floor(len / 2)
  for (let i=0; i<=mid; i++) {
      console.log(i)
      if(str[i] !== str[len - i - 1]) {
          return false
      }
  }
  return true
};