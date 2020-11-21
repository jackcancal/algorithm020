/*
执行用时：88 ms, 在所有 JavaScript 提交中击败了96.16%的用户
内存消耗：39.9 MB, 在所有 JavaScript 提交中击败了43.32%的用户
* */

/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    let i = 0, j = 1;
    while (j < nums.length){
        if (nums[i] !== nums[j]) nums[++i] = nums[j];
        j++;
    }
    return ++i;
};

console.log(removeDuplicates([1,1,2]))
console.log(removeDuplicates([0,0,1,1,2,2,3,4,4,5]))