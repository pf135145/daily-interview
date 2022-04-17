// 整数反转：https://leetcode-cn.com/problems/reverse-integer/

// 给你一个 32 位的有符号整数 x ，返回将 x 中的数字部分反转后的结果。
// 如果反转后整数超过 32 位的有符号整数的范围 [−231,  231 − 1] ，就返回 0。

// 思路：转换数组翻转，注意负数

/**
 * @param {number} x
 * @return {number}
 */
 var reverse = function(x) {
  let isNegative = x > 0 ? false : true
  let str = String(Math.abs(x))
  let res = str.split('').reverse().join('')
  if (isNegative) res = Number(res) * -1;
  let max = Math.pow(2, 31)
  if (res > max - 1 || res < Math.pow(-2, 31)) res = 0
  return res
};