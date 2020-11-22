/*
执行用时：76 ms, 在所有 JavaScript 提交中击败了92.16%的用户
内存消耗：38.7 MB, 在所有 JavaScript 提交中击败了5.13%的用户
* */

/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function(digits) {
    let temp = 1;

    for (let i = digits.length - 1; i >= 0; i--){
        digits[i] += temp;
        temp = Math.floor(digits[i] / 10)
        if (digits[i] >= 10) digits[i] %= 10;
    }

    if (temp > 0){
        let list = new Array(digits.length + 1).fill(0);
        list[0] = temp;
        for (let i = 1; i < list.length; i++){
            list[i] = digits[i - 1];
        }
        return list;
    }else {
        return digits;
    }
};