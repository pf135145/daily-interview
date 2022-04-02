//简单实现vue双向绑定的原理

class Observabel {
  constructor(obj, fn) {
    // this._data = obj
    window.notifyFn = fn
    // this.walk(this._data)
    this._data = this.newObserval(obj)
  }

  walk(data) {
    for (let key in data) {
      if (typeof data[key] === 'object' && !Array.isArray(data[key])) {
        this.walk(data[key])
      } else {
        if (Array.isArray(data[key])) {
          this.observalArr(data[key])
        }
        this.observal(data, key, data[key])
      }
    }
  }

  observalArr(data) {
    data.push = rePush
  }

  observal(data, key, val) {
    Object.defineProperty(data, key, {
      enumerable : true,
      configurable : true,
      get() { 
        return val
      },
      set(newValue) {
        val = newValue;
        window.notifyFn()
      }
    })
  }

  newObserval(obj) {
    return new Proxy(obj, {
      get(obj, key) {
        return obj[key]
      },
      set(obj, key, val) {
        console.log(11111)
        obj[key] = val
        window.notifyFn()
        return Reflect.set(obj, key, val)
      }
    })
  }
}

function rePush(...args) {
  [].push.apply(this, args);
  window.notifyFn();
}