// 有效的括号：https://leetcode-cn.com/problems/valid-parentheses

// 给定一个只包括 '('，')'，'{'，'}'，'['，']' 的字符串 s ，判断字符串是否有效
// 有效字符串需满足：
// 左括号必须用相同类型的右括号闭合，左括号必须以正确的顺序闭合。

// 思路：
// 使用一个map，key&value分别存储括号左右
// 判断是左括号压栈，判断是右括号弹出栈顶元素判断

/**
 * @param {string} s
 * @return {boolean}
 */
 var isValid = function(s) {
  if (!s) return false
  let map = {
      '(': ')',
      '{': '}',
      '[': ']'
  }
  let stack = []
  for (let i=0; i<s.length; i++) {
      if (map[s[i]]) {
          stack.push(s[i])
      } else {
          let len = stack.length
          if (map[stack[len -1]] === s[i]) {
              stack.pop()
          } else {
              break
          }
      }
  }
  return stack.length === 0 ? true : false
};