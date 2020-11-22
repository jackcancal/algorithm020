/*
执行用时：0 ms, 在所有 Java 提交中击败了100.00%的用户
内存消耗：37 MB, 在所有 Java 提交中击败了65.36%的用户
* */
package 加一;

public class Solution {
    public static void main(String[] args) {
    }
    public int[] plusOne(int[] digits) {
        int temp = 1;
        for (int i = digits.length - 1; i >= 0; i--){
            digits[i] += temp;
            temp = digits[i] / 10;
            if (digits[i] >= 10) digits[i] %= 10;
        }
        if (temp > 0){
            int[] list = new int[digits.length + 1];
            list[0] = temp;
            System.arraycopy(digits, 0, list, 1, list.length - 1);
            return list;
        }else {
            return digits;
        }
    }
}
