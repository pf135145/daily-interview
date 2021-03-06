// 实现 retryFetch 重试功能，在规定次数内失败可以重试 ，
// 请求一个资源，如果返回 404，可在 1s 后重试，重试 3 次还返回 404 就返回错误信息

function retryFetch(fn, delay, times) {
  async function process() {
    let res = await fn()
    if (res.code !== 0 && times > 0) {
      setTimeout(() => {
        times --
        process()
      }, delay)
    }
  }
  process()
}