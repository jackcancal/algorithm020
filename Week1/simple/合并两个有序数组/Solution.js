/*
执行用时：76 ms, 在所有 JavaScript 提交中击败了93.19%的用户
内存消耗：37.8 MB, 在所有 JavaScript 提交中击败了36.55%的用户
* */
/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function(nums1, m, nums2, n) {
    let i = nums1.length - 1;
    let j = n - 1;
    let k = m - 1;
    while (i >= 0 && j >= 0){
        if (k < 0 || nums1[k] < nums2[j]){
            nums1[i] = nums2[j];
            i--;
            j--;
            continue;
        }
        nums1[i] = nums1[k];
        i--;
        k--;
    }
};