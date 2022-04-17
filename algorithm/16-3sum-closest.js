// 最接近的三数之和：https://leetcode-cn.com/problems/3sum-closest/

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
 var threeSumClosest = function(nums, target) {
  nums.sort((a, b) => a - b);
  let min = Infinity;
  const len = nums.length;
  for (let i = 0; i < len; i++) {
      let [left, right] = [i + 1, len - 1];
      while (left < right) {
          const sum = nums[i] + nums[left] + nums[right];
          if (Math.abs(sum - target) < Math.abs(min - target)) {
              min = sum;
          }
          if (sum < target) {
              left++;
          } else if (sum > target) {
              right--;
          } else {
              return sum;
          }
      }
  }
  return min;
};