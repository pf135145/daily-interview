// 实现 duplicate 方法

// const a = 'abc';
// const b = a.duplicate(1); // 'abc'
// const b = a.duplicate(2); // 'abcabc'

String.prototype.duplicate = function(count) {
  let str = '' + this;
  if (!count || typeof count !== 'number' || count < 1) return str
  count = Math.floor(count)
  let res = ''
  for(let i=0; i<count; i++) {
    res += str
  }
  return res
}

let a = 'abc';
let b = a.duplicate(); // 'abc'
let c = a.duplicate(2); // 'abcabc'

console.log(b, c)