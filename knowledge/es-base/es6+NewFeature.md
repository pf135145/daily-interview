## es6+ 常用特性，都解决了什么问题

ES6 的特性是使用最多的，包括类、模块化、箭头函数、函数参数默认值、模板字符串、解构赋值、延展操作符、Promise、let 与 const等等，这部分已经是开发必备了，没什么好说的

另外还有：

- ES7 的 `Array.prototype.includes()` 
- ES8 的 async/await 、String padding: `padStart()`和`padEnd()` 、 `Object.values()`
- ES9 的 Rest/Spread 属性、for await of、 `Promise.finally()`
- ES10 的 `Array.prototype.flat()` 、 `Array.prototype.flatMap()` 、String的 `trimStart()` `trimEnd()` 
- ES11 的 `Promise.allSettled` 、空值处理及可选链
- ES12 的逻辑赋值操作符、数字分隔符、 `Promise.any()`

## 最有用的 

ES6 的特性都很有用，ES7-ES11中，我比较感兴趣的是：

- ES8 的 async/await
- ES9 的 for await of
- ES11 的 `Promise.allSettled` 、ES9 的 `Promise.finally()` 、ES12 的 `Promise.any()`
- 还有常用的逻辑操作：逻辑赋值操作符、数字分隔符、空值处理及可选链等都很大的简洁优化了我们的代码

其中，async/await 异步终极解决方案，`for await of` 异步串行，`Promise.allSettled` 解决了 `Promise.all` 的只要一个请求失败了就会抛出错误的问题，当我们一次发起多个请求时，所有结果都能返回，无论成功或失败，等等等，不了解的可以往下查找

下面列一下所有的特性，查漏补缺

## ES6（ES2015）

- 类
- 模块化
- 箭头函数
- 函数参数默认值
- 模板字符串
- 解构赋值
- 扩展操作符
- 对象属性简写
- Promise
- let 与 const

具体不再冗余介绍，这个属于前端基础

## ES7（ES2016）

- Array.prototype.includes()

- 指数操作符

### Array.prototype.includes()

```js
[1, 2].includes(1) // true
```

### 指数操作符

```js
2**5 // 32
```

## ES8（ES2017）

- async/await
- Object.values()
- Object.entries()
- String padding: `padStart()`和`padEnd()`，填充字符串达到当前长度
- Object.getOwnPropertyDescriptors()
- 函数参数列表结尾允许逗号
- SharedArrayBuffer对象
- Atomics对象

### async/await

异步终极解决方案

```js
async getInfo(){
    const res = await api.getData()
    // ... 
}
```

### Object.values()

```js
Object.values({a: 1, b: 2, c: 3}) 
// [1, 2, 3]
```



### Object.entries()

```js
Object.values({a: 1, b: 2, c: 3}) 
// [["a", 1], ["b", 2], ["c", 3]]
```



### String padding: `padStart()`和`padEnd()`

**padStart()** 方法用另一个字符串填充当前字符串(如果需要的话，会重复多次)，以便产生的字符串达到给定的长度。从当前字符串的左侧开始填充

```js
// padStart
'sister'.padStart(7, '0') // "0sister"
// padEnd
'sister'.padEnd(7, '0') // "sister0"
```

### Object.getOwnPropertyDescriptors()

`Object.getOwnPropertyDescriptors()` 函数用来获取一个对象的所有自身属性的描述符，如果没有任何自身属性，则返回空对象

### 函数参数列表结尾允许逗号

这是一个不痛不痒的更新，主要作用是方便使用git进行多人协作开发时修改同一个函数减少不必要的行变更

## ES9（ES2018）

- 异步迭代（for await of）
- Promise.finally()
- Rest/Spread 属性
- 新的正则表达式特性
  - 正则表达式反向断言（lookbehind）
  - 正则表达式dotAll模式
  - 正则表达式命名捕获组（Regular Expression Named Capture Groups）
  - 正则表达式 Unicode 转义
  - 非转义序列的模板字符串



### 异步迭代（for await of）

`await` 可以和 `for…of` 循环一起使用，以串行的方式运行异步操作

```js
async function getInfos(arr) {
  for await (let i of arr) {
    getData(i)
  }
}
```

### Promise.finally()

无论 `Promise` 运行成功还是失败，都会运行 `finally`

