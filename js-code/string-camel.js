// 字符串变驼峰 border-bottom-color -> borderBottomColor

// 正则
function toCamel(str) {
  if (typeof str !== 'string') return 
  let reg = /\-(.)?/g
  return str.replace(reg, (match, p1)=>p1.toUpperCase())
}

// 转换数组替换首字母
function toCamel2(str) {
  if (typeof str !== 'string') return 
  let arr = str.split('-')
  return arr.map((it, idx) => {
    if (idx !== 0) {
      it = it.charAt(0).toUpperCase() + it.substring(1)
    }
    return it
  }).join('')
}
console.log(toCamel('border-bottom-color'))
