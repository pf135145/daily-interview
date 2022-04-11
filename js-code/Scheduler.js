class Scheduler {
  constructor() {
    this.schedulers = []
    this.onDoing = 0
    this.raf = null
  }

  add(promiseCreator) {
    this.schedulers.push(promiseCreator)
    this.startLoop()
  }

  startLoop() {
    if (this.onDoing < 2 && this.schedulers.length > 0) {
      let fn = this.schedulers.shift()
      fn()
      this.onDoing ++
    }
    if (this.schedulers.length) {
      this.raf = requestAnimationFrame(this.startLoop);
    } else {
      this.endLoop()
    }
    
  }

  endLoop() {
    this.raf && cancelAnimationFrame(this.raf);
    this.raf = null;
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