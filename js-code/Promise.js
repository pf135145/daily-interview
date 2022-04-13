// 实现 Promise.all/race/allSeleted

Promise._all = function(params) {
  if (!Array.isArray(params)) {
    throw new TypeError("params must be an array")
  }
  return new Promise((resolve, reject) => {
    let nums = params.length
    let idx = 0
    let res = []
    for (let i=0; i<nums; i++) {
      if (!params[i]) {
        params[i] = Promise.resolve()
      }
      if (!params[i].then) {
        params[i] = Promise.resolve(params[i])
      }
      params[i].then((data) => {
        idx ++
        res[i] = data
        idx == nums && resolve(res)
      }, (err) => {
        reject(err)
      })
    }
  })
}

Promise._race = function(params) {
  if (!Array.isArray(params)) {
    throw new TypeError("params must be an array")
  }
  return new Promise((resolve, reject) => {
    for (let i=0; i<params.length; i++) {
      if (!params[i]) {
        params[i] = Promise.resolve()
      }
      if (!params[i].then) {
        params[i] = Promise.resolve(params[i])
      }
      params[i].then((data) => {
        resolve(data)
      }, (err) => {
        reject(err)
      })
    }
  })
}

Promise._allSettled = function(params) {
  if (!Array.isArray(params)) {
    throw new TypeError("params must be an array")
  }
  return new Promise((resolve, reject) => {
    for (let i=0; i<params.length; i++) {
      if (!params[i]) {
        params[i] = Promise.resolve()
      }
      if (!params[i].then) {
        params[i] = Promise.resolve(params[i])
      }
      params[i].then((data) => {
        idx ++
        res[i] = {
          status: 'fulfilled',
          value: data
        }
        idx == nums && resolve(res)
      }, (err) => {
        idx ++
        res[i] = {
          status: 'rejected',
          reason: err
        }
        idx == nums && resolve(res)
      })
    }
  })
}

// 实现 Promise.prototype.then
Promise.prototype._finally = function(cb) {
  return this.then((value) => {
    return Promise.resolve(cb()).then(() => value)
  },(err) => {
    return Promise.resolve(cb()).then(() => { throw err })
  })
}

// new Promise((resolve, reject) => {
//   setTimeout(() => resolve("result"), 2000)
// })
//   .then(result => console.log(result))
//   ._finally(() => console.log("Promise end"))


// new Promise((resolve, reject) => {
//   throw new Error("error")
// })
//   .catch(err => console.log(err))
//   ._finally(() => console.log("Promise end"))
  
  
