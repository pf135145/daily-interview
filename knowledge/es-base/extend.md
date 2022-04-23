## 继承

继承是一个**类**想要享有另一个**类**的属性和方法，是类和类的关系，注意和实例化区分

### 原型链

构造函数、原型和实例的关系:每个构造函数都有一个原型对象，原型有 一个属性指回构造函数，而实例有一个内部指针指向原型。如果原型是另一个类型的实例呢?那就意味 着这个原型本身有一个内部指针指向另一个原型，相应地另一个原型也有一个指针指向另一个构造函 数。这样就在实例和原型之间构造了一条原型链。

### 组合继承

```js
// 组合继承
function Parent(name, age) {
	this.name = name;
	this.age = age
}
Parent.prototype.sayHi = function(){
	console.log('hi')
}

function Child(name, age) {
	Parent.call(this, name, age)
}

Child.prototype = new Parent()
Child.prototype.constructor = Child

```

### 寄生组合式继承

```js
// 寄生组合式继承
function Parent(name, age) {
	this.name = name;
	this.age = age
}

Parent.prototype.sayHi = function(){
	console.log('hi')
}

function Child(name,age) {
	Parent.call(this, name, age);
}

Child.prototype = Object.create(Parent.prototype);
Child.prototype.constructor = Child

Object.create = function (obj) {
	function F() {}
	F.prototype = obj;
	return new F();
};

```
### es6继承

```js
class Point {
	constructor(name, age) {
		this.name = name;
		this.age = age;
	}

	sayHi() {
		console.log('hi')
	}
}

class ColorPoint extends Point {

}
// 等同于（系统自动实现）
class ColorPoint extends Point {
  constructor(...args) {
    super(...args); // super 的作用相当于借用构造函数的继承
  }
}

let p = new ColorPoint('lisi');
p.name // 'lisi'
p.sayHi(); // 'hi'

// 主动使用super
class Point {
	constructor(name, age) {
		this.name = name;
		this.age = age;
	}

	sayHi() {
		console.log('hi')
	}
}

class ColorPoint extends Point {
  constructor(name, age, sex) {
    super(name, age); // super必须最先调用
    this.sex = sex;
  }
}

let p = new ColorPoint('lisi', 12, 'male');
p.sex // 'male'
p.sayHi(); // 'hi'
```

### 区别