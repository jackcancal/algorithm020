/*
执行用时：84 ms, 在所有 JavaScript 提交中击败了94.07%的用户
内存消耗：39.4 MB, 在所有 JavaScript 提交中击败了42.68%的用户
* */

/**
 * @param {number[]} height
 * @return {number}
 */
var trap = function(height) {
    let left = 0, right = height.length - 1,
        leftMax = 0, rightMax = 0 ,sum = 0;
    while (left < right){
        leftMax = Math.max(leftMax, height[left]);
        rightMax = Math.max(rightMax, height[right]);
        if (leftMax <= rightMax)sum += leftMax - height[left++];
        else sum += rightMax - height[right--];
    }
    return sum;
};