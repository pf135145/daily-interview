// 取出连续重复字符的个数 'asdfglaaabbbcccddddddeeeeeefaew' 返回 4


// 遍历，双指针，判断前后字符串是否相等，然后累加
function repeatNum_(str) {
  let cur = str[0]
  let last = str[0]
  let res = 0
  let curNum = 1
  for (let i=1; i<str.length; i++) {
    if (last == str[i]) {
      cur = cur + str[i]
      curNum ++
    } else {
      if (cur.length > 1) {
        res ++
      }
      cur = last = str[i]
    }
  }
  return res
}

// 正则，反向引用，"\1"表示的引用之前的那个分组
function repeatNum(num) {
  let reg = /(.)\1+/g
  let res = []
  let fisrt = reg.exec(num)
  while (fisrt) {
    res.push(fisrt[0])
    fisrt = reg.exec(num)
  }
  return res.length
}

console.log(repeatNum('asdfglaaabbbcccddddddeeeeeefaew'))