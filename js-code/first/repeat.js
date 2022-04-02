// 写一个function(fun, times,  interval)，使其在interval时间间隔中，执行times 次fun函数。 

function repeat1(fn, times, interval) {
  if (times === 0) return
  process(times)
  function process(times) {
    if (times == 0) {
      return 
    } else {
      setTimeout(() => {
        fn()
        times --
        process(times)
      }, interval);
    }
  }
}

function aa() {
  console.log(0)
}

repeat(aa, 3, 1000)