package 合并两个有序链表;
/*
执行用时：0 ms, 在所有 Java 提交中击败了100.00%的用户
内存消耗：37.8 MB, 在所有 Java 提交中击败了88.49%的用户
* */
class ListNode {
  int val;
  ListNode next;
  ListNode() {}
  ListNode(int val) { this.val = val; }
  ListNode(int val, ListNode next) { this.val = val; this.next = next; }
}

public class Solution {
    public static void main(String[] args) {

    }
    public ListNode mergeTwoLists(ListNode l1, ListNode l2) {
        if (l1 == null) return l2;
        if (l2 == null) return l1;
        if (l1.val > l2.val){
            ListNode temp = l2;
            l2 = l1;
            l1 = temp;
        }
        l1.next = mergeTwoLists(l1.next, l2);
        return l1;
    }
}
