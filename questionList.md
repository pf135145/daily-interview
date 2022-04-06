# 复习清单

以周为单位

## 20220406-20220410

### js 手写题

1. 写一个 function(fun, times, interval)，使其在 interval 时间间隔中，执行 times 次 fun 函数

```js
function repeat(fun, times, wait) {}
let fn = repeat(
  (name) => {
    console.log('输出', name);
  },
  5,
  3000
);
fn('zhaifu');
```

2. 手写 bind/call/apply 函数

3. 实现 duplicate 方法

```js
const a = 'abc';
const b = a.duplicate();
console.log(b); // 'abcabc'
```

4. 比较项目的两个版本号
   var versions=['1.45.0','1.5','6','3.3.3.3.3.3.3']，要求从小到大排序，注意'1.45'比'1.5'大
   var sorted=['1.5','1.45.0','3.3.3.3.3.3','6']

5. 实现 retryFetch 重试功能，可在规定次数内失败可以重试
   ，间隔一定的时间再重试（请求一个资源，如果返回 404，可在 1s 后重试，重试 3 次还返回 404 就返回错误信息）

```js
function retryFetch(fn, delay, times) {}
```

6. 二进制转为数字，数字专为二进制
7. 实现一个发布订阅，on/off/once/emit
8. koa 洋葱模型

```js
// koa洋葱模型
const app = require('./');
app.use((next) => {
  console.log(1);
  next();
  console.log(2);
});
app.use((next) => {
  console.log(3);
  next();
  console.log(4);
});
app.use((next) => {
  console.log(5);
  next();
  console.log(6);
});
app.compose();
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

function compose(arr) {}
```

9. 实现深拷贝，尽可能想的全面（Symbol 类型数据，自己引用自己的对象，简单数据类型）

10. 取出连续重复字符的个数
    'asdfglaaabbbcccddddddeeeeeefaew' 返回 5。
    使用两个方法作答，正常遍历和正则表达式

### 算法题

1. https://leetcode-cn.com/problems/palindrome-number/
2. https://leetcode-cn.com/problems/longest-common-prefix/
3. https://leetcode-cn.com/problems/valid-parentheses/
4. https://leetcode-cn.com/problems/merge-two-sorted-lists/
5. https://leetcode-cn.com/problems/remove-duplicates-from-sorted-array/
6. https://leetcode-cn.com/problems/maximum-subarray/
7. https://leetcode-cn.com/problems/climbing-stairs/
8. https://leetcode-cn.com/problems/merge-sorted-array/
9. https://leetcode-cn.com/problems/maximum-depth-of-binary-tree/
10. https://leetcode-cn.com/problems/best-time-to-buy-and-sell-stock/
