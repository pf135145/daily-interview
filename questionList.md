# 复习清单

以周为单位

## 20220418-20220422

本周日程安排**优先级**：

1. 前端知识
2. js 基础
3. 算法题

建议白天学习前端知识和 js 基础，晚上学习算法题

### 前端知识--前端工程化之 webpack

作业：完成笔记记录后，周日巩固画出一个思维导图

- [x] webpack 如何配置，常见的配置项有哪些 => 上周完成的 config 配置重点关于 optimization 没有描述
- [ ] webpack 热更新如何开启，热更新的原理
- [ ] webpack 构建的流程
- [ ] webpack 如何提升构建速度
- [ ] 多进程构建的原理
- [ ] webpack5 的配置项目和 webpack4 的差别
- [ ] webpack5 的优势

### js 基础题

https://muyiy.cn/question/

- [ ] 1.手写 async/await 实现，其内部远离
- [ ] 2.实现一个 node 异步函数的 promisify
- [x] 3.实现 obj2json 函数
- [x] 4.手写继承 原型链继承、类继承、组合继承、寄生组合继承、es6 继承。ES5/ES6 继承除了写法上还有什么区别( (https://muyiy.cn/question/js/7.html )
- [x] 5.介绍下 Set、Map、WeakSet 和 WeakMap 的区别？(https://muyiy.cn/question/js/4.html)
- [x] 6.介绍模块化发展历程：可从 IIFE、AMD、CMD、CommonJS、UMD、webpack(require.ensure)、ES Module、<script type="module"> 这几个角度考虑。(https://muyiy.cn/question/js/7.html)
- [x] 7.全局作用域中，用 const 和 let 声明的变量不在 window 上，那到底在哪里？如何去获取？(https://muyiy.cn/question/js/27.html) var、let 和 const 区别的实现原理是什么

周末集中练习 看代码写出运行结果(https://muyiy.cn/question/)

### 算法题

周一：

- [x] https://leetcode-cn.com/problems/search-in-rotated-sorted-array/
- [x] https://leetcode-cn.com/problems/multiply-strings/

周二：

- [x] https://leetcode-cn.com/problems/permutations/
- [x] https://leetcode-cn.com/problems/rotate-list/

周三：

- [ ] https://leetcode-cn.com/problems/unique-paths/
- [ ] https://leetcode-cn.com/problems/subsets/

周四：

- [x] https://leetcode-cn.com/problems/linked-list-cycle-ii/
- [x] https://leetcode-cn.com/problems/sort-list/

周五：

- [x] https://leetcode-cn.com/problems/lru-cache/
- [ ] https://leetcode-cn.com/problems/kth-largest-element-in-an-array/

周末：

- [ ] https://leetcode-cn.com/problems/best-time-to-buy-and-sell-stock-ii/
- [ ] https://leetcode-cn.com/problems/kth-smallest-element-in-a-bst/
- [ ] https://leetcode-cn.com/problems/lowest-common-ancestor-of-a-binary-tree/
- [ ] https://leetcode-cn.com/problems/product-of-array-except-self/

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
     ，间隔一定的时间再重试(请求一个资源，如果返回 404，可在 1s 后重试，重试 3 次还返回 404 就返回错误信息)

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

- [x] 9. 实现深拷贝，尽可能想的全面(Symbol 类型数据，自己引用自己的对象，简单数据类型)

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
