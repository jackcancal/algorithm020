/*
执行用时：76 ms, 在所有 JavaScript 提交中击败了99.39%的用户
内存消耗：40.7 MB, 在所有 JavaScript 提交中击败了5.07%的用户
* */

/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function(nums) {
    let i = 0, j = 1;
    while (j < nums.length){
        if (nums[i] === 0){
            if (nums[j] !== 0) {
                let temp = nums[j];
                nums[j] = nums[i];
                nums[i] =temp;
                i++;
            }
        }else {
            i++;
        }
        j++;
    }
};