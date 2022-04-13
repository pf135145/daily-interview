// 千分位格式化数字

// 正则，使用先行断言，(?=p)，改正则表示匹配 p 前面的位置
function splitNum(num) {
  if (typeof num === 'number') num = String(num)
  let reg = /(\d{1,3})(?=(\d{3})+\b)/g
  return num.replace(reg, '$1,')
}

console.log(splitNum(12345678))
