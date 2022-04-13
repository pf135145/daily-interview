// 千分位格式化数字

// 正则，使用先行断言，(?=p)，改正则表示匹配 p 前面的位置
function splitNum(num) {
  if (typeof num === 'number') num = String(num)
  let reg = /(\d{1,3})(?=(\d{3})+\b)/g
  // 考虑有小数点
  if (num.indexOf('.') !== -1) {
    let front = num.split('.')[0]
    let behind = num.split('.')[1]
    return front.replace(reg, '$1,') + '.' + behind.replace(reg, '$1,')
  } else {
    return num.replace(reg, '$1,')
  }
}


// 循环
function splitNum2(num) {
  if (typeof num === 'number') num = String(num)
  let startN = num.length % 3
  let res = ''
  res = num.slice(0, startN)
  while (startN + 3 <= num.length) {
    res = res + ',' + num.slice(startN, startN + 3)
    startN += 3
  }
  return res
}
console.log(splitNum2(12345678))
