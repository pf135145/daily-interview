// 给定一个函数，实现：
// sum(1, 2, 3)
// sum(1, 2)(3)
// sum(1)(2)(3)

// 思路：闭包保存参数，当参数达到3个时返回结果

function sum (...args) {
  function process(...innerArgs) {
    args = args.concat(innerArgs)
    if (args.length == 3) {
      return args.reduce((a, b) => a + b)
    } else {
      return process
    }
  }
  return process()
}

// console.log(sum(1, 2, 3))

// 进阶：不限制参数个数
// sum(1)(2, 3)(4)(5, 6).valueOf() // 21

// 思路：通过重写 valueOf 方法，返回所有参数的加和

function sum2 (...args) {
  function process(...innerArgs) {
    args = args.concat(innerArgs)
    return process
  }
  process.valueOf = function() {
    return args.reduce((a, b) => a + b)
  }
  return process()
}

console.log(sum2(1)(2, 3)(4)(5, 6).valueOf())