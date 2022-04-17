// 三数之和：https://leetcode-cn.com/problems/3sum/

// 给你一个包含 n 个整数的数组 nums，判断 nums 中是否存在三个元素 a，b，c ，
// 使得 a + b + c = 0 ？请你找出所有和为 0 且不重复的三元组。


// 思路：
// 1. 先将数组升序排序，循环数组，如果当前i>0并且nums[i] == nums[i-1] 跳过循环，剔除重复
// 2. 在循环中使用双指针指向数组头尾，通过和target比较大小移动指针，如果移动时发现当前值和前一个值相同，则继续移动

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
 var threeSum = function(nums) {
    if (nums.length < 3) return [] 
    nums.sort((a, b) => a-b)
    let res = []  
    for (let i=0; i<nums.length;i++) {
        if(nums[i] > 0) break; 
        if(i > 0 && nums[i] == nums[i-1]) continue; // 去重
        let left = i+1;
        let right = nums.length - 1
        while (left < right) {
            if (nums[i] + nums[left] + nums[right] > 0) {
                right --
            } else if (nums[i] + nums[left] + nums[right] < 0) {
                left ++
            } else {
                res.push([nums[i], nums[left], nums[right]])
                while(left < right && nums[left] == nums[left + 1]) left ++ // 先去重
                while(left < right && nums[right] == nums[right - 1]) right -- // 先去重
                left ++ // 再移动指针
                right -- // 再移动指针
            }
        }
    }
    return res
};