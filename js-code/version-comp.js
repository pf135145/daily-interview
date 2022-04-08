// 假设版本号只包含数字和"."字符,比较两个版本号version1和version2，
// 1>2 返回 1，如果 1 < 2 返回 -1， 相等返回 0
// 1 和 1.0、1.0.0 是同一个版本

function versionComp(version1, version2) {
  let arr1 = version1.split('.').map(it => Number(it))
  let arr2 = version2.split('.').map(it => Number(it))
  if (arr1.length > arr2.length) {
    let len = arr2.length - 1
    arr1.forEach((it, idx) => {
      if (idx > len) arr2.push(0)
    });
  } else if (arr1.length < arr2.length) {
    let len = arr1.length - 1
    arr2.forEach((it, idx) => {
      if (idx > len) arr1.push(0)
    });
  }
  for (let i=0; i<arr1.length; i++) {
    if (arr1[i] > arr2[i]) {
      return 1
    }
    if (arr1[i] < rr2[i]) {
      return -1
    }
  }
  return 0
}


let res = versionComp('1.0.0', '2.0.1')
console.log(res)