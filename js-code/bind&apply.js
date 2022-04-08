// 实现call/apply/bind

// 思路：call/apply 通过把调用的fn挂载到context上执行，通过eval执行，实现传参
Function.prototype.call2 = function(context) {
  let self = Object(context) || window;
  let fn = this
  let args = []
  self.fn = this
  for (let i=1; i<arguments.length; i++) {
    args.push('arguments[' + i + ']');
  }
  let res = eval('self.fn(' + args +')');
  delete self.fn
  return res
} 

Function.prototype.apply2 = function(context) {
  let self = Object(context) || window;
  let fn = this
  let args = []
  self.fn = this
  if (arguments[1]) {
    for (let i=0; i<arguments[1].length; i++) {
      args.push('arguments[1][' + i + ']');
    }
  }
  let res = eval('self.fn(' + args +')');
  delete self.fn
  return res
} 

Function.prototype.bind2 = function(context) {
  let self = this
  let outArg = [].slice.call(arguments, 1)
  return function(){
    let args = [].slice.call(arguments)
    self.apply(context, args.concat(outArg))
  }
}

var foo = {
  value: 2
}

function bar(name, age) {
  console.log(name, age)
}

// bar.call2(foo)
// bar.apply2(foo)
// bar.bind2(foo, 'xiaoming')(12)