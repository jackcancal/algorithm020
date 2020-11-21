/*
执行用时：72 ms, 在所有 JavaScript 提交中击败了99.48%的用户
内存消耗：37.9 MB, 在所有 JavaScript 提交中击败了72.68%的用户
* */
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    let map = {};
    for (let i = 0; i < nums.length; i++){
        if (map[nums[i]] === void 0){
            map[target - nums[i]] = i
        }else {
            return [map[nums[i]], i]
        }
    }
};