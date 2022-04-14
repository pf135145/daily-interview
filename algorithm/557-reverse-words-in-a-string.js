// 反转字符串中的单词 III：https://leetcode-cn.com/problems/reverse-words-in-a-string-iii/

// 思路：利用空格分割成数组，数组每项反转

 /**
 * @param {string} s
 * @return {string}
 */

// 思路：字符串处理
var reverseWords = function(s) {
  let arr = s.split(' ')
  let res = arr.map(it => it.split('').reverse().join(''))
  return res.join(' ')
};