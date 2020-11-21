/*
执行用时：84 ms, 在所有 JavaScript 提交中击败了96.64%的用户
内存消耗：39.6 MB, 在所有 JavaScript 提交中击败了11.14%的用户
* */

function ListNode(val, next) {
    this.val = (val===undefined ? 0 : val)
    this.next = (next===undefined ? null : next)
}
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var mergeTwoLists = function(l1, l2) {
    if (!l1) return l2
    if (!l2) return l1
    if (l1.val > l2.val) [l1,l2] = [l2,l1]
    l1.next = mergeTwoLists(l1.next, l2)
    return l1
};
