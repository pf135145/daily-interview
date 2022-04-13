// 手机号码 3-4-4 分割

// 正则
function splitPhoneNum(num) {
  if (typeof num === 'number') num = String(num)
  let reg = /(^\d{3}|\d{4}\B)/g
  return num.replace(reg, '$1-')
}

console.log(splitNum(13001137556))