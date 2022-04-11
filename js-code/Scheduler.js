// JS 实现一个带并发限制的异步调度器 Scheduler，保证同时运行的任务最多有两个
// 完善下面的代码中的 Scheduler 类，使得一下程序能正确输出（题目见每日一题）

// 思路：在 promiseCreator 外面包一层，用来计算当前正在执行的个数，
// 每次添加的函数的时候判断正在执行的数量处理下一个函数是执行还是推到栈里，函数执行后顺序执行下一个即可

class Scheduler {
  constructor() {
    this.queue = []
    this.doing = 0
  }
  add(promiseCreator) {
    const tempFunc = () => {
      this.doing++
      promiseCreator()
        .then(() => {
          this.doing--
          if (this.queue.length) {
            let fn = this.queue.shift()
            fn()
          }
      })
    }
    if (this.doing < 2) {
      tempFunc()
    } else {
      this.queue.push(tempFunc)
    }
  }
}

const timeout = time => {
  return new Promise(resolve => {
    setTimeout(resolve, time)
  })
}

const scheduler = new Scheduler()

const addTask = (time,order) => {
  scheduler.add(() => timeout(time).then(()=>console.log(order)))
}

addTask(1000, '1')
addTask(500, '2')
addTask(300, '3')
addTask(400, '4')
addTask(600, '5')