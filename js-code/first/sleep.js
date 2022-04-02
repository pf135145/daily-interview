const doFns = async () => {
    const name = await sleep(consoleStr('前端胖头鱼'), 1000)
    const sex = await sleep(consoleStr('boy'), 1000)
    const age = await sleep(consoleStr(100), 1000)
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
// 前端胖头鱼  1s later
// boy 2s later
// 100 3s later
// 前端胖头鱼 boy 100