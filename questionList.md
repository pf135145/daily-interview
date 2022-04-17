# 复习清单

以周为单位

## 20220411-20220417

### 前端知识

- [x] webpack 如何配置，常见的配置项有哪些
- [ ] webpack 热更新如何开启，热更新的原理
- [ ] webpack 构建的流程
- [ ] webpack 如何提升构建速度
- [ ] 多进程构建的原理
- [ ] webpack5 的配置项目和 webpack4 的差别
- [ ] webpack5 的优势

### js 手写题

- [x] 1. 实现 new 操作
- [x] 2. 实现并行限制的 Promise

```js
/*
JS实现一个带并发限制的异步调度器Scheduler，保证同时运行的任务最多有两个。
完善下面代码的Scheduler类，使以下程序能够正常输出：
class Scheduler {
  add(promiseCreator) { ... }
  // ...
}

const timeout = time => {
  return new Promise(resolve => {
    setTimeout(resolve, time)
  }
})

const scheduler = new Scheduler()

const addTask = (time,order) => {
  scheduler.add(() => timeout(time).then(()=>console.log(order)))
}

addTask(1000, '1')
addTask(500, '2')
addTask(300, '3')
addTask(400, '4')

// output: 2 3 1 4
整个的完整执行流程：

起始1、2两个任务开始执行
500ms时，2任务执行完毕，输出2，任务3开始执行
800ms时，3任务执行完毕，输出3，任务4开始执行
1000ms时，1任务执行完毕，输出1，此时只剩下4任务在执行
1200ms时，4任务执行完毕，输出4
*/
```

- [x] 3.Promise.all/race/allSeleted
- [x] 4.requestAnimationFrame 实现 setTimeout/setInterval
- [x] 5.手机号码 3-3-4 分割
- [x] 6.千分位格式化数字

```js
// 将0.12345678变成0.12,345,678
```

- [x] 7.字符串变驼峰
- [ ] 8.手写 async/await 实现，其内部远离
- [ ] 9.实现一个 node 异步函数的 promisify
- [ ] 10.实现 obj2json 函数

```js
const data1 = {"a.b.c": 1, "a.b.d": 2}
const data2 = {"a.b.e": 3, "a.b.f": 4} // 把如上两个对象合并成一个JSON
//得到结果
{
  a: {
    b: {
      c: 1,
      d: 2,
      e: 3,
      f: 4
    }
  }
}
```

### 算法题

周一：

- [x] 1.https://leetcode-cn.com/problems/single-number/
- [x] 2.https://leetcode-cn.com/problems/contains-duplicate/

周二：全是简单链表题不要害怕

- [x] 3.https://leetcode-cn.com/problems/linked-list-cycle/
- [x] 4.https://leetcode-cn.com/problems/intersection-of-two-linked-lists/
- [x] 5.https://leetcode-cn.com/problems/reverse-linked-list/
- [x] 6.https://leetcode-cn.com/problems/delete-node-in-a-linked-list/

周三：

- [x] 7.https://leetcode-cn.com/problems/contains-duplicate/
- [x] 8.https://leetcode-cn.com/problems/reverse-string/
- [x] 9.https://leetcode-cn.com/problems/reverse-words-in-a-string-iii/

周四：

- [x] 10.https://leetcode-cn.com/problems/lowest-common-ancestor-of-a-binary-search-tree/
- [x] 11.https://leetcode-cn.com/problems/add-two-numbers/

周五：

- [x] 12.https://leetcode-cn.com/problems/longest-palindromic-substring/
- [x] 13.https://leetcode-cn.com/problems/reverse-integer/

周末：

- [x] 14.https://leetcode-cn.com/problems/container-with-most-water/
- [x] 15.https://leetcode-cn.com/problems/3sum/
- [x] 16.https://leetcode-cn.com/problems/3sum-closest/
- [ ] 17.https://leetcode-cn.com/problems/search-in-rotated-sorted-array/
- [ ] 18.https://leetcode-cn.com/problems/multiply-strings/
- [ ] 19.https://leetcode-cn.com/problems/permutations/

## 20220406-20220410

### js 手写题

- [x] 1. 写一个 function(fun, times, interval)，使其在 interval 时间间隔中，执行 times 次 fun 函数

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

- [x] 2. 手写 bind/call/apply 函数

- [x] 3. 实现 duplicate 方法

```js
const a = 'abc';
const b = a.duplicate();
console.log(b); // 'abcabc'
```

- [x] 4. 比较项目的两个版本号
     var versions=['1.45.0','1.5','6','3.3.3.3.3.3.3']，要求从小到大排序，注意'1.45'比'1.5'大
     var sorted=['1.5','1.45.0','3.3.3.3.3.3','6']

- [x] 5. 实现 retryFetch 重试功能，可在规定次数内失败可以重试
     ，间隔一定的时间再重试（请求一个资源，如果返回 404，可在 1s 后重试，重试 3 次还返回 404 就返回错误信息）

```js
function retryFetch(fn, delay, times) {}
```

- [x] 6. 二进制转为数字，数字专为二进制
- [x] 7. 实现一个发布订阅，on/off/once/emit
- [x] 8. koa 洋葱模型

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

- [x] 9. 实现深拷贝，尽可能想的全面（Symbol 类型数据，自己引用自己的对象，简单数据类型）

- [x] 10. 取出连续重复字符的个数
      'asdfglaaabbbcccddddddeeeeeefaew' 返回 5。
      使用两个方法作答，正常遍历和正则表达式

### 算法题

- [x] 1. https://leetcode-cn.com/problems/palindrome-number/
- [x] 2. https://leetcode-cn.com/problems/longest-common-prefix/
- [x] 3. https://leetcode-cn.com/problems/valid-parentheses/
- [x] 4. https://leetcode-cn.com/problems/merge-two-sorted-lists/
- [x] 5. https://leetcode-cn.com/problems/remove-duplicates-from-sorted-array/
- [x] 6. https://leetcode-cn.com/problems/maximum-subarray/
- [x] 7. https://leetcode-cn.com/problems/climbing-stairs/
- [x] 8. https://leetcode-cn.com/problems/merge-sorted-array/
- [x] 9. https://leetcode-cn.com/problems/maximum-depth-of-binary-tree/
- [x] 10. https://leetcode-cn.com/problems/best-time-to-buy-and-sell-stock/
