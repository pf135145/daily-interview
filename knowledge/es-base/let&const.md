## let&const

### 不存在变量提升

let 所声明的变量一定要在声明后使用，否则报错。

```
// var 的情况
console.log(foo); // 输出undefined
var foo = 2;

// let 的情况
console.log(bar); // 报错ReferenceError
let bar = 2;
```

### 暂时性死区

在代码块内，使用let命令声明变量之前，该变量都是不可用的。

```
if (true) {
  // TDZ开始
  tmp = 'abc'; // ReferenceError
  console.log(tmp); // ReferenceError

  let tmp; // TDZ结束
  console.log(tmp); // undefined

  tmp = 123;
  console.log(tmp); // 123
}
// 上面代码中，在let命令声明变量tmp之前，都属于变量tmp的“死区”。
```

### 不允许重复声明

```
// 报错
function func() {
  let a = 10;
  var a = 1;
}

// 报错
function func() {
  let a = 10;
  let a = 1;
}

function func(arg) {
  let arg;
}
func() // 报错
```

### const 特有属性

const 声明一个只读的常量，声明后不能改变，声明后必须初始化

```
const PI = 3.1415;
PI = 3;
// 报错：TypeError: Assignment to constant variable.

const foo;
// 报错：SyntaxError: Missing initializer in const declaration
```

### 全局作用域

在ES5中，顶层对象的属性和全局变量是等价的，var 命令和 function 命令声明的全局变量，也是顶层对象。

ES6规定，let、const、class声明的全局变量，不属于顶层对象的属性。因此不在全局对象中，相当于在全局作用域中定义了一个块级作用域，不在window属性中

```
let aa = 1;

console.log(window.aa); // undefined
console.log(aa); // 1
```

### 内部原理

var：会直接在栈内存里预分配内存空间，然后等到实际语句执行的时候，再存储对应的变量，如果传的是引用类型，那么会在堆内存里开辟一个内存空间存储实际内容，栈内存会存储一个指向堆内存的指针

let：是不会在栈内存里预分配内存空间，而且在栈内存分配变量时，做一个检查，如果已经有相同变量名存在就会报错

const：也不会预分配内存空间，在栈内存分配变量时也会做同样的检查。不过const存储的变量是不可修改的，对于基本类型来说你无法修改定义的值，对于引用类型来说你无法修改栈内存里分配的指针，但是你可以修改指针指向的对象里面的属性

* let 的「创建」过程被提升了，但是初始化没有提升。
* var 的「创建」和「初始化」都被提升了。
* function 的「创建」「初始化」和「赋值」都被提升了。