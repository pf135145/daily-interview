### Set 和 WeakSet 以及它们的区别？

#### set

* es6 一种新的数据结构，set函数可以接受一个数组（或者具有 iterable 接口的其他数据结构）作为参数，用来初始化。

```js
const s = new Set();
const set = new Set([1, 2, 3, 4]);
console.log(set)
// Set(4) {1, 2, 3, 4}
```

* 值不能重复，区分类型，set中 '5' 和 5 是不同的，set中的两个对象总是不相等的，但是两个**NAN**是相等的

```js
const set1 = new Set([1, 2, 3, 4, 4, '4']);
[...set1]
// [1, 2, 3, 4, '4']

let set2 = new Set();
set2.add({});
set2.size // 1
set2.add({});
set2.size // 2
```

* 方法：
	* add(value)：添加某个值，返回 Set 结构本身。
	* delete(value)：删除某个值，返回一个布尔值，表示删除是否成功。
	* has(value)：返回一个布尔值，表示该值是否为Set的成员。
	* clear()：清除所有成员，没有返回值。
	
```js
let s = new Set();
s.add(1).add(2);

s.size // 2

s.has(1) // true
s.has(3) // false

s.delete(2);
s.has(2) // false
```

* 遍历，keys方法、values方法、entries方法返回的都是遍历器对象，需要借助 for...of 遍历，Set 结构没有键名，只有键值（或者说键名和键值是同一个值），所以keys方法和values方法的行为完全一致。
	* keys()：返回键名的遍历器
	* values()：返回键值的遍历器
	* entries()：返回键值对的遍历器
	* forEach()：使用回调函数遍历每个成员

```js
let set = new Set(['red', 'green', 'blue']);

for (let item of set.keys()) {
  console.log(item);
}

for (let item of set.values()) {
  console.log(item);
}
// red
// green
// blue

for (let item of set.entries()) {
  console.log(item);
}
// ["red", "red"]
// ["green", "green"]
// ["blue", "blue"]

set.forEach((value, key) => console.log(key + ' : ' + value))
// 同数组的 forEach 方法
```

* 数组去重，数组的 map 和 filter 方法也可以间接用于 Set

```js
var arr1 = [1, 2, 2, 3, 4]
var arr2 = [...new Set(arr1)];
console.log(arr2);
// output: Array [1, 2, 3, 4]
```

#### Weakset

WeakSet 结构与 Set 类似，也是不重复的值的集合。但是，它与 Set 有两个区别。

* 首先，WeakSet 的成员只能是对象，而不能是其他类型的值。
* 其次，WeakSet 中的对象都是弱引用，即垃圾回收机制不考虑 WeakSet 对该对象的引用，也就是说，如果其他对象都不再引用该对象，那么垃圾回收机制会自动回收该对象所占用的内存，不考虑该对象还存在于 WeakSet 之中。

```js
const a = [[1, 2], [3, 4]];
const ws = new WeakSet(a);
```
作为构造函数，WeakSet 可以接受一个数组或类似数组的对象作为参数。
注意，是a数组的成员成为 WeakSet 的成员，而不是a数组本身。这意味着，数组的成员只能是对象。

* 方法（用法同set）：
	* add(value)：向 WeakSet 实例添加一个新成员。
	* delete(value)：清除 WeakSet 实例的指定成员。
	* has(value)：返回一个布尔值，表示某个值是否在 
* WeakSet 没有size属性，没有办法遍历它的成员。
