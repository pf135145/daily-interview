// 实现 sleep 函数，效果如下：

// 小明  1s later
// boy 2s later
// 18 3s later
// 小明 boy 18

// 思路：在 promise 中嵌套 setTimeout，在 delay 时间后 resolve

const doFns = async () => {
  const name = await sleep(consoleStr('小明'), 1000)
  const sex = await sleep(consoleStr('boy'), 1000)
  const age = await sleep(consoleStr(18), 1000)
  console.log(name, sex, age)
}

doFns()

function sleep(fn, delay) {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve()
    }, delay) 
  })
}
