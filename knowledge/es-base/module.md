## 模块化

模块化主要是用来抽离公共代码，隔离作用域，避免变量冲突

### IIFE 立即执行函数

在一个单独的函数作用域中执行代码，避免变量冲突。

```
(function(){
  return {
	data:[]
  }
})()
```
### AMD

AMD 异步模块化规范，require.js 本实现了这个规范

对于浏览器，因为模块都放在服务器端，等待时间取决于网速的快慢，可能要等很长时间，因此不能采用同步加载，只能异步加载

AMD也采用require()语句加载模块，但是不同于CommonJS，它要求两个参数：

```
require([module], callback);
// [module]，是一个数组，就是要加载的模块；callback，加载成功之后的回调

require(['math'], function (math) {
　　math.add(2, 3);
});
```

### CommonJS

CommonJS 同步模块化规范，node 实现了这个规范，每一个JS文件就是一个模块

因为服务端模块都存放在本地硬盘，等待时间就是硬盘的读取时间，时间很短，所以可以同步加载

```
var math = require('math');
math.add(2,3); // 5
```

#### 模块缓存

当我们在一个项目中多次 require 同一个模块时，CommonJS并不会多次执行该模块文件；而是在第一次加载时，将模块缓存；以后再加载该模块时，就直接从缓存中读取该模块：

```
//number.js
console.log('run number.js')
module.exports =  {
    num: 1
}

//main.js
let number1 = require("./number");

let number2 = require("./number");
number2.num = 2

let number3 = require("./number");
console.log(number3)

// run number.js
// { num: 2 } 

// 可以通过delete require.cache[modulePath]将缓存的模块删除
```

#### 加载机制

模块输出的是一个值的复制拷贝；对于基本数据类型的输出，属于复制，对于复杂数据类型，属于浅拷贝：

```
// number.js
let num = 1
function add() {
    num++
}
module.exports.num = num
module.exports.add = add

// main.js
var number = require('./number')
//1
console.log(number.num)

number.add()
//1
console.log(number.num)

number.num = 3
//3
console.log(number.num)
```

由于是值的复制，一旦模块输出了值，模块内部的变化就影响不到这个值；在输出后可以对这个值进行任意的编辑。

对于复杂数据类型，由于进行了浅拷贝，因此如果两个脚本同时引用了同一个模块，对该模块的修改会影响另一个模块。

由于加载过程发生在代码的运行阶段，而在模块被执行前，没有办法确定模块的依赖关系，这种加载加载方式称为运行时加载；由于CommonJS运行时加载模块，我们甚至能够通过判断语句，动态的选择去加载某个模块：

```
let num = 10;
if (num > 2) {
    var a = require("./a");
} else {
    var b = require("./b");
}

var moduleName = 'number.js'
var number = require(`./${moduleName}`)
// 但也正是由于这种动态加载，导致没有办法在编译时做静态优化。
```

#### 循环加载

由于缓存机制的存在，CommonJS的模块之间可以进行循环加载，而不用担心引起死循环，一旦某个模块被循环加载，就只输出已经执行的部分，还未执行的部分不会输出。

#### 总结

* CommonJS 模块由 JS 运行时实现。
* CommonJs 是单个值导出，本质上导出的就是 exports 属性。
* CommonJS 是可以动态加载的，对每一个加载都存在缓存，可以有效的解决循环引用问题。
* CommonJS 模块同步加载并执行模块文件。

### ES6

ES6模块化的设计思想是尽量的静态化，使得在编译时就能够确定模块之间的依赖关系。利用ES6模块静态化加载方案，就可以实现Tree Shaking来优化代码。

#### 加载机制

ES6模块只是输出的是一个对外的接口，我们可以把这个接口理解为一个引用，并且是**只读引用**

```
//obj.js
let num = 1
let list = [1,2]
export { num, list }

//main.js
import { num, list } from './obj.js'

num = 3    //Error: "num" is read-only.
list = [3, 4]   //Error: "list" is read-only.
```

#### 循环引用

与 Common.js 不同的是 ，ES6 模块提前加载并执行模块文件，ES6 模块在预处理阶段分析模块依赖，在执行阶段执行模块，两个阶段都采用深度优先遍历，执行顺序是子 -> 父。

```
// main.js
console.log('main.js开始执行')
import say from './a'
import say1 from './b'
console.log('main.js执行完毕')

// a.js
import b from './b'
console.log('a模块加载')
export default  function say (){
    console.log('hello , world')
}

// b.js
console.log('b模块加载')
export default function sayhello(){
    console.log('hello,world')
}
```

#### 总结

* ES6 Module 静态的，不能放在块级作用域内，代码发生在编译时。
* ES6 Module 的值是动态绑定的，可以通过导出方法修改，可以直接访问修改结果。
* ES6 Module 可以导出多个属性和方法，可以单个导入导出，混合导入导出。
* ES6 模块提前加载并执行模块文件，
* ES6 Module 导入模块在严格模式下。
* ES6 Module 的特性可以很容易实现 Tree Shaking 和 Code Splitting。
