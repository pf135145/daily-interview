## Map 和 WeakMap 以及它们的区别？

JavaScript 的对象（Object），本质上是键值对的集合（Hash 结构），但是传统上只能用字符串当作键。这给它的使用带来了很大的限制。

```
const data = {};
const element = document.getElementById('myDiv');

data[element] = 'metadata';
data['[object HTMLDivElement]'] // "metadata"
```
上面代码原意是将一个 DOM 节点作为对象data的键，但是由于对象只接受字符串作为键名，所以element被自动转为字符串[object HTMLDivElement]。


### Map

* map也是键值对的集合，map的key可以是普通的值，也可以是对象

```js
let map = new Map();
const age = [1, 2];

map.set(age, 12);
map.set('name', 'lisi');

map.get(age) // 12
map.get('name') // 'lisi'
```

* map构造函数接收一个数组或者实现了 Iterator 接口的数据结构作为参数

```js
let set = new Set([
	['foo', 1],
	['bar', 2]
])

let map = new Map(set);
map.get('foo') // 1

```

* 如果对同一个键多次赋值，后面的值将覆盖前面的值。

```js
const map = new Map();

map
.set(1, 'aaa')
.set(1, 'bbb');

map.get(1) // "bbb"
```

* 属性和方法：
	* size：返回 Map 结构的成员总数
	* set(key, value)：设置键名key对应的键值为value，，然后返回整个 Map 结构
	* get(key)：get方法读取key对应的键值，如果找不到key，返回undefined。
	* has(key)：返回一个布尔值，表示某个键是否在当前 Map 对象之中。
	* delete(key)：删除某个键，返回true。如果删除失败，返回false。
	* clear()：清除所有成员，没有返回值。

* 遍历（同set）

### WeakMap

* WeakMap 只接受对象作为键名（null除外），不接受其他类型的值作为键名。

```js
const map = new WeakMap();
map.set(1, 2)
// TypeError: 1 is not an object!
```

* 其次，WeakMap的键名所指向的对象，不计入垃圾回收机制。WeakMap的设计目的在于，有时我们想在某个对象上面存放一些数据，但是这会形成对于这个对象的引用。一旦不再需要这两个对象，我们就必须手动删除这个引用。

```js
const e1 = document.getElementById('foo');
const arr = [
  [e1, 'foo 元素'],
];

arr [0] = null; // 不需要的时候，必须手动删除引用
```

* WeakMap 与 Map 在 API 上的区别主要是两个，一是没有遍历操作，也没有 size 属性。
* WeakMap 只有四个方法可用：get()、set()、has()、delete()。
* 用途（DOM 节点作为键名）：

```js
let myElement = document.getElementById('logo');
let myWeakmap = new WeakMap();

myWeakmap.set(myElement, {timesClicked: 0});

myElement.addEventListener('click', function() {
  let logoData = myWeakmap.get(myElement);
  logoData.timesClicked++;
}, false);
```

### WeakMap使用场景

WeakMap的**键名**所引用的对象都是弱引用，不计入垃圾回收机制。只要所引用的对象的其他引用都被清除，垃圾回收机制就会释放该对象所占用的内存。

WeakMap的使用场景就是，它的键所对应的对象，可能会在将来消失。WeakMap结构有助于防止内存泄漏。

注意，WeakMap 弱引用的只是键名，而不是键值。键值依然是正常引用。

[WeakMap 弱引用示例](https://es6.ruanyifeng.com/#docs/set-map#WeakMap-%E7%9A%84%E7%A4%BA%E4%BE%8B)


















