// 只出现一次的数字：https://leetcode-cn.com/problems/single-number/

// 思路1：使用对象存储结果

/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
  let obj = {}
  let res = undefined
  for (let i=0; i<nums.length;i++) {
    let cur = nums[i]
    if (obj[cur]) {
      delete obj[cur]
    } else {
      obj[cur] = true
    }
  }
  res = Object.keys(obj)[0]
  return res
};

// 思路2：异或运算
// 原理：x ^ x = 0，x ^ 0 = x，x ^ y = y ^ x

var singleNumber = function(nums) {
  let ret = 0;
  let len = nums.length;
  for (let i=0; i<len; i++) {
      ret = ret ^ nums[i];
  }
  return ret;
};