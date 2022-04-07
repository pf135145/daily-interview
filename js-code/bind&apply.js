function bind(...outArg) {
  return (...innerArg) => {
    let outLeft = outArg.slice(1)
    this.apply(outArg[0], [...outLeft, ...innerArg])
  }
}