```js
function getInfos() {
  getData1()
  .then(getData2)
  .catch(err => {
    console.log(err);
  })
  .finally(() => {
    // ...
  });
}
```



### Rest/Spread 属性

```js
const values = [1, 2, 3]
console.log( Math.min(...values) ) // 1
```



### 新的正则表达式特性

#### 正则表达式命名捕获组（Regular Expression Named Capture Groups）

在一些正则表达式模式中，使用数字进行匹配可能会令人混淆。例如，使用正则表达式 `/(\d{4})-(\d{2})-(\d{2})/` 来匹配日期。因为美式英语中的日期表示法和英式英语中的日期表示法不同，所以很难区分哪一组表示日期，哪一组表示月份

```js
const re = /(\d{4})-(\d{2})-(\d{2})/;
const match= re.exec('2019-01-01');
console.log(match[0]);    // → 2019-01-01
console.log(match[1]);    // → 2019
console.log(match[2]);    // → 01
console.log(match[3]);    // → 01
```

ES9引入了命名捕获组，允许为每一个组匹配指定一个名字，既便于阅读代码，又便于引用。

```js
const re = /(?<year>\d{4})-(?<month>\d{2})-(?<day>\d{2})/;
const match = re.exec('2019-01-01');
console.log(match.groups);          // → {year: "2019", month: "01", day: "01"}
console.log(match.groups.year);     // → 2019
console.log(match.groups.month);    // → 01
console.log(match.groups.day);      // → 01
```

#### 正则表达式反向断言（lookbehind）

```js
let test = 'hello sisteran'
console.log(test.match(/(?<=sisteran\s)hello/))
// ["hello", index: 6, input: "sisteran hello", groups: undefined]
```



#### 正则表达式dotAll模式

正则表达式中，点（.）是一个特殊字符，代表任意的单个字符，但是有两个例外。一个是四个字节的 UTF-16 字符，这个可以用u修饰符解决；另一个是行终止符,如换行符(\n)或回车符(\r),这个可以通过ES9的s(dotAll)flag，在原正则表达式基础上添加s表示:

```js
console.log(/foo.bar/.test('foo\nbar')) // false
console.log(/foo.bar/s.test('foo\nbar')) // true
```

那如何判断当前正则是否使用了 dotAll 模式呢？

```Js
const re = /foo.bar/s // Or, `const re = new RegExp('foo.bar', 's');`.
console.log(re.test('foo\nbar')) // true
console.log(re.dotAll) // true
console.log(re.flags) // 's' 
```

#### 正则表达式 Unicode 转义

引入了一种新的类的写法\p{...}和\P{...}，允许正则表达式匹配符合 Unicode 某种属性的所有字符

#### 非转义序列的模板字符串

之前，`\u`开始一个 unicode 转义，`\x`开始一个十六进制转义，`\`后跟一个数字开始一个八进制转义。这使得创建特定的字符串变得不可能，例如Windows文件路径 `C:\uuu\xxx\111`。

更多细节参考[模板字符串](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/template_strings)。

## ES10（ES2019）

- 新增了Array的 `flat()` 方法和 `flatMap()` 方法
- 新增了String的 `trimStart()` 方法和 `trimEnd()` 方法
- `Object.fromEntries()`
- `Symbol.prototype.description()`
- `Function.prototype.toString()` 现在返回精确字符，包括空格和注释
- 简化 `try {} catch {}` ，修改 `catch` 绑定



### 新增了Array的 `flat()` 方法和 `flatMap()` 方法

`flat()` 和 `flatMap()` 本质上就是是归纳（reduce） 与 合并（concat）的操作

```js
[1, 2, [3, 4]].flat(Infinity); // [1, 2, 3, 4]

[1, 2, 3, 4].flatMap(a => [a**2]); // [1, 4, 9, 16]
```

### 新增了String的 `trimStart()` 方法和 `trimEnd()` 方法

分别去除字符串首尾空白字符

### `Object.fromEntries()`

> 返回一个给定对象自身可枚举属性的键值对数组

Object.fromEntries() 是 Object.entries() 的反转

- 通过 Object.fromEntries， 可以将 Map 转化为 Object:

```js
const map = new Map([ ['foo', 'bar'], ['baz', 42] ]);
const obj = Object.fromEntries(map);
console.log(obj); // { foo: "bar", baz: 42 }
```

- 通过 Object.fromEntries， 可以将 Array 转化为 Object:

```js
const arr = [ ['0', 'a'], ['1', 'b'], ['2', 'c'] ];
const obj = Object.fromEntries(arr);
console.log(obj); // { 0: "a", 1: "b", 2: "c" }
```

### `Symbol.prototype.description()`

> 只读属性，回 Symbol 对象的可选描述的字符串。

```js
Symbol('description').description; // 'description'
```

### `Function.prototype.toString()` 现在返回精确字符，包括空格和注释

```js
function /* comment */ foo /* another comment */() {}

