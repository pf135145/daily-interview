// requestAnimationFrame 实现 setTimeout/setInterval

function loop(fn) {
  let self = this
  fn()
  requestAnimationFrame(loop.bind(self, fn))
}