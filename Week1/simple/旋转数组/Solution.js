/*
执行用时：84 ms, 在所有 JavaScript 提交中击败了97.61%的用户
内存消耗：38.4 MB, 在所有 JavaScript 提交中击败了42.93%的用户
* */

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function(nums, k) {
    let _k = k % nums.length;
    if (_k === 0) return;
    reverse(nums)
    reverse(nums,0,k-1)
    reverse(nums,k)
};
function reverse(list=[],start=0,end=list.length-1) {
    let s = start;
    let e = end;
    while (s < e){
        let temp = list[e];
        list[e] = list[s];
        list[s] = temp;
        s++;
        e--;
    }
}
