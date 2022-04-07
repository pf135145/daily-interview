// 实现 repeat 函数，使其在 interval 时间间隔中，执行 times 次函数

// 思路：使用闭包记录当前执行次数，使用 setTimeout 执行

function repeat(fn, times, interval) {
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
  console.log('aa')
}

repeat(aa, 3, 1000)