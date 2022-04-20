// 字符串相乘：https://leetcode-cn.com/problems/multiply-strings/

// 给定两个以字符串形式表示的非负整数 num1 和 num2，返回 num1 和 num2 的乘积，它们的乘积也表示为字符串形式。

// 思路：拆分每一位，单独相乘注意进位，乘后相加，注意补“0”

/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
 var multiply = function(num1, num2) {
  if (num1 == '0' || num2 == '0') return '0'
  let result = '0'
  for (let i=0; i<num1.length;i++) {
      let add = 0
      let j = num2.length - 1;
      let res = []
      for (; j>=0; j--) {
          let temp = num2[j] * num1[i]
          temp += add
          res.push(temp % 10)
          add = Math.floor(temp / 10)
      }
      if (add > 0) res.push(add)
      let tar = res.reverse().join('')
      let zeroN = num1.length - 1 - i
      for (let z=0; z< zeroN; z++) {
          tar += '0'
      }
      result = addString(result, tar)
  }
  function addString(num1, num2) {
      let i = num1.length - 1, j = num2.length - 1, add = 0;
      const ans = [];
      while (i >= 0 || j >= 0 || add != 0) {
          const x = i >= 0 ? num1.charAt(i) - '0' : 0;
          const y = j >= 0 ? num2.charAt(j) - '0' : 0;
          const result = x + y + add;
          ans.push(result % 10);
          add = Math.floor(result / 10);
          i -= 1;
          j -= 1;
      }
      return ans.reverse().join('');
  }
  return result
};