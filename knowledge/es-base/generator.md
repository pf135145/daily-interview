### Generator 函数

*  Generator 函数会返回一个遍历器对象，也就是说，Generator 还是一个遍历器对象生成函数
*  Generator 函数有两个特征。一是，function关键字与函数名之间有一个星号；二是，函数体内部使用yield表达式

```js
function* helloWorldGenerator() {
  yield 'hello';
  yield 'world';
  return 'ending';
}

var hw = helloWorldGenerator();
```

Generator 函数的调用方法与普通函数一样，不同的是，调用 Generator 函数后，该函数并不执行，而是返回一个遍历器对象（Iterator Object）。

下一步，必须调用遍历器对象的next方法，函数内部代码就开始执行，直到遇到下一个 yield 表达式（或return语句）为止。换言之，Generator 函数是分段执行的，yield 表达式是暂停执行的标记，而 next 方法可以恢复执行。

```js
hw.next()
// { value: 'hello', done: false }

hw.next()
// { value: 'world', done: false }

hw.next()
// { value: 'ending', done: true }

hw.next()
// { value: undefined, done: true }
```
#### yield 表达式

遍历器对象的next方法的运行逻辑如下：

* 遇到 yield 表达式，就暂停执行后面的操作，并将紧跟在 yield 后面的那个表达式的值，作为返回的对象的 value 属性值
* 下一次调用 next 方法时，再继续往下执行，直到遇到下一个 yield 表达式
* 如果没有再遇到新的 yield 表达式，就一直运行到函数结束，直到 return 语句为止，并将 return 语句后面的表达式的值，作为返回的对象的 value 属性值
* 如果该函数没有 return 语句，则返回的对象的 value 属性值为 undefined

#### next 方法的参数

yield 表达式本身没有返回值，或者说总是返回 undefined。next 方法可以带一个参数，该参数就会被当作上一个 yield 表达式的返回值。

```js
function* f() {
  var a = yield 1;
  console.log(a); // undefined
  var b = yield 2; // next 函数传入的参数会被当作 yield 的返回值
  console.log(b); // 1
}

var g = f();

g.next()
g.next(1)
```