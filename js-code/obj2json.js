// 实现
const data1 = {"a.b.c": 1, "a.b.d": 2}
const data2 = {"a.b.e": 3, "a.b.f": 4} 
// 得到结果
// {
//   a: {
//     b: {
//       c: 1,
//       d: 2,
//       e: 3,
//       f: 4
//     }
//   }
// }

// 思路：把对象想象成链表，把属性拆分成数组，循环数组，切换到链表的下一个，注意重复属性

function transObj(obj1, obj2) {
  let obj = Object.assign(obj1, obj2)
  const res = {};
  for (const key in obj) {
    if (key.indexOf('.') === -1) {
      res[key] = obj[key];
    } else {
      const props = key.split('.');
      let temp = res;
      const len = props.length - 1;
      props.forEach((it, idx) => {
        if (!temp[it]) {
          const o = {};
          if (it === 'b') {
          }
          temp[it] = o;
          if (idx !== len) {
            temp = o;
          } else {
            temp[it] = obj[key];
          }
        } else {
          if (idx === len) {
            temp[it] = obj[key];
          } else {
            temp = temp[it]
          }
        }
      });
    }
  }
  return res;
}

console.log(transObj(data1, data2))
