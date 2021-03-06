// 实现koa洋葱模型，题干见每日一题

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