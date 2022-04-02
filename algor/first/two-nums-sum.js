// 给定一个数组arr，选出2个数的和等于m，找出其中的一种组合即可

function sum (arr, target) {
  if (!arr.length) return []
  let map = {}
  let res = []
  arr.forEach((it, idx) => {
    if (map[target - it]) {
      res = [map[target - it] - 1, idx]
    } else {
      map[it] = idx + 1
    }
  });
  return res
}

console.log(sum([1, 2, 3, 4], 3))