// 之前不会打印注释部分
console.log(foo.toString()); // function foo(){}

// ES2019 会把注释一同打印
console.log(foo.toString()); // function /* comment */ foo /* another comment */ (){}

// 箭头函数
const bar /* comment */ = /* another comment */ () => {};

console.log(bar.toString()); // () => {}
```

### 简化 `try {} catch {}` ,修改 `catch` 绑定

```js
try {} catch(e) {}
```

现在是

```js
try {} catch {}
```

 

## ES11（ES2020）

-  `Promise.allSettled()`
- 可选链（Optional chaining）
- 空值合并运算符（Nullish coalescing Operator）
-  `import()` 
-  `globalThis` 
-   `BigInt`
-  `String.prototype.matchAll`

### Promise.allSettled

与 `Promise.all` 不同的是，它会返回所有的 promise 结果

```js
const promise1 = Promise.resolve('hello')
const promise2 = new Promise((resolve, reject) => setTimeout(reject, 200, 'problem'))

Promise.allSettled([promise1, promise2])
    .then((values) => {
        console.log(values)
    })
```

![](http://resource.muyiy.cn/image/20210422073838.png)

### 可选链（Optional chaining）

`可选链` 可让我们在查询具有多层级的对象时，不再需要进行冗余的各种前置校验。

```js
var name = user && user.info && user.info.name;
```

又或是这种

```js
var age = user && user.info && user.info.getAge && user.info.getAge();
```

很容易命中 `Uncaught TypeError: Cannot read property...` 

用了 Optional Chaining ，上面代码会变成

```js
var name = user?.info?.name;
```

```js
var age = user?.info?.getAge?.();
```

### 空值合并运算符（Nullish coalescing Operator）

设置一个默认的值

```Js
var level =  user.data.level || '暂无等级';
```

来看看用空值合并运算符如何处理

```js
// {
//   "level": 0   
// }
var level = user.level ?? '暂无等级'; // level -> 0


// {
//   "an_other_field": 0   
// }
var level = user.level ?? '暂无等级'; // level -> '暂无等级'

```

### import()

按需加载

### globalThis

globalThis 目的就是提供一种标准化方式访问全局对象，有了 globalThis 后，你可以在任意上下文，任意时刻都能获取到全局对象

### BigInt

**BigInt** 是一种内置对象，它提供了一种方法来表示大于 `253 - 1` 的整数。这原本是 Javascript中可以用 [`Number`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Number) 表示的最大数字。**BigInt** 可以表示任意大的整数

### String.prototype.matchAll()

`matchAll()` 方法返回一个包含所有匹配正则表达式及分组捕获结果的迭代器

## ES12（ES2021）

- String.prototype.replaceAll()
-  Promise.any()
-  WeakRef
- 逻辑赋值操作符（Logical Assignment Operators）
- 数字分隔符（Numeric separators）

### String.prototype.replaceAll()

> 返回一个全新的字符串，所有符合匹配规则的字符都将被替换掉

```js
const str = 'sisteran';
str.replaceAll('s', 'q'); // 'qiqteran'
```

###  Promise.any()

Promise.any() 接收一个Promise可迭代对象（例如数组），

- 只要其中的一个 promise 成功，就返回那个已经成功的 promise 
- 如果可迭代对象中没有一个 promise 成功（即所有的 promises 都失败/拒绝），就返回一个失败的 promise

### WeakRef

使用WeakRefs的Class类创建对对象的弱引用(对对象的弱引用是指当该对象应该被GC回收时不会阻止GC的回收行为)

### 逻辑赋值操作符（Logical Assignment Operators）

```js
a ||= b
//等价于
a = a || (a = b)

a &&= b
//等价于
a = a && (a = b)

a ??= b
//等价于
a = a ?? (a = b)
```



### 数字分隔符（Numeric separators）

```js
const money = 1_000_000_000 // 1000000000
```
