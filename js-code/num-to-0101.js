// 将二进制转化为十进制，将十进制转化为二进制

// 直接使用api方法（不能处理负数和小数）：

// 二进制转十进制
function to10Num(num) {
  return parseInt(num, 2)
}

// 二进制转十进制
function to2Num(num) {
  return num.toString(2)
}


// 计算方法：将二进制数每位计算相应的2的平方，然后加和
//二进制转十进制
function to10Num_(str) {
  let arr = String(str).split('').reverse().map(it => Number(it))
  console.log(arr)
  return arr.reduce((pre, cur, idx) => {
    return pre + cur * Math.pow(2, idx)
  }, 0)
}

// 计算方法：除2取余，负数取反加1
// 十进制转二进制
function to2Num_(num) {
  let res = []
  let isNegative = num > 0 ? false : true
  num = Math.abs(num)
  while(num / 2) {
    res.unshift(num % 2)
    num = Math.floor(num / 2)
  }
  if (isNegative) {
    res = res
      .map(it => it = it == 1 ? 0 : 1 )
      .reverse()
    let progress = true;
    let i=0;
    while(progress && i<res.length) {
      if (res[i] == 0) {
        res[i] = 1
        progress = false
      } else {
        res[i] = 0
      }
      i ++
    }
    if (progress) res.push(1)
    res = res.reverse()
  }
  return res.join('')
}
console.log(to2Num_(-42))
