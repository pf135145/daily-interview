/**
 * 扁平对象合并名称
 */

let data = {
    nio: {
        byb: [1,2],
        xpev: {
            li: 1,
            vi: {
                k: [3]
            }
        },
        c: 2
    },
    tsla: 3
}
res = { nio_byb: [ 1, 2 ], nio_xpev_li: 1, nio_xpev_vi_k: [ 3 ], nio_c: 2 ,tsla: 3 }

function handleObj1(obj) {
    let res = {}
    process(res, obj, '')
    return res
}

function process(res, obj, pre) {
    for (let key in obj) {
        if (typeof obj[key] != 'object' || Array.isArray(obj[key])) {
            if (pre) {
                res[`${pre}_${key}`] = obj[key]
            } else {
                res[key] = obj[key]
            }
        } else {
            let newPre = pre ? `${pre}_${key}` : key
            process(res, obj[key], newPre)
        }
    }
}

// 小燕解法
function handleObj(obj) {
    let res = {}
    if (obj === null || typeof obj !== 'object' || Array.isArray(obj)) return obj
    for (let key in obj) {
        if (typeof obj[key] != 'object' || Array.isArray(obj[key])) {
            res[key] = obj[key]
        } else {
            const data = handleObj(obj[key])
            Object.keys(data).forEach(_key => {
                res[`${key}_${_key}`] = handleObj(data[_key])
            })
        }
    }
    return res
}

const test1 = [1, 2]
console.log(handleObj1(test1)) 