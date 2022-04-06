function sum (...args) {
  function process(...innerArgs) {
    args = args.concat(innerArgs)
    // if (args.length == 3) {
    //   return args.reduce((a, b) => a + b)
    // } else {
    //   return process
    // }
    return process
  }
  process.valueOf = function() {
    return args.reduce((a, b) => a + b)
  }
  return process()
}

// console.log(sum(1, 2, 3).valueOf());
// console.log(sum(1, 2)(3).valueOf());
// console.log(sum(1)(2)(3).valueOf());

// sum(1, 2, 3).valueOf() // 6
// sum(1, 2)(3).valueOf() // 6
// sum(1)(2)(3).valueOf() // 6

// // => 进阶

console.log(sum(1)(2, 3)(4)(5, 6).valueOf()) // 21