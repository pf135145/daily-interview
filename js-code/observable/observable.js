//用 proxy 简单实现vue双向绑定的原理

class Observabel {
  constructor(obj, fn) {
    window.notifyFn = fn;
    // this.walk(this._data)
    this._data = this.newObserval(obj);
    this.walk(this._data)
  }

  walk(data) {
    for (let key in data) {
      if (Array.isArray(data[key])) {
        try {
          data[key] = this.newObserval(data[key])
        } catch (error) {
          console.log(error)
        }
        
      }
      // if (typeof data[key] === 'object' && !Array.isArray(data[key])) {
      //   this.walk(data[key]);
      // } else {
      //   this.observal(data, key, data[key]);
      // }
    }
  }

  observal(data, key, val) {
    Object.defineProperty(data, key, {
      enumerable: true,
      configurable: true,
      get() {
        return val;
      },
      set(newValue) {
        val = newValue;
        window.notifyFn();
      },
    });
  }

  newObserval(obj) {
    return new Proxy(obj, {
      get(target, key, receiver) {
        // console.log('---key', key);
        return obj[key];
      },
      set(obj, key, val, receiver) {
        obj[key] = val;
        console.log('---key', key);
        window.notifyFn();
        // return Reflect.set(obj, key, val);
      },
    });
  }
}
