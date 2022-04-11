// 实现 new 操作

// new 关键字会进行如下的操作：

// 1.创建一个空的简单JavaScript对象（即{}）；
// 2.为步骤1新创建的对象添加属性__proto__，将该属性链接至构造函数的原型对象 ；
// 3.将步骤1新创建的对象作为this的上下文 ；
// 4.如果该函数有返回值且返回值为对象，则返回改对象，否则返回this。


function new_(classFn, ...arg) {
  let obj = new Object()
  obj.__proto__ = classFn.protorype
  let res = classFn.apply(obj, arg)
  return typeof res === 'object' ? res : obj;
}