// 写一个 function(fun, times, interval)，执行 times 次 fun 函数，时间间隔为 interval
function repeat(fun, times, wait) {
  function process() {
    if (times > 0) {
      setTimeout(() => {
        fun()
        times --
        process()
      }, wait)
    }
  }
  process()
}

function say() {
  console.log('hello')
}

repeat(say, 5, 3000);
// hello
// hello
// hello