// 实现EventBus 包括on、off、once、emit方法

class Event {
  constructor() {
    this.events = {}
  }

  on (event, cb) {
    this.events[event] = this.events[event] || []
    this.events[event].push(cb)
  }

  off(event, cb) {
    if(this.events[event]) {
      this.events[event] = this.events[event].find(it => it !== cb)
    }
  }

  once(event, cb) {
    let onceWrap = () => {
      cb()
      this.off(event, onceWrap)
    }
    this.on(event, onceWrap)
  }

  emit(event, data) {
    if (this.events[event]) {
      this.events[event].forEach(cb => cb(data))
    }
  }
}