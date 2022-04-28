// 实现 Node util.promisify 方法

// const util = require('util');
// fs.readFile('text.txt', 'utf8', function(err, result) {
//   console.error('Error: ', err); 
//   console.log('Result: ', result); // Nodejs Callback 转 Promise 对象测试
// });

// const { promisify } = require('util');
// const readFilePromisify = util.promisify(fs.readFile); // 转化为 promise
// readFilePromisify('text.txt', 'utf8')
//   .then(result => console.log(result)) // Nodejs Callback 转 Promise 对象测试
//   .catch(err => console.log(err));

// 思路：fn 返回的是一个 Promise 对象，在返回的 Promise 对象里执行 callback 函数

function promisify(fn) {
  if (typeof fn !== 'function') throw new Error('param should be a function!')
  return function(...arg) {
    return new Promise((resolve, reject) => {
      try {
        fn.apply(this, arg, (err, result) => {
          if (err) {
            reject(err)
          } else {
            resolve(result)
          }
        }) 
      } catch (error) {
        reject(error)
      }
      
    })
  }
}