// 实现koa洋葱模型

// koa洋葱模型
// const app = require('./');
// app.use((next) => {
//   console.log(1);
//   next();
//   console.log(2);
// });
// app.use((next) => {
//   console.log(3);
//   next();
//   console.log(4);
// });
// app.use((next) => {
//   console.log(5);
//   next();
//   console.log(6);
// });
// app.compose();
// 输出结果  1 3 5 6 4 2

// 提示：先实现以下效果
const arr = [];
arr.push((next) => {
  console.log(1);
  next();
  console.log(2);
});
arr.push((next) => {
  console.log(3);
  next();
  console.log(4);
});
arr.push((next) => {
  console.log(5);
  next();
  console.log(6);
});
compose(arr);

// 思想：递归思想，next()时先执行下一个middleware

function compose(middleware) {
  async function dispatch(i) {
    const fn = middleware[i]
    if (!fn) return
    await fn(function next() {
      dispatch(i + 1)
    })
  }
  return dispatch(0);
}